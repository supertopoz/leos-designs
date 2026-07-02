# Leo's Designs

A static portfolio landing page for **Leo's Designs**, ready to deploy with GitHub Pages.

## Files

- `index.html` - page structure
- `styles.css` - responsive styling
- `script.js` - small header/year behavior
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow
- `.nojekyll` - tells GitHub Pages to serve files as plain static assets

## Deploy To GitHub Pages

1. Create a GitHub repository named `leos-designs`.
2. Push this repo to GitHub.
3. In GitHub, go to **Settings > Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push to `main`; the included workflow will publish the site.

## Local Preview

Open `index.html` in a browser, or run a simple local server:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
