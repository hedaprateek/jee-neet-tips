# JEE / NEET Tips & Tricks

A free, searchable library of exam tricks for JEE and NEET aspirants — mnemonics, fast calculation shortcuts, and formula recall tables for Physics, Chemistry, Maths and Biology, Class 9 through 12.

Live site: https://hedaprateek.github.io/jee-neet-tips/

## What's here

- **Mnemonics** — memory aids for sequences, orders, and lists that are otherwise pure rote (reactivity series, taxonomic ranks, cranial nerves, etc.)
- **Shortcuts** — faster ways to solve a class of problem without the full textbook method (Vedic maths, symmetry tricks, reaction-mechanism filters)
- **Formula tables** — quick-reference tables grouped by chapter, for last-minute revision
- **Proofs** — step-by-step derivations of the identities and theorems you are asked to
  prove or need to reconstruct (the equations of motion, the quadratic formula, first
  principles derivatives, the Nernst equation, Hardy-Weinberg, and so on), each with the
  claim stated up front and the result on the final line

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

## Building a revision sheet

Tick the checkbox on any card (or hit **Select all** to take the whole filtered
view) and a bar appears with two options:

- **Print / Save PDF** — renders a compact two-column A4 sheet: black on white,
  grouped by subject and chapter, roughly 30 tips to a page, with an empty tick
  box beside each one so you can check it off as you memorise it. The browser's
  print dialog saves it as a PDF.
- **Download .txt** — the same sheet as plain text, wrapped to 76 columns, for
  reading on a phone or pasting into notes.

The selection persists across filtering and page reloads, so a sheet can be built
across several subjects in one sitting. Ctrl+P produces the same compact sheet
rather than a printout of the whole interface.

## Structure

Static site, no build step:

- `index.html` — page markup (top bar, sidebar, results column)
- `styles.css` — design tokens, light/dark theming, responsive shell
- `data.js` — the content database (a plain JS array of trick objects)
- `app.js` — filtering, faceted counts, search, grouping and URL state

## Sources

Mnemonics of this kind are long-standing classroom tradition rather than anyone's
original work, and many appear across published prep material. Entries were gathered
and cross-checked against sources including
[MyStudyCart](https://mystudycart.com/blog/mnemonics-for-neet/),
[PhysicsWallah](https://www.pw.live/neet/exams/mnemonics-for-genetics-and-evolution-in-neet),
[NEETQ](https://neetq.com/blog/neet-biology-mnemonics-guide),
[SchoolMyKids](https://www.schoolmykids.com/education/periodic-table-tricks-mnemonics) and
[IITian Guide](https://iitianguide.com/vedic-maths-for-jee-2026-tricks-and-shortcuts-for-fast-calculation/).

Every entry is written here in our own words and fact-checked against the NCERT
syllabus before being added — anything that did not survive that check was dropped
(one widely circulated greenhouse-gas mnemonic, for instance, lists oxygen as a
greenhouse gas, which is simply wrong).

## Contributing a trick

Add an entry to the `TRICKS` array in `data.js` following the existing shape:

- `mnemonic` / `shortcut` — a `body` string
- `formula` — a `rows` array of `[label, formula]` pairs
- `proof` — a `claim` string plus a `steps` array of one line each; the **last step must
  state the result** (bolded), since both the card styling and the print sheet treat it
  as the conclusion

`subject` + `title` is the entry's identity (it keys the print-sheet selection), so titles
must be unique within a subject. Then open a PR.

## Running locally

Any static file server works, e.g.:

```
npx serve .
```
