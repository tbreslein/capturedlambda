import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tblog.com",
  integrations: [svelte(), tailwind({
      config: { applyBaseStyles: false },
  })],
  markdown: {
    drafts: import.meta.env.DEV, // only build drafts during DEV
  }
});
