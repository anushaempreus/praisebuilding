# Praise Building

A Next.js (App Router) website for Praise Building — residential builders, Sydney.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx            Fonts (next/font), <Nav/>, <Footer/>, metadata
  page.tsx              Home
  globals.css           Design tokens (CSS variables) + all page styles
  work/page.tsx         Projects index
  work/[slug]/page.tsx  Case-study template (generateStaticParams)
  craft/page.tsx        How we build
  praise/page.tsx       Testimonials
  practice/page.tsx     About
  contact/page.tsx      Enquiry form
  api/contact/route.ts  Form handler (wire to SendGrid/Resend)
components/             Nav, Footer, Reveal, Count, Dim, Marquee, ProjectCard
lib/
  theme.ts              Colours + fonts (JS mirror of the CSS vars)
  projects.ts           THE project catalogue — single source of truth
public/projects/<suburb>/   drop your real photos here
```

## Adding / editing projects

Everything project-related lives in `lib/projects.ts`. Add one object and the
home page, the `/work` index, and the `/work/<slug>` case study all update.

## Swapping in real photos

The catalogue currently points at Unsplash placeholders. Drop your photos into
`public/projects/<suburb>/` and change the URLs to local paths, e.g.
`cover: "/projects/paddington/01.jpg"`. Once nothing points at Unsplash you can
delete the `images.remotePatterns` block in `next.config.js`. For best
performance, swap the plain `<img>` tags for `next/image`.

## Contact form

`app/api/contact/route.ts` validates and logs the enquiry. Plug in SendGrid or
Resend where the TODO is, reading the API key from an env var.

## Design notes

- Palette: deep emerald + gold on warm cream (CSS variables in `globals.css`).
- Type: Fraunces (display), Archivo (body), Space Mono (labels).
- Signature: architect's-drawing dimension lines used as section dividers.
- Motion respects `prefers-reduced-motion`.

Designed & built by Empreus IT Support.
