import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";

export default defineConfig({
  output: "static", // important for portfolio sites
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  }
});