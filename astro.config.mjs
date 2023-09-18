import { defineConfig } from "astro/config";
import image from '@astrojs/image';
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.capturedlambda.com",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), robotsTxt(), mdx(), solid(), image({ serviceEntryPoint: '@astrojs/image/sharp' })],
  markdown: {
    shikiConfig: {
      theme: "monokai"
    }
  },
  output: "server",
  adapter: netlify()
});
