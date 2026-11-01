USAMA V7 — ABOUT & EMPTY HOMEPAGE REPAIR PATCH

Copy the CONTENTS of this patch into your existing E:\portfolio\Usama_Cinematic_V7 folder. Choose Replace for files when prompted.

Specifically replaces:
 - src/app/about/page.jsx (real About image only)
 - src/components/Motion.jsx (functional 3-stage scroll chapter)
 - src/app/globals.css (sticky repair, chapter visuals, About alignment)
Adds:
 - public/media/usama-real-about.jpg (your uploaded photo)

Does NOT replace package.json, node_modules, .git, homepage hero video, or hosting config.
No npm install is needed if your existing app already starts.

Run npm run dev and open http://localhost:3000 then /about.
Scroll through the 03 / ENGINEERING IN MOTION section; use stage buttons to navigate.
Check console and npm run build.
If publishing, push to your existing GitHub repository once build passes.

IMPORTANT: Preserve a backup of the three old source files before overwriting.
