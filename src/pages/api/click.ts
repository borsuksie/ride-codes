import type { APIRoute } from 'astro';
import { apps } from '../../data/apps';
import { recordClick } from '../../lib/codes';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const appId = body && typeof body.appId === 'string' ? body.appId : '';

  if (!apps.some((app) => app.id === appId)) {
    return new Response(null, { status: 400 });
  }

  await recordClick(appId);
  return new Response(null, { status: 204 });
};
