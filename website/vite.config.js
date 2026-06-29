import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'
import { vitePrerenderPlugin } from 'vite-prerender-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: 'src/prerender.jsx'
    })
  ],
})
