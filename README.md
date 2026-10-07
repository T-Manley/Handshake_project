# Handshake website project

Personal portfolio site for Taylor Manley, built with Next.js and Tailwind CSS.

working link: https://tmanley-professional-bhezlfxc2-tm5qf-1895.vercel.app/

## Hosting

This repo can be hosted two ways. Both use the same code.

### Option 1: Vercel (current)

Vercel deploys this repo automatically. No extra setup needed.

### Option 2: GitHub Pages (free backup, no Vercel needed)

A workflow at `.github/workflows/deploy-pages.yml` builds a static copy of the site and publishes it to GitHub Pages every time `main` is updated.

One-time setup:

1. On GitHub, open this repo and go to **Settings > Pages**.
2. Under **Build and deployment > Source**, choose **GitHub Actions**.
3. Go to the **Actions** tab, select **Deploy to GitHub Pages**, and click **Run workflow** (or just push a change to `main`).

When it finishes, the site is live at:

```
https://t-manley.github.io/Handshake_project-d1/
```

If you rename the repo, the workflow picks up the new name automatically and the URL changes to match.

## Running locally

Requires Node.js 22+ and pnpm.

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

To test the GitHub Pages build locally:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/Handshake_project-d1 pnpm build
```

The static site is written to the `out/` folder.

## Editing content

- `app/page.tsx` — page layout, name, and intro
- `components/experience.tsx` — work experience
- `components/education.tsx` — education
- `components/projects.tsx` — project cards
- `components/skills.tsx` — skills
- `components/involvement.tsx` — campus involvement and KMNR show
- `components/contact-links.tsx` — email, text, LinkedIn, GitHub
- `public/images/` — images such as the radio show flyer
