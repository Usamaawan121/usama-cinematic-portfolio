# Usama Cinematic Portfolio V10 — Folding Cards

## What changed
- 22 original projects preserved; all 21 uploaded original PNG covers remain byte-for-byte unchanged.
- 2 **new concepts**, now 24 unique projects: Velocity 3D Car Racing and FlowState mobile app.
- New original illustrated SVG covers are not presented as real game or app screenshots.
- A zig-zag gallery arrangement; desktop mouse hover flips each card to its project description and tech stack.
- Interactive 3D tilt follows cursor; mobile and reduced-motion users see readable non-flipping cards.
- Project cards link to their real Next.js /work/[slug] detail pages.
- V9 video-reference hero, navigation and other sections unchanged.

## V9 existing project update
Merge src/ and public/ folders from the V10 Update ZIP into your existing project. Replace the matching files. You do NOT need to copy package.json or reinstall dependencies if the existing V9 setup is working.

Run: npm run dev, then test /work and the two new /work/... pages. Before deploying run: npm run build.

Unity uses C# scripting by default. C++ in the racing concept is explicitly documented as native-plugin exploration, not a completed Unity+C++ integration.
