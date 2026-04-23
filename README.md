# Emma Birthday Riddle

Static site for a QR-code birthday letter. It works on GitHub Pages, Netlify,
Vercel, or any basic web host.

## Edit quickly

- Change the letter in `index.html` inside `.letter__body`.
- Change the riddles and accepted answers at the top of `script.js`.
- The page has `noindex` metadata so search engines should not index it.

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
