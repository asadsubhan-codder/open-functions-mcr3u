# Build and browser test report

30 September 2026. The interface checks below passed in the available Chromium browser. This report concerns software behaviour; the separate resource audit records unfinished editorial checks.

## Passed

| Check | Result |
|---|---|
| Required content structure | All 57 lessons, correct numbering/order and six financial lessons within Unit 7 |
| Lesson resource counts | 2–5 teaching videos, exactly two distinct bonus video IDs, worksheet and matching solution links on every lesson |
| Resource fields and links | Required fields present; HTTPS URLs; no placeholder/search-result links or excluded video creators detected |
| Video durations and segments | Every bonus at most 12 minutes or a specified segment at most 12 minutes; segment endpoints inside the actual runtime |
| Math syntax | 218 inline expressions parse with KaTeX without errors |
| Production build | Vite build succeeds; generated manifest included |
| Home and units | Home opens and each of seven units opens through the interface; Unit 7 includes 13 lesson entries |
| Laptop lesson pages | All 57 inspected for resource blocks, answer-link counts, math errors, focus and overflow |
| iPad portrait viewport | All 57 lessons checked at 768 × 1024; no horizontal overflow or math-rendering errors |
| iPad landscape viewport | Six representative lessons checked at 1024 × 768; no horizontal overflow or math-rendering errors |
| Narrow viewport | All 57 lessons checked at 390 × 844; no horizontal overflow or math-rendering errors |
| Search | Entering 2.3 gives the exact factoring lesson; selecting the result opens it |
| Jump selector | Direct jump to 6.5 works; all 57 selector options exercised in the laptop test |
| Reviews | Seven unit review buttons and final course review open nonempty video and practice collections |
| Keyboard | Skip link retains the lesson and focuses main content; menu supports keyboard opening and Escape closes it and restores focus |
| Optional bookmarks | Bookmark persists after reload, and can be removed; no performance judgement or progression state |
| Video fallback | Lesson 2.3 Watch video opens the actual Mathispower4u video, with successful playback observed |
| Worksheets and answers | Lesson 2.3 worksheet opens the four-page original Kuta PDF; its separate answer button opens page 3 of that same file |
| Embed controls | Play here creates the correct privacy-enhanced iframe URL; Close player removes it; original watch link stays usable |
| Entire built route graph | All 74 pages opened from the production build; all internal route links and lesson section targets resolve; no math-rendering errors |
| Repository subdirectory | Built lesson 6.5, styles, fonts, source page and manifest link work beneath `/open-functions/` |
| Browser console | No site JavaScript errors observed in the completed production navigation checks |

The interface tests were performed at viewport sizes, not on physical iPad hardware. Screenshot artifacts show the home and lesson views.

## Fixes made during testing

- Skip to content originally changed the hash route; it now keeps the active lesson.
- Selecting the already-open lesson from the tablet menu now closes the menu and returns focus to the content.
- Escape closes the mobile navigation and returns focus to the Lessons button.
- Interactive resource buttons use a minimum height of 44 pixels.
- Terse Ontario video titles retain their exact original wording and also display a useful topic label.
- Optional Grade 10 refreshers are labelled explicitly, and Word worksheets are identified beside their buttons.
- Known worksheet answer errors and question selections are disclosed at the resource, including reciprocal compression-factor conventions.

A temporary pointer-coordinate mismatch occurred when switching browser viewport overrides between tabs. A fresh test tab restored alignment; both pointer and keyboard menu actions then passed. This was not treated as a site code defect.

## Unfinished or limited

- `npm run validate:release` returns exit code 1 because 271 video placements (228 unique sources) still lack completed content reviews. Ordinary structural validation returns exit code 0. No full-course quality certification is claimed.
- The embedded YouTube iframe was blank in this local in-app browser. Its original watch-page link opened and played. Embedding is optional; all cards retain a direct external link.
- No public GitHub Pages deployment has been performed, so the Actions workflow has not been executed on GitHub. Local production and repository-subpath behaviour were tested.
- External-link checks are dated checks, not a guarantee of future uptime or availability in every region. Complete video-content and printed-answer review remains described in `RESOURCE-AUDIT.md`.

## Evidence files

`validation.json`, `browser-qa.json`, `tablet-qa.json`, `responsive-qa.json`, `review-qa.json` and `production-qa.json` contain the recorded checks. `resource-verification.csv` and the public JSON manifest separate page/file verification from video-content review.
