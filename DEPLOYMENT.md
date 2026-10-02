# Publish Open Functions on GitHub Pages

The site is built and tested locally. It has **not** been uploaded to a GitHub repository or published at a public URL. The content audit still lists open video reviews; publishing the current files preserves that disclosure.

## GitHub Pages workflow

1. Create a public GitHub repository, for example `open-functions`.
2. Put the contents of the supplied source package at the repository root on branch `main`. Include the hidden `.github/` folder. Do not upload `node_modules/`, `research/`, the supplied school PDFs or the textbook.
3. In the repository, open **Settings → Pages**. Choose **GitHub Actions** as the build source.
4. Open **Actions → Publish Open Functions → Run workflow**, or push a change to `main`.
5. After the workflow succeeds, its deployment result shows the live Pages address. For a repository named `open-functions`, the address will have the form `https://YOUR-USERNAME.github.io/open-functions/`.

The workflow installs locked dependencies, validates the content structure, builds and uploads `dist/`, and deploys it to Pages. The action versions are pinned to the official examples checked on 30 September 2026. No personal access token is required by the workflow.

The existing `base: './'` configuration keeps asset paths relative. Hash routes, such as `#/lesson/6.5`, let lesson links work at a repository subdirectory without a server or custom 404 redirect. Preserve the slash before `#`: `.../open-functions/#/lesson/6.5`.

For later edits, update `public/course.json`, run `npm run validate`, then push the changes. The manifest is rebuilt automatically. Always update verification evidence truthfully; a successful website build does not complete an open content review.

## Static-file alternative

The ready-built archive contains exactly the contents of `dist/`. A static host can serve those files directly. For GitHub Pages' branch-based publishing option, place them at the root of a publishing branch, then choose that branch and `/ (root)` in Settings → Pages. Use either branch publishing or the Actions workflow, not both for the same deployment.

Do not open `index.html` using a `file://` URL: the browser must fetch `course.json` through a web server. For a local production preview, use `npm run preview` from the source folder.

Deployment reference: [Vite's official static-deployment guide](https://vite.dev/guide/static-deploy.html#github-pages). Relative-base support: [Vite's build guide](https://vite.dev/guide/build.html#relative-base).
