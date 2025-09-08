import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // For GitHub Pages at https://jonnypit.github.io/jhenry-portfolio/
  // If/when you switch to a custom domain (symbioticcity.tech), set base to "/".
  base: "/jhenry-portfolio/", // Remember to switch to "/" if using a custom domain
  plugins: [react()],
  build: { outDir: "docs" }  // Pages: Settings → Source: main /docs
<<<<<<< HEAD
});
=======
});
>>>>>>> 1e1631f (Initial commit with portfolio site files)
