# design notes

## general idea behind this website

It's a blog, simple as that.

### why svelte + astro?

Initially this page was designed with React and NextJS.
One reason for using react was that I was planning to learn React Native after writing this blog.
I've had to realise though that while it's easy to use these, using them for a blog is absolutely stupid.
I've switched to svelte and astro because, for one, it's just simpler, but also I might be using
svelte and capacitor for a native mobile app instead.
I also just like svelte more.

What's extra dope about using this combo is that I can just plop markdown documents for the blog
posts into my astro folder structures and they just became their own pages.
In the React+NextJS version I had to use external plugins for rendering the markdown turn those into
NextJS pages, which is way simpler than what I tried to do before.

## deps

- anything astro related
- svelte and typescript
- eslint + prettier and related plugins
- tailwind css + typography plugin (for rendering the blog posts) + daisyui
- jest: testing framework
- detox: end-to-end testing

