# JEE / NEET Tips & Tricks

A free, searchable library of exam tricks for JEE and NEET aspirants — mnemonics, fast calculation shortcuts, and formula recall tables for Physics, Chemistry, Maths and Biology, Class 9 through 12.

Live site: https://hedaprateek.github.io/jee-neet-tips/

## What's here

- **Mnemonics** — memory aids for sequences, orders, and lists that are otherwise pure rote (reactivity series, taxonomic ranks, cranial nerves, etc.)
- **Shortcuts** — faster ways to solve a class of problem without the full textbook method (Vedic maths, symmetry tricks, reaction-mechanism filters)
- **Formula tables** — quick-reference tables grouped by chapter, for last-minute revision

Every entry is tagged by exam (JEE / NEET), subject, and class level (9–10 or 11–12), and the site supports full-text search across all of it.

## Structure

Static site, no build step:

- `index.html` — page markup
- `styles.css` — theme (light/dark) and layout
- `data.js` — the content database (a plain JS array of trick objects)
- `app.js` — filtering/search/rendering logic

## Contributing a trick

Add an entry to the `TRICKS` array in `data.js` following the existing shape (`mnemonic`/`shortcut` entries use a `body` string; `formula` entries use a `rows` array of `[label, formula]` pairs), then open a PR.

## Running locally

Any static file server works, e.g.:

```
npx serve .
```
