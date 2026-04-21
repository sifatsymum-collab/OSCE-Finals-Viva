# OSCE Viva Dashboard

Static OSCE examination viva revision dashboard for UK medical school finals.

## Local files

- `index.html`
- `styles.css`
- `app.js`

No build step is required. Any static host can serve this project directly.

## Deploy options

### GitHub Pages

1. Create a new GitHub repository.
2. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, set:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main` (or `master`)
   - `Folder`: `/ (root)`
5. Save, wait for deployment, then open the published URL.

### Netlify

1. Push the project to GitHub.
2. In Netlify, choose `Add new site` -> `Import an existing project`.
3. Select the repository.
4. For build settings use:
   - Build command: leave blank
   - Publish directory: `.`
5. Deploy the site and share the generated Netlify URL.

### Vercel

1. Push the project to GitHub.
2. In Vercel, choose `Add New...` -> `Project`.
3. Import the repository.
4. Vercel should detect it as a static site automatically.
5. If prompted:
   - Framework preset: `Other`
   - Build command: leave blank
   - Output directory: `.`
6. Deploy and share the generated Vercel URL.

## Notes

- This project uses only relative file paths, so it works well on static hosts.
- There are no environment variables or backend services to configure.
- If you later add images or downloads, place them in the repo and reference them with relative paths.
