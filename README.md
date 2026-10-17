# Muhammad Usama — Cinematic Portfolio

Next.js App Router + React + Tailwind CSS, with GSAP, Lenis and OGL effects.

## Run
Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```
Open http://localhost:3000. For production:

```sh
npm run build
npm start
```

Deploy with Vercel's Next.js preset or another Next.js-compatible Node host. No database or API key is required. Set `NEXT_PUBLIC_SITE_URL` to your final HTTPS domain before building to generate a full sitemap and correct share URLs. Without it, the sitemap is empty and social metadata uses your existing portfolio domain.

## Included
- Cinematic scroll-scrubbed character video, orange/black typography, animated sections, smooth scroll and persistent client-side navigation.
- Curved WebGL project gallery with clickable case studies, category filters and arrows. CSS gallery fallback for unavailable WebGL and reduced-motion preferences.
- Holographic profile card using an original MU monogram; no unverified portrait.
- Contact shader with CSS fallback.
- Six project detail pages, experience, education, skills, tools, resume and cover-letter downloads.
- Five Verendo articles with actual article routes, images, full recovered text and related reading.
- Responsive layouts and reduced-motion support.

## Content editing
- `src/data/profile.js`: identity, contact, skills, work history, education.
- `src/data/projects.json`: six projects and complete case studies.
- `src/data/posts.json`: the five recovered Verendo articles.
- `public/projects`, `public/blog`, `public/documents`: original portfolio assets and documents.
- `src/app/globals.css`: layout and design styles.
- `src/components/VideoScrub.jsx`: scroll animation.

Contact forms open a prefilled draft in the visitor's email application. The visitor sends the email there. There is no server-side mail delivery or fake success confirmation.

## Sources and content decisions
Personal information and six case studies were transferred from https://usama-portfolio-wine.vercel.app/ and its linked CV. Project images retain their original concept-artwork status. No new project completion claims or testimonials have been added.

Blog content and imagery came from the supplied prior Verendo project archive. Its explicit placeholder funding-announcement post was excluded. The remaining five articles are reproduced without invented authorship or publication dates.

The design adapts https://www.sarang-space.site/ and the MIT-licensed repository https://github.com/5araang/Nextjs-cinematic-portfolio. Original copyright and permission notice are retained in LICENSE; it is a required legal notice, not portfolio content. The cinematic character is a decorative reference-design asset, not a claim that it depicts Usama. All visible personal identity and project details have been replaced.

## Responsive revision
See RESPONSIVE-FIXES.md for the mobile/tablet fixes and exact tested widths.

## Verification and limits
Production build generates all six project and five blog article routes. Desktop browser inspection verified homepage rendering, scroll-driven character scene and the CSS project-gallery fallback. The QA browser lacks WebGL, so GPU shader rendering could not be visually verified there. Responsive CSS is included; physical mobile-device performance has not been benchmarked. No claim of zero loading time or pixel-perfect identity across devices is made.

The ZIP excludes dependency folders, build caches and Git history. Run npm ci after extracting. All design source, media, article data and documents required to run the site are included.
