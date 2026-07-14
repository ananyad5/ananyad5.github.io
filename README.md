# Personal site

A small, static site — plain HTML/CSS/JS, no build step, no framework.
Built to host for free on GitHub Pages.

## File structure

```
index.html          homepage
projects.html        project list
blog.html            writing / articles list
other.html            competitive programming, reading, misc
contact.html         email + links
assets/css/style.css  all styling (colors, type, layout — one file)
assets/js/script.js   mobile nav + the hero tile animation
```

## Deploy to GitHub Pages (free)

1. Create a new repository on GitHub.
   - If you want the site at `https://<your-username>.github.io`, name the
     repo exactly `<your-username>.github.io`.
   - Any other repo name works too — it'll just be served at
     `https://<your-username>.github.io/<repo-name>/`.
2. Push these files to the repo's `main` branch, keeping the folder
   structure as-is (don't flatten `assets/`).
   ```bash
   cd personal-site
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings → Pages**.
4. Under "Build and deployment", set **Source** to **Deploy from a branch**,
   branch **main**, folder **/ (root)**. Save.
5. GitHub will give you a URL (usually live within a minute or two).

No Jekyll config is needed — this is plain static HTML, so GitHub Pages
will serve it as-is.

## Things to edit first

- **Your name / last name** — `index.html`, the `<h1>` and `<title>` tags
  on every page currently just say "Ananya."
- **Email** — `contact.html`, replace `you@example.com` (in both the link
  and the visible text).
- **Social links** — GitHub/LinkedIn/Codeforces `#` placeholders appear in
  the footer of every page and on `contact.html`.
- **Project links** — `projects.html`, each project has `Repo` / `Write-up`
  links currently pointing to `#`.
- **Blog posts** — `blog.html` has three draft placeholders; replace with
  real posts, or point "Read post" links to an external blog (Substack,
  Medium, Hashnode) if you'd rather not host posts here.
- **Other page** — `other.html` blocks are intentionally generic
  (Codeforces handle/rating, current reading, project ideas) — fill in
  what's actually true.

## Changing the color palette

Everything lives in `:root` at the top of `assets/css/style.css`:

```css
--bg: #f3f3ef;        /* page background */
--ink: #1e231f;        /* main text */
--accent: #35594f;    /* primary accent — pine green */
--gold: #a6863b;        /* secondary accent — ochre */
```

Change those six or so values and the whole site retones — nothing else
needs to change.

## Adding a real blog later

If you outgrow the static placeholder list in `blog.html`, GitHub Pages
supports Jekyll natively (a `_posts/` folder with Markdown files, zero
extra hosting) — worth switching to once you're writing regularly.
