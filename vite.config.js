import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/jonnypit.github.io/',   // IMPORTANT: must match your repo name
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})