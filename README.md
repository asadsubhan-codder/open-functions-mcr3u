# Open Functions

A free, static Ontario Grade 11 University Functions (MCR3U) resource course. The original interface and lesson notes organize external teaching videos, worked examples, worksheets and solutions. No account, scores, quizzes or progression gates.

**Current status: working and fully populated; editorial verification is incomplete.** All 57 lesson pages and eight review pages exist. Video watch-page titles, creators and runtimes have been checked, and original worksheet/solution files have been opened. The complete visual and mathematical review of every video remains open. Do not describe this build as a fully verified course. See [the resource audit](reports/RESOURCE-AUDIT.md).

## Run locally

Install Node.js 22.12 or later, then open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open **http://127.0.0.1:4173/**. Example direct lesson: **http://127.0.0.1:4173/#/lesson/2.3**.

```sh
npm run validate
npm run build
npm run preview
```

The production preview uses **http://127.0.0.1:4174/**. The built site is in `dist/`. Node and npm are only needed by the maintainer; students use ordinary static files in a browser. External videos and worksheets require internet access.

## Course organization

- Units 1–7 contain 51 numbered lessons in the requested order.
- Financial Applications F1–F6 sit within Unit 7, cross-referenced to Nelson 8.1–8.6.
- Every lesson has 2–5 teaching videos, exactly two separate bonus videos, one or more real external worksheets and matching answer links, and short mathematical notes.
- Each unit has an optional review. The final review brings together real unit review sheets and solutions.
- Search accepts a lesson number or topic. Financial lessons are also searchable by their Nelson reference.
- Bookmarks are optional and stored only in the current browser. They do not measure performance.

## Edit and verify resources

Edit **`public/course.json`**. It is the authoritative content file; components do not contain the lesson resource lists. Run `npm run manifest` to regenerate the downloadable `public/resource-manifest.json`. Building regenerates it too.

Each video records its exact title, creator, watch URL, video ID, total duration in seconds, purpose, verification evidence and last-check date. A segment additionally records `start`, `end` and the reason for using it. The displayed link starts at that timestamp; the ending time is shown beside it and passed to the optional embedded player.

Each worksheet records its source page, original file, matching answer file or answer-page fragment, difficulty, relevant question selection and any known correction. Some educator worksheets are Word files with PDF solutions; they are labelled. Files remain with their original publishers.

The validator checks required lessons, ordering, missing fields, URL shape, duplicate bonus videos, excluded creators, segment limits, answer correspondence flags, review pages and KaTeX syntax. **It is not a live link checker and does not watch videos.** Browser/file verification evidence is separate from these structural tests.

`npm run validate:release` also rejects open video-content reviews. It currently fails for that documented reason. Update a content status to `verified` only after inspecting the actual explanation and worked problems, recording evidence, checking mathematics and checking the assigned subskills. Keep the public audit accurate. The ordinary deployment workflow runs structural validation and preserves the visible audit; it does not certify editorial completion.

## Publish

Follow [DEPLOYMENT.md](DEPLOYMENT.md) for GitHub Pages. The included workflow publishes `dist/`; no API keys or paid hosting are needed. No GitHub repository or public deployment was created by this build.

## Files

- `src/`: interface, accessibility behaviour and responsive styles.
- `public/course.json`: all lesson and review content.
- `public/resource-manifest.json`: reviewable resource inventory.
- `COURSE-CHECKLIST.md`: curriculum coverage map and release checks.
- `reports/`: verification scope, per-resource CSV and browser test results.
- `.github/workflows/pages.yml`: GitHub Pages build and deployment.

Local `research/`, Python research scripts, `node_modules/`, generated `dist/` and deliverable archives are excluded from Git. Research files include private reference extracts and are not part of the site or source package. Do not upload the supplied textbook, school documents, downloaded worksheet content or research folder.

The site loads no analytics, accounts, ad scripts or remote fonts. Selecting an external video or loading its optional player connects to YouTube, which may display its own advertising. Selecting a worksheet connects to its publisher.

Original site code and original prose use the [MIT licence](LICENSE). External videos, worksheet files, the Ontario curriculum and textbook references retain their owners' rights. Their inclusion as links does not imply affiliation or endorsement. Third-party library notices are in `public/THIRD-PARTY-NOTICES.txt`.
