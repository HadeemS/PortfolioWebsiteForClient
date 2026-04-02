import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages project URL: https://<username>.github.io/<REPO_NAME>/
 *
 * Replace the value below with your repository name (must match the URL segment exactly).
 * Production build uses: base: "/[REPO_NAME]/"  →  e.g. "/PortfolioWebsiteForClient/"
 *
 * Dev server uses "/" so you can open http://localhost:5173/ without the repo subpath.
 */
const REPO_NAME = 'PortfolioWebsiteForClient'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
}))
