// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react()],
// })
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // For GitHub Pages at https://jonnypit.github.io/jhenry-portfolio/
  // If/when you switch to a custom domain (symbioticcity.tech), set base to "/".
  base: "/jhenry-portfolio/",
  plugins: [react()],
  build: { outDir: "docs" }  // Pages: Settings → Source: main /docs
});