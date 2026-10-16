# Innoventix Hub

Next.js App Router site with Tailwind CSS v4, GSAP and Lenis.

## Development

- `pnpm dev` to run locally
- `pnpm build` must pass before shipping
- Do not push to `main`. Main auto-deploys the live site.

## Structure

- `src/app` — routes, metadata, sitemap and robots
- `src/config/site.ts` — Calendly, emails, phone, chatbot slot, live-ads flag
- `src/components` — layout, motion and shared sections
- `content/blog` — markdown and MDX posts (noindex, hidden from nav and footer)
- `public` — logos, team photos, ad creatives and work screenshots

## Styling

Tailwind v4 is loaded from `src/app/globals.css`. Brand colors: navy `#1E3A5F`, amber `#FFB547`. Font: Lato via `next/font`.
