import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.capturedlambda.com",
  integrations: [
    svelte(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  output: "server",
  adapter: netlify(),
});
