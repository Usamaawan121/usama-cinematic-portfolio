# Usama Cinematic V7 — Next.js / React (multi-page)

A premium dark / champagne-gold full-stack portfolio. This is a **separate implementation based on the available V6 React source**, not a verified in-place edit of the original local `E:\Projects\Muhammad-Usama-Portfolio\usama-portfolio` repository. The original folder screenshot was not a source ZIP.

## Pages and routes

- `/` — Homepage, cinematic animated portrait, selected projects, featured Tummly, scroll chapters, Engineering in Motion.
- `/work` — Project gallery with functional category filters.
- `/work/tummly`, `/work/verendo`, `/work/netflix-system`, `/work/ai-chatbot`, `/work/employee-management`, `/work/nexora`, `/work/banking-management`, `/work/real-estate` — individual case studies with architecture/decision content, interactive flows, image zoom, next-project navigation.
- `/about` — personal story, portrait and personal video section.
- `/skills` — technologies grouped by engineering discipline.
- `/experience` — chronological experience and training.
- `/contact` — verified contact links and validated mailto draft form.

## Run as an independent project

Requires Node 20.9+. From this directory:

```bash
npm install
npm run dev
# open http://localhost:3000
npm run build
```

Package versions were chosen from publicly reported patched releases of Next.js 16.4.3 / React 19.3.1 current as of October 2026. Recheck security status before future deployment.

## Upgrading your existing GitHub / Vercel site

**Important**: Back up the old repository or create a new Git branch first. The copy-paste overlay replaces `src/app`, data and components with V7. The old `/` route changes, and the original native 3D character implementation is **not preserved** by this overlay because the original source was not provided. The existing character is represented by a short moving excerpt from the user-provided recording. Do not use the overlay if retaining the exact original interactive model is non-negotiable.

1. Create a backup branch: `git switch -c cinematic-v7-backup` followed by `git switch main`.
2. Make a backup copy of the existing `src` folder outside the project.
3. Merge the V7 `src` and `public` directories into the existing project. Replace the old V6 page/components only after local testing, but **keep `.git`, `node_modules`, `.env*`, existing user video files and original project assets** intact.
4. If your existing compatible Next.js installation already runs the React App Router, source-only overlay does not introduce extra third-party runtime dependencies. It may still require `npm install` if the existing versions differ from those expected by this package.
5. `npm run dev` and `npm run build`; verify all routes and video assets before `git add . && git commit -m "Redesign cinematic portfolio V7" && git push origin main`.
6. Vercel redeploys the existing Git-connected project when you push the branch configured for production.

### Video source details

- `/public/media/character-loop.mp4` is a short excerpt extracted from the user's original portfolio recording. It is **not the original live 3D/WebGL animation**.
- `/public/media/engineering-motion.mp4` is an original illustrative motion sequence of an application workflow, not a screen recording of the user's employment.
- **Personal AI introduction video not available** in provided working files. The About page provides a dedicated presentation component but doesn't fabricate a personal video. To activate it, put your original video on a stable public URL, verify it, and set `NEXT_PUBLIC_INTRO_VIDEO_URL=https://.../your-video.mp4` in `.env.local` (and in Vercel). This component uses user-controlled playback with sound off by default until the user initiates playback.
- No fake testimonials, production metrics, live product screenshots or invented URLs are added.

### Visual assets

Project art under `public/art` is custom SVG **interface and architecture visualization**, not an actual product screenshot. Replace with verified screenshots when available, especially for Tummly and Verendo. Each case study describes its status and contributions accurately.

## Design and animation

- Palette: obsidian #08090B, charcoal #14161A, champagne gold #D6B36A, ivory #F5F1E8, muted silver #A6A8AD with restrained copper/blue accents.
- Scroll-based three-chapter 3D orbital story, responsive project hover tilt, cinematic masked hero portrait, subtle rotating orbits, project thumbnail scale, modal image zoom, motion toggle.
- CSS/React only, no GSAP, Three.js or new heavy packages. Reduced-motion preferences respected. Original rotating 3D model could be integrated later when its real source files are available.
- `mailto:` contact form opens a draft; it **does not send messages automatically**.

## Checks and limitations

- JSX/JavaScript parsed using the TypeScript parser; CSS parsed using tinycss2; project route and asset references checked.
- The Next.js production build could not be run in this container because `npm install` timed out on registry networking. **Do not consider this deployment-tested until your local `npm run build` succeeds.**
- User-supplied `src` code from the original portfolio was not uploaded; this V7 is a replacement implementation based on the available V6 code and reference screenshots.
