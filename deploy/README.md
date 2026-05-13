# Self-hosting on Tokyo VPS

This fork is intended to be served as a static site at `https://tools.yulai.org`.

Recommended deployment shape:

1. Build static assets:

   ```bash
   corepack enable
   corepack pnpm install --frozen-lockfile
   corepack pnpm build
   ```

2. Sync `dist/` to the VPS path:

   ```bash
   rsync -av --delete dist/ ops@47.91.16.236:/srv/it-tools/dist/
   ```

3. Serve it with Nginx using `deploy/nginx-tools.yulai.org.conf`.

Access control:

- Preferred simple setup: Nginx Basic Auth at the origin, plus Cloudflare proxy.
- Stronger setup: Cloudflare Access in front of the same origin.
- Private-only setup: bind Nginx to Tailscale or only expose it through an SSH tunnel.

Do not paste highly sensitive secrets into browser-side tools unless you trust this build and its dependencies. This is a static frontend app; authentication controls who can open it, but the JavaScript still runs in your browser.
