// How many members the association has, read at build time from the HelloAsso
// API: memberships sold through the membership form. Needs an API client
// (HELLOASSO_CLIENT_ID and HELLOASSO_CLIENT_SECRET); without one, or if the
// API fails, the numbers are simply not shown. Only counts leave this file:
// no names or emails reach the page.

const API = 'https://api.helloasso.com';
const ORGANIZATION = 'indie-collective';
const FORM = 'adhesion-indie-collective';
const PAGE_SIZE = 100;
const MAX_PAGES = 50;

export type Membership = {
  date: string;
  type?: string;
  state?: string;
  user?: { firstName?: string; lastName?: string };
  payer?: { email?: string };
};

export type Members = { year: number; thisYear: number; allTime: number; since: number };

let cached: Promise<Members | null> | undefined;
export const getMembers = () => (cached ??= load());

const TIME_ZONE = 'Europe/Paris';
const yearOf = (date: Date) => Number(new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: TIME_ZONE }).format(date));

// One person may pay twice (renewing, or a second payment): count people, not payments.
const personOf = (item: Membership) => {
  const name = [item.user?.firstName, item.user?.lastName]
    .filter(Boolean)
    .join(' ')
    .trim()
    .toLocaleLowerCase('fr');
  return name || item.payer?.email?.toLowerCase() || null;
};

/** Distinct members this calendar year and ever, from paid memberships. */
export function countMembers(items: Membership[], now = new Date()): Members | null {
  const paid = items.filter(
    (item) => (!item.type || item.type === 'Membership') && (!item.state || ['Processed', 'Registered'].includes(item.state))
  );
  if (paid.length === 0) return null;
  const year = yearOf(now);
  const everyone = new Set<string>();
  const thisYear = new Set<string>();
  let since = year;
  for (const [index, item] of paid.entries()) {
    const date = new Date(item.date);
    const person = personOf(item) ?? `#${index}`;
    everyone.add(person);
    if (yearOf(date) === year) thisYear.add(person);
    since = Math.min(since, yearOf(date));
  }
  return { year, thisYear: thisYear.size, allTime: everyone.size, since };
}

async function load(): Promise<Members | null> {
  // From .env locally (Vite's import.meta.env), from the environment in CI.
  const id = import.meta.env.HELLOASSO_CLIENT_ID ?? process.env.HELLOASSO_CLIENT_ID;
  const secret = import.meta.env.HELLOASSO_CLIENT_SECRET ?? process.env.HELLOASSO_CLIENT_SECRET;
  if (!id || !secret) {
    console.warn('[helloasso] no HELLOASSO_CLIENT_ID / HELLOASSO_CLIENT_SECRET: member counts hidden');
    return null;
  }
  try {
    const tokenResponse = await fetch(`${API}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: id, client_secret: secret, grant_type: 'client_credentials' }),
      signal: AbortSignal.timeout(15_000),
    });
    if (!tokenResponse.ok) throw new Error(`token: ${tokenResponse.status}`);
    const { access_token: token } = (await tokenResponse.json()) as { access_token: string };

    const items: Membership[] = [];
    let continuationToken: string | undefined;
    for (let page = 0; page < MAX_PAGES; page++) {
      const url = new URL(`${API}/v5/organizations/${ORGANIZATION}/forms/Membership/${FORM}/items`);
      url.searchParams.set('pageSize', String(PAGE_SIZE));
      url.searchParams.append('itemStates', 'Processed');
      url.searchParams.append('itemStates', 'Registered');
      url.searchParams.append('tierTypes', 'Membership');
      if (continuationToken) url.searchParams.set('continuationToken', continuationToken);
      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) throw new Error(`items: ${response.status}`);
      const body = (await response.json()) as { data?: Membership[]; pagination?: { continuationToken?: string } };
      const data = body.data ?? [];
      items.push(...data);
      const next = body.pagination?.continuationToken;
      if (data.length < PAGE_SIZE || !next || next === continuationToken) break;
      continuationToken = next;
    }
    return countMembers(items);
  } catch (error) {
    console.warn('[helloasso] could not count members:', error instanceof Error ? error.message : error);
    return null;
  }
}
