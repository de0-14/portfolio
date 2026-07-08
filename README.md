# DEO_OS — Portfolio Site (Static HTML/CSS/JS)

A black-and-orange, terminal-inspired portfolio for Deover "Deo" P. Pasco Jr. — pure HTML, CSS, and JavaScript, no server or build step required.

## Running it

Just open `index.html` in a browser. That's it — no PHP, no server, no dependencies.

(Optional, for a nicer local dev experience: `python3 -m http.server` in this folder, then visit `http://localhost:8000`.)

## Hosting it

Upload the whole folder to any static host — GitHub Pages, Netlify, Vercel, or plain shared hosting. `index.html` is the entry point.

## Editing your info

Everything — bio, socials, ventures, skills, projects, and the accomplishments log — lives in **`assets/js/data.js`**. Edit the objects/arrays there and the whole site updates automatically (script.js renders it into the page).

## Gallery — embedded Instagram posts

The "Behind the Lens" gallery no longer uses local image files — it embeds live Instagram posts directly. To change which posts show up, edit the `instagramPosts` array in `assets/js/data.js`:

```js
const instagramPosts = [
  'https://www.instagram.com/p/POST_ID_1/',
  'https://www.instagram.com/p/POST_ID_2/',
];
```

Just paste the post URL from Instagram (the `/p/.../` link) — script.js turns each one into a live embed automatically using Instagram's own embed script.

**Note:** this pulls content live from Instagram, so it needs an internet connection to render, and works best when the page is served over `http(s)` rather than opened directly as a `file://` path (some browsers restrict third-party embeds on local files). If the embeds don't show up when double-clicking `index.html`, try running a local server instead:

```bash
python3 -m http.server
```

then visit `http://localhost:8000`.

## Contact form

Since this is a static site with no server, the contact form doesn't send email on its own — submitting it opens the visitor's email app with a message pre-filled to **deoverpascojr@gmail.com**. If you want the form to submit without opening an email app, connect it to a form service like Formspree or Web3Forms later (just point the `fetch`/`action` at their endpoint in `script.js`).

## Replacing the placeholder avatar

Swap `assets/img/avatar-placeholder.svg` for a real photo — keep the filename the same, or update the `<img src>` in the About section of `index.html`.

## File structure

```
portfolio-static/
├── index.html               ← page shell (content is rendered in by script.js)
├── assets/
│   ├── css/style.css
│   ├── js/
│   │   ├── data.js           ← all your content lives here
│   │   └── script.js         ← renders data.js into the page
│   ├── img/avatar-placeholder.svg
│   └── photos/                ← put your photography here
└── README.md
```
