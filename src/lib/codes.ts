import { Redis } from '@upstash/redis';
import { apps } from '../data/apps';

export interface CodeEntry {
  code: string;
  url: string;
  updatedAt?: string;
}

let redis: Redis | null | undefined;

/** Lazily creates the Upstash client. Returns null if env vars are missing (local dev without a DB). */
function getRedis(): Redis | null {
  if (redis !== undefined) return redis;
  const url = import.meta.env.UPSTASH_REDIS_REST_URL;
  const token = import.meta.env.UPSTASH_REDIS_REST_TOKEN;
  redis = url && token ? new Redis({ url, token }) : null;
  return redis;
}

function defaults(): Record<string, CodeEntry> {
  const result: Record<string, CodeEntry> = {};
  for (const app of apps) {
    result[app.id] = { code: app.defaultCode, url: app.defaultUrl };
  }
  return result;
}

/** Returns the current code/url for every app, falling back to the defaults in apps.ts. */
export async function getAllCodes(): Promise<Record<string, CodeEntry>> {
  const result = defaults();
  const client = getRedis();
  if (!client) return result;

  const keys = apps.map((app) => `code:${app.id}`);
  const stored = await client.mget<(CodeEntry | null)[]>(...keys);

  apps.forEach((app, i) => {
    const entry = stored[i];
    if (entry && entry.code && entry.url) {
      result[app.id] = entry;
    }
  });

  return result;
}

/** Updates a single app's code/url. Used by the admin panel. */
export async function setCode(appId: string, entry: { code: string; url: string }): Promise<void> {
  const client = getRedis();
  if (!client) throw new Error('Brak konfiguracji bazy danych (UPSTASH_REDIS_REST_URL / TOKEN).');

  const value: CodeEntry = {
    code: entry.code.trim(),
    url: entry.url.trim(),
    updatedAt: new Date().toISOString(),
  };
  await client.set(`code:${appId}`, value);
}

/** Increments the click counter for an app. No-op if Redis isn't configured. */
export async function recordClick(appId: string): Promise<void> {
  const client = getRedis();
  if (!client) return;
  await client.incr(`clicks:${appId}`);
}

/** Returns the click count for every app (0 if never clicked or Redis isn't configured). */
export async function getAllClickCounts(): Promise<Record<string, number>> {
  const result: Record<string, number> = {};
  for (const app of apps) result[app.id] = 0;

  const client = getRedis();
  if (!client) return result;

  const keys = apps.map((app) => `clicks:${app.id}`);
  const counts = await client.mget<(number | null)[]>(...keys);
  apps.forEach((app, i) => {
    result[app.id] = counts[i] ?? 0;
  });

  return result;
}
