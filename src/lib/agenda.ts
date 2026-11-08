// The association's upcoming events, read at build time from the calendar
// Community publishes for the Indie Collective organisation. The site is
// rebuilt every day (.github/workflows/deploy.yml), so the list stays fresh
// without any script on the page.
import ICAL from 'ical.js';
import { CALENDAR_ICS } from '../data/links';

export type AgendaEvent = {
  uid: string;
  name: string;
  url: string | null;
  start: Date;
  end: Date;
  allDay: boolean;
  location: string | null;
  canceled: boolean;
};

export type Agenda = { ok: true; events: AgendaEvent[] } | { ok: false; events: [] };

let cached: Promise<Agenda> | undefined;

/** Fetched once per build, shared by the three language pages. */
export const getAgenda = () => (cached ??= load());

async function load(): Promise<Agenda> {
  try {
    const response = await fetch(CALENDAR_ICS, { signal: AbortSignal.timeout(15_000) });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const events = parse(await response.text());
    const now = Date.now();
    return {
      ok: true,
      events: events.filter((event) => event.end.getTime() >= now).sort((a, b) => +a.start - +b.start),
    };
  } catch (error) {
    // A build must not fail because Community is down: the section says so instead.
    console.warn(`[agenda] could not load ${CALENDAR_ICS}:`, error);
    return { ok: false, events: [] };
  }
}

export function parse(ics: string): AgendaEvent[] {
  const calendar = new ICAL.Component(ICAL.parse(ics));
  return calendar.getAllSubcomponents('vevent').map((vevent) => {
    const event = new ICAL.Event(vevent);
    const status = vevent.getFirstPropertyValue('status');
    const url = vevent.getFirstPropertyValue('url');
    return {
      uid: event.uid,
      name: event.summary,
      url: typeof url === 'string' ? url : null,
      start: event.startDate.toJSDate(),
      end: (event.endDate ?? event.startDate).toJSDate(),
      allDay: event.startDate.isDate,
      location: event.location || null,
      canceled: String(status).toUpperCase() === 'CANCELLED',
    };
  });
}

const TIME_ZONE = 'Europe/Paris';

/** "16 oct." style day and month for the ticket stub. */
export const stub = (date: Date, locale: string) => {
  const parts = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', timeZone: TIME_ZONE }).formatToParts(date);
  return {
    day: parts.find((p) => p.type === 'day')?.value ?? '',
    month: (parts.find((p) => p.type === 'month')?.value ?? '').replace(/\.$/, ''),
  };
};

/** "16–18 octobre 2026", or one day with its time. */
export const when = (event: AgendaEvent, locale: string) => {
  const day = { day: 'numeric', month: 'long', year: 'numeric', timeZone: TIME_ZONE } as const;
  // An all-day event's end is the morning after its last day.
  const end = event.allDay ? new Date(event.end.getTime() - 1) : event.end;
  const sameDay =
    new Intl.DateTimeFormat('en-CA', { timeZone: TIME_ZONE }).format(event.start) ===
    new Intl.DateTimeFormat('en-CA', { timeZone: TIME_ZONE }).format(end);
  if (sameDay) {
    return event.allDay
      ? new Intl.DateTimeFormat(locale, day).format(event.start)
      : new Intl.DateTimeFormat(locale, { ...day, hour: '2-digit', minute: '2-digit' }).format(event.start);
  }
  return new Intl.DateTimeFormat(locale, day).formatRange(event.start, end);
};

/** "Le Jardin Moderne, Rennes" from a full postal address. */
export const place = (location: string) => {
  const parts = location.split(',').map((part) => part.trim()).filter(Boolean);
  // Community's addresses end with city, region, country.
  const venue = parts[0];
  const city = parts.length >= 3 ? parts[parts.length - 3] : parts[parts.length - 1];
  return venue === city ? venue : `${venue}, ${city}`;
};
