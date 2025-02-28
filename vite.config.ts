import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",  // Ensures Vite references files correctly
  build: {
    outDir: "dist",  // Ensures Vercel serves the right folder
  },
});
