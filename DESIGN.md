# design notes

## general idea behind this website

It's a blog, simple as that.

### why svelte + astro?

Initially this page was designed with React and NextJS.
One reason for using react was that I was planning to learn React Native after writing this blog.
I've had to realise though that while it's easy to use these, using them for a blog is absolutely stupid.
I've switched to svelte and astro because, for one, it's just simpler, but also I might be using
svelte and capacitor for a native mobile app instead, mostly because I happened to like svelte
better than react.

What's extra dope about using this combo is that I can just plop markdown documents for the blog
posts into my astro folder structures and they just became their own pages.
In the React+NextJS version I had to use external plugins for rendering the markdown turn those into
NextJS pages, which is way simpler than what I tried to do before.
Additionally, in this version the code blocks in the markdown actually have syntax highlighting.
I still don't know why I wasn't able to get that to work in the react version.

## project structure

The thing tying everything together here is astro.
Svelte is just used to write a couple of components, which I then plop into the astro pages.
In astro I can define the pages and layouts for those pages (containing the aforementioned svelte
components), and they define the overall structure of the site.

The central part of that are the layouts under `src/layouts`.
I have one base layout that a given page either uses directly, or that a different layout is derived
from, like the layout for the blog posts.

Within these layouts there is usually either a svelte component or two, or just plain HTML with some
typescript frontmatter.

The whole project is pretty darn tiny, and probably easy to grasp.

Since the site is fully static, I only wrote tests for the typescript functions, because apart from
a couple conditional css attributes (most if not all relating to screen size), the site doesn't
really have any "reactiveness" to it.

## deps

- anything astro related
- svelte and typescript
- eslint + prettier and related plugins
- tailwind css + typography plugin (for rendering the blog posts) + daisyui
- jest for the typescript functions; since the page isn't reactive, there is no point in testing the
  components
