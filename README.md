# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


1) Run with a specific port or host:
npm run dev -- --port 3000 --host
# or directly with vite
npx vite --port 3000 --host

2) Use NVM  20.18.0

3) Run in a specific mode (useful for different environment variables):

bash
VITE_MY_API_URL=http://staging-api.example.com npm run dev

Production Deployment
The npm run build command creates a highly optimized bundle in the dist/ folder. Here's how to use it:

For local testing: Use npm run preview. This serves the dist folder with Vite's preview server, which is closer to a production environment than the dev server.

For a live server: The dist folder is static. You can deploy it to any static hosting service:

Netlify: Drag and drop the dist folder.

Vercel: Connect your Git repository; it detects Vite automatically.

Traditional Hosting: Upload the contents of the dist folder to your web server (e.g., via SFTP, S3, etc.).

Key Configuration File: vite.config.js
This is where the real power is for controlling how the project runs.

Example with common plugins and options:

javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set a custom base path if your app isn't served from the root (e.g., for GitHub Pages)
  base: '/my-repo-name/',
  // Configure the development server
  server: {
    port: 3000,
    open: true, // Automatically open the browser
    // Proxy API requests to avoid CORS issues in development
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      }
    }
  },
  // Build configuration
  build: {
    outDir: 'build', // Change the output folder name (e.g., to 'build' like Create React App)
    sourcemap: true, // Generate source maps for debugging
  }
})
Common Issues & Solutions
Port already in use: Vite will automatically ask if you want to use another port. You can also manually specify one with npm run dev -- --port 3001.

Dependencies changed? Always re-run npm install.

node_modules corruption: Delete the node_modules folder and package-lock.json file, then run npm install again.
