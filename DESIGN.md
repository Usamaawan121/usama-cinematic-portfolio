# Design handoff

## Visual direction
Cinematic black canvas (#080808), warm orange accent (#ff6b1a), white headings and muted white body copy. Inter is the interface/body typeface; italic Playfair Display provides outlined and editorial accents. Large typography, generous vertical pacing, fine rules and subtle grain carry the reference design.

## Main interactions
- Home: scroll controls a 15-second decorative character scene; GSAP reveals headings and sections; Lenis smooths wheel input.
- Projects: curved OGL image carousel; filters, directional controls and clickable detail pages. CSS perspective-style card fallback if WebGL is unavailable.
- About: holographic tilt card with MU monogram and actual skills, work history and education.
- Journal: image-led cards, individual article pages and related-article navigation.
- Contact: diagonal gradient shader, actual email/phone/social links, prefilled email drafts.

## Layouts
Desktop uses generous side margins and multiple columns. At 1000px spacing becomes compact; at 760px navigation switches to a menu, rows stack, cards widen and large titles scale down. Keyboard focus indicators and a skip link remain available. Reduced-motion preferences disable scroll smoothing and the video, and choose the CSS gallery.

## Ownership boundary
Usama's actual information lives in src/data. No other developer's biography or project portfolio is displayed. The licensed decorative cinematic assets and original source notice are retained for the requested reference treatment. Monogram art is included as editable SVG.
