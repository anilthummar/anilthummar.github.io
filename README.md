# Anil Thummar — Developer Portfolio

Personal portfolio site built from CV content. Host on **GitHub Pages** and share one link with recruiters.

**Live URL (after setup):** `https://<your-github-username>.github.io/<repo-name>/`

## What's included

- Single-page responsive site (About, Skills, Experience, Projects, Education, Contact)
- Download links for both CV PDFs
- No build step — plain HTML, CSS, and JavaScript

## Deploy to GitHub Pages

### 1. Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it e.g. `anil-thummar-profile` (or `anilthummar.github.io` if you want `https://anilthummar.github.io` with no subpath)
3. Do **not** add a README on GitHub (you already have one locally)

### 2. Push this project

```bash
cd /Users/anil.thummar/Projects/anil-thummar-profile
git remote add origin https://github.com/anilthummar/anil-thummar-profile.git
git add .
git commit -m "Add portfolio site for GitHub Pages"
git branch -M main
git push -u origin main
```

Replace `anilthummar/anil-thummar-profile` with your actual username and repo name.

### 3. Enable GitHub Pages

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Save. After 1–2 minutes your site will be live at the URL shown on that page.

### Optional: Custom domain

In **Pages** settings, add your domain (e.g. `anilthummar.dev`) and configure DNS with your registrar.

## Preview locally

```bash
cd /Users/anil.thummar/Projects/anil-thummar-profile
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080)

## Customize

- **Play Store / App Store links:** Edit `index.html` project cards and wrap store badges in `<a href="...">` with real store URLs.
- **Photo:** Add `assets/photo.jpg` and an `<img>` in the hero section.
- **Analytics:** Add Google Analytics or Plausible in `<head>` if desired.

## Files

```
index.html          Main page
css/styles.css      Styles
js/main.js          Navigation & footer year
assets/cv/          PDF resumes
```
