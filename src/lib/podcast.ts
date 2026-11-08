// The latest episodes, read at build time from the podcast's RSS feed.
import { PODCAST_RSS } from '../data/podcast';

export type Episode = { title: string; url: string; date: Date; minutes: number | null };
export type Podcast = { ok: boolean; count: number; episodes: Episode[] };

let cached: Promise<Podcast> | undefined;
export const getPodcast = () => (cached ??= load());

const text = (item: string, tag: string) => {
  const match = item.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`));
  return match ? decode(match[1].trim()) : '';
};

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'");

// itunes:duration is seconds, or h:mm:ss.
const minutes = (duration: string) => {
  if (!duration) return null;
  const seconds = duration.split(':').reduce((total, part) => total * 60 + Number(part), 0);
  return Number.isFinite(seconds) ? Math.round(seconds / 60) : null;
};

async function load(): Promise<Podcast> {
  try {
    const response = await fetch(PODCAST_RSS, { signal: AbortSignal.timeout(15_000) });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    const items = (await response.text()).split('<item>').slice(1);
    const episodes = items.map((item) => ({
      title: text(item, 'title'),
      url: text(item, 'link'),
      date: new Date(text(item, 'pubDate')),
      minutes: minutes(text(item, 'itunes:duration')),
    }));
    return { ok: true, count: episodes.length, episodes: episodes.slice(0, 3) };
  } catch (error) {
    console.warn(`[podcast] could not load ${PODCAST_RSS}:`, error);
    return { ok: false, count: 0, episodes: [] };
  }
}
