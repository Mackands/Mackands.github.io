# Mackands Leo Nardo Octano — Portfolio

Personal portfolio of Mackands Leo Nardo Octano, a Unity game developer and XR developer building VR, AR, spatial computing and game experiences.

**Live site:** https://mackands.github.io

## About the site

A single-page static site with a game-HUD look. No framework and no build step: plain HTML, CSS and JavaScript.

Sections:

- **Latest Projects** — recent XR and real-time visualization work (concept only, NDA-safe)
- **Project Library** — games, VR, AR and interactive apps since 2018, filterable by type, with detail pop-ups and video playback
- **Work Experience** — timeline and education
- **Skills & Attributes** — radar chart, skill tree, languages and certificates
- **Contact** — email, LinkedIn and GitHub

Optional background music and UI sounds are off by default and can be toggled from the navigation bar.

## Project structure

```
index.html          Page markup
css/style.css       Styles
js/main.js          Portfolio data (projects, experience, skills) and interactions
js/audio.js         Background music and sound effects
assets/img/         Project covers, profile photo and favicon
```

## Run locally

Open `index.html` in a browser. Nothing needs to be installed.

## Editing content

Most content lives in `js/main.js` as plain data.

**Add a project:** append an object to `PROJECTS` (or `FEATURED` for the Latest section) and put its cover image in `assets/img/`. Image filenames are case-sensitive on GitHub Pages, so match them exactly.

**Add a video** to a project using one of:

```js
{ type: "youtube", id: "VIDEO_ID", start: 0 }   // start is optional, in seconds
{ type: "drive",   id: "GOOGLE_DRIVE_FILE_ID" }
```

**Change the background music** by editing `BGM` at the top of `js/audio.js`:

```js
{ type: "youtube", id: "VIDEO_ID", start: 0, volume: 25 }      // volume 0–100
{ type: "file", src: "assets/audio/bgm.mp3", volume: 25 }      // local MP3, loops
```

## Deployment

The site is hosted on GitHub Pages from the `main` branch of this repository. Every push to `main` updates the live site within a minute or two.

## Contact

- Email: makendsakechix@gmail.com
- LinkedIn: https://www.linkedin.com/in/mackands-leo-nardo-octano-b6a967153/
- GitHub: https://github.com/Mackands
