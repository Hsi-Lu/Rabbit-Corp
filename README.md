# Rabbit Corp

Rabbit Corp is a playful, two-page static website created as a vibe-coding exercise inside Cursor. It presents a fictional company that breeds elite “work rabbits” and shares whimsical blog posts about their care and rabbit
facts.

## Tech stack

- Pure HTML for structure (`index.html`, `blogs.html`)
- CSS for layout and styling (`styles.css`)
- Vanilla JavaScript for minor interactivity (`script.js`)

No build tooling is required—everything runs directly in the browser.

## Project structure

```
Rabbit Corp/
├── index.html        # Home page with hero, rabbit breed grid, warranty CTA
├── blogs.html        # Blog page with two featured articles
├── styles.css        # Shared styling for both pages
├── script.js         # Footer year helper + demo alert handler
└── images/           # Local rabbit art and favicon
```

## Getting started

1. Clone or download the repository.
2. Open `index.html` (or `blogs.html`) in any modern browser.
3. Enjoy the experience—no server, installs, or build steps needed.

## Development notes

- The home-page “Book a rabbit” button intentionally triggers an `alert()` to clarify this is a demo-only project.
- Footer years stay current via a tiny script that updates `<span id="year">`.
- Local PNG assets avoid external image CDNs so the site works offline once cloned.

## Credits

Built in Cursor as a creative coding exercise——feel free to fork, remix, and keep the rabbit lore going.


