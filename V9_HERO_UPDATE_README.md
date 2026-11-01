# Usama Cinematic V9 — Hero video update

This update changes **only the homepage hero**. Existing site navigation, projects, case studies, About photo, contact details, and other routes stay as in V8.

## What changed
- `src/app/page.jsx` — replaces only the previous hero markup with `CinematicHero`.
- `src/components/CinematicHero.jsx` — accessible three-scene React carousel with auto-advance, arrows, dots, pause/play and real developer-specific content.
- `src/app/globals.css` — appended hero styling and responsive motion rules; previous styles retained.
- `public/media/hero-reference/{globe,data,operations}.mp4` — the **same three imagery scenes captured from your uploaded 36-second screen recording** (text-free moments). Each captured frame is animated with a subtle video zoom/pan; the footage is not replaced with AI artwork.
- `public/media/hero-reference/*-poster.jpg` — fallback stills from that footage.

The recorded browser chrome and original website titles are excluded by selecting clean moments of each scene. The same imagery is kept, while the movement is a gentle new zoom/pan applied to those original frames. These are not the original full moving background assets; separate original video assets would be needed for frame-perfect motion.

## Install into existing V8 folder
1. Back up `src/app/page.jsx` and `src/app/globals.css`.
2. Extract **V9_Hero_CopyPaste_Update.zip**; copy its `src` and `public` folders into the existing V8 project folder. Merge folders and replace same-name files.
3. Do not delete `.git`, `node_modules`, `package.json`, or your existing Vercel project.
4. Run `npm run dev`, open `http://localhost:3000` and check the three videos, controls, and mobile layout.
5. Run `npm run build`. If successful, commit and push to your existing GitHub repo. Vercel can automatically deploy the push.

**Important:** Copy-paste changes local files immediately, but your live Vercel deployment updates only after you push to GitHub (unless you are running a different automatic deployment workflow).

## Testing statement
JSX/CSS source and media files can be statically checked in this environment, but the full Next.js build is only confirmed after it is run successfully on a machine with the required npm packages.
