# Emma Birthday Riddle

Static mock-up for a QR-code birthday riddle. It works on Vercel, GitHub Pages,
Netlify, or any basic web host.

## Edit quickly

- Change the placeholder letter in `index.html` inside `.letter__body`.
- Change the riddles and accepted answers at the top of `script.js`.
- The page has `noindex` metadata so search engines should not index it.

## Deploy on Vercel

1. Import `bolasse1234/emma-birthday-riddle` in Vercel.
2. Framework preset: `Other`.
3. Build command: leave empty.
4. Output directory: leave empty.
5. Deploy.

## Publish with GitHub Pages

```powershell
git init
git branch -M main
git add .
git commit -m "Create Emma birthday riddle site"
gh repo create emma-birthday-riddle --public --source . --push
```

Then enable Pages in GitHub:

1. Open the repo on GitHub.
2. Go to Settings -> Pages.
3. Source: `Deploy from a branch`.
4. Branch: `main`, folder `/root`.
5. Save.

If Wurzel gives you a custom domain, add it in Settings -> Pages and create a
`CNAME` file containing only that domain.
