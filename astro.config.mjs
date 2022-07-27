import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.capturedlambda.com",
  experimental: {
    integrations: true,
  },
  integrations: [
    svelte(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    robotsTxt(),
  ],
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  output: "server",
  adapter: netlify(),
});
