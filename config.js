// Cloudflare Worker (public, CORS-friendly)
// TODO: Replace with your Cloudflare Worker URL after deployment
window.CLOUDFLARE_WORKER_URL = 'https://ccc-sk6.lady-qwickske.workers.dev/';

// Frontend should call the worker to avoid GAS CORS restrictions.
window.GAS_WEB_APP_URL = window.CLOUDFLARE_WORKER_URL;
