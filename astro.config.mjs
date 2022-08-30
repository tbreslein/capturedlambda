import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.capturedlambda.com",
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    robotsTxt(),
    mdx(),
    solid(),
  ],
  markdown: {
    shikiConfig: {
      theme: "monokai",
    },
  },
  output: "server",
  adapter: netlify(),
});
