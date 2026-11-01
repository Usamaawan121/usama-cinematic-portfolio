# V7 Test Summary

- JSX syntax: PASS — parsed every `src/**/*.jsx` with TypeScript JSX parser.
- CSS syntax: PASS — tinycss2 stylesheet parse.
- Video asset: PASS — `engineering-motion.mp4` generated with ffmpeg, 10 seconds at 16 fps.
- Routing: 6 top-level App Router pages + 8 slugs; route paths verified statically.
- Project cards: each links to `/work/{slug}`. All slugs present in data and static params.
- Keyboard: Escape closes image viewer; toggle and filters use native buttons.
- React runtime / full Next.js build: NOT VERIFIED; npm registry unavailable in this environment.
- Original animated 3D model: NOT AVAILABLE; recording-derived video is a fallback.
- Personal introduction video: NOT SUPPLIED; requires original video URL/file to activate.
- Actual first-party Tummly, Verendo, and other project screenshots: NOT SUPPLIED; custom visual studies used.
