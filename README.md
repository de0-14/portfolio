# DEO_OS — Portfolio Site (Static HTML/CSS/JS)

A black-and-orange, terminal-inspired portfolio for Deover "Deo" P. Pasco Jr. — pure HTML, CSS, and JavaScript, no server or build step required.

## Running it

Just open `index.html` in a browser. That's it — no PHP, no server, no dependencies.

(Optional, for a nicer local dev experience: `python3 -m http.server` in this folder, then visit `http://localhost:8000`.)

## Hosting it

Upload the whole folder to any static host — GitHub Pages, Netlify, Vercel, or plain shared hosting. `index.html` is the entry point.

## Editing your info

Everything — bio, socials, ventures, skills, projects, and the accomplishments log — lives in **`assets/js/data.js`**. Edit the objects/arrays there and the whole site updates automatically (script.js renders it into the page).

## Adding your photos

1. Drop `.jpg`, `.jpeg`, `.png`, or `.webp` files into `assets/photos/`.
2. Open `assets/js/data.js` and add each filename to the `galleryPhotos` array:

```js
const galleryPhotos = [
  'assets/photos/street-01.jpg',
  'assets/photos/street-02.jpg',
];
```

They'll appear in the "Behind the Lens" gallery.

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
