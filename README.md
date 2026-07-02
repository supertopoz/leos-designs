# Leo's Designs

A static portfolio landing page for **Leo's Designs**, ready to deploy with GitHub Pages at `allshorn.com`.

## Files

- `index.html` - page structure
- `styles.css` - responsive styling
- `script.js` - small header/year behavior
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow
- `.nojekyll` - tells GitHub Pages to serve files as plain static assets
- `CNAME` - configures the custom domain `allshorn.com`

## Deploy To GitHub Pages

1. Create a private GitHub repository named `supertopoz/leos-designs`.
2. Push this repo to GitHub.
3. In GitHub, go to **Settings > Pages**.
4. Set **Source** to **GitHub Actions**.
5. Push to `main`; the included workflow will publish the site.

## DNS

For the apex domain `allshorn.com`, configure these GitHub Pages `A` records at the DNS provider:

```txt
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

If you also want `www.allshorn.com`, add a `CNAME` record pointing `www` to `supertopoz.github.io`.

## Local Preview

Open `index.html` in a browser, or run a simple local server:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
