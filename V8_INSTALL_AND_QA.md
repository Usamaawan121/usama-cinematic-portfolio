# Usama Cinematic V8 — Installation & QA

## What changed
- 21 user-supplied original PNG covers copied byte-for-byte, plus the existing V7 Employee Management System project with its old artwork.
- 22 **unique** `/work/[slug]` case-study routes. No duplicate slugs.
- Matched covers replace the old illustration assets for Tummly, Verendo, Nexora, AI Chatbot, Banking, Real Estate, etc.
- Work page: React category filters, instant search, accessible focus/touch behavior.
- Cards: subtle 3D pointer tilt, warm golden spotlight, zoom, reflective sweep, staggered fade; reduced-motion and touch fallbacks.
- Individual project details: original PNG image and enlarge/zoom interaction.
- Original cinematic homepage animation and V7 About page real photo retained.

## Setup — full source ZIP
1. Extract into a **new** folder.
2. In that folder run `npm install` once, then `npm run dev`.
3. Open `http://localhost:3000`, `http://localhost:3000/work`, and specific case studies such as `/work/tummly`, `/work/verendo`, `/work/aura-attire`.
4. Stop the server and run `npm run build` before publishing.

## Existing V7 project — update overlay ZIP
1. Back up your existing `src` folder.
2. Extract the `Usama_Cinematic_V8_Source_Update.zip` archive into the existing V7 folder and MERGE the `src` and `public` folders.
3. Leave `node_modules`, `.git`, `package.json`, `package-lock.json`, and Vercel configuration alone.
4. Run `npm run dev`, verify, then `npm run build`.
5. If successful, `git add .`, `git commit -m "Add 22 project gallery and premium 3D cards"`, `git push origin main` (from the Git-linked folder). Vercel should auto-deploy.

## Testing performed in preparation environment
- All 18 JSX/JS files passed TypeScript JSX syntax transpilation.
- CSS passed PostCSS parsing.
- 22 slugs unique and 22 cover references found.
- SHA-256 comparison proves the 21 supplied PNG covers are unchanged.
- Browser-rendered **gallery HTML** checked at 1440, 768 and 390 pixels: 22 cards and no horizontal overflow. This was a design/markup smoke test, **not** a complete Next.js run.
- **Not tested:** actual Next.js runtime/build (`npm install` could not reach registry.npmjs.org; EAI_AGAIN). Run `npm run build` locally and resolve any errors before Git push.

Note: Future clients or hiring managers should be able to distinguish professional delivery from portfolio concepts. Concepts/studies are labeled in their project details; no fabricated production metrics were added.
