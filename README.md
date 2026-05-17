# Narinder Singh Portfolio

A premium frontend portfolio built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Features

- Modern glassmorphism design with animated gradient background
- Dark/light theme toggle with `localStorage` persistence
- Responsive layout for mobile, tablet, and desktop
- Smooth scroll animations and micro-interactions
- GitHub projects section with dynamic API fetching, search, filter, sort, loading skeletons, and error handling
- GitHub activity summary with language usage
- Contact section with UI-only form
- Scroll progress bar and back-to-top button

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

## Project Structure

```
src/
├── assets/
├── components/
├── data/
├── hooks/
├── services/
├── utils/
├── App.jsx
└── main.jsx
```

## Setup

```bash
npm install
npm run dev
```

Open the local dev server shown by Vite in your browser.

## Production Build

```bash
npm run build
npm run preview
```

## GitHub API Integration

The portfolio fetches GitHub repositories from the public API at:

```js
https://api.github.com/users/{username}/repos
```

Update the GitHub username in `src/services/githubService.js` if needed.

## Notes

- No backend is included
- The contact form is UI-only and does not submit data
- Add your resume file at `/Narinder-Singh-Resume.pdf` to enable the Download Resume button

## Deployment

This app can be deployed to any static hosting provider, including:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### Example: Deploy to Vercel

1. Connect the repository to Vercel
2. Set the framework preset to `Vite`
3. Use the default build command: `npm run build`
4. Use the default output directory: `dist`

## License

This portfolio is built for personal use by Narinder Singh.
