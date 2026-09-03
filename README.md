# JEE / NEET Tips & Tricks

A free, searchable library of exam tricks for JEE and NEET aspirants — mnemonics, fast calculation shortcuts, and formula recall tables for Physics, Chemistry, Maths and Biology, Class 9 through 12.

Live site: https://hedaprateek.github.io/jee-neet-tips/

## What's here

- **Mnemonics** — memory aids for sequences, orders, and lists that are otherwise pure rote (reactivity series, taxonomic ranks, cranial nerves, etc.)
- **Shortcuts** — faster ways to solve a class of problem without the full textbook method (Vedic maths, symmetry tricks, reaction-mechanism filters)
- **Formula tables** — quick-reference tables grouped by chapter, for last-minute revision

Every entry is tagged by exam (JEE / NEET), subject, and class level (9–10 or 11–12), and the site supports full-text search across all of it.

## Filtering

A persistent sidebar filters on five dimensions — exam, subject, class level, type
and chapter. Selections OR together within a dimension and AND across dimensions,
so "Physics + Chemistry, mnemonics only, Class 11-12" is one set of clicks. Each
filter row carries a live count computed against the *other* active filters, so
dead ends are visible before you click them. Active filters appear as removable
pills above the results, and the whole filter state is mirrored into the URL,
making any view bookmarkable and shareable. On narrow screens the sidebar becomes
a drawer.

## Structure

Static site, no build step:

- `index.html` — page markup (top bar, sidebar, results column)
- `styles.css` — design tokens, light/dark theming, responsive shell
- `data.js` — the content database (a plain JS array of trick objects)
- `app.js` — filtering, faceted counts, search, grouping and URL state

## Contributing a trick

Add an entry to the `TRICKS` array in `data.js` following the existing shape (`mnemonic`/`shortcut` entries use a `body` string; `formula` entries use a `rows` array of `[label, formula]` pairs), then open a PR.

## Running locally

Any static file server works, e.g.:

```
npx serve .
```
