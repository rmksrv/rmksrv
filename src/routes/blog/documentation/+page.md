---
title: Documentation
description: Refer to this post for making changes to your SvelteKit site.
image: https://picsum.photos/id/180/500/300
layout: blog
---

<script>
  import {mainSettings} from "$lib/settings";
  import Cta from "$components/Cta.svelte";
  import Katex from "$components/Katex.svelte"
</script>

### Easy Customization

You can change most of the features from one place - `src/lib/settings.js`

Here is how it looks like,

```js
export const mainSettings = {
  title: "My Resume",
  description:
    "Hi, my name is Joe and this is my online resume built using SvelteKit.",
  favicon: "/images/figs-32.png",
  colorScheme: "bg-blue-500",
  // google analytics
  analytics: "UA-92266803-7",
  // using Disqus for comments, get a shortcode @ https://disqus.com
  disqusShortname: "webjeda-demo",
  // contact form at /contact uses formspree, create your own @ https://formspree.io/
  formspreeAction: "https://formspree.io/f/mdowwywy",
  // set it to false if you do not use math formulas in your articles
  math: true,
};
```

[Learn more](/blog/usage)

### Tailwind

The theme is built using TailwindCSS. Customizing the theme to your needs can be done without touching any CSS file.
It also has a **Purge** on build. This way you will be using only the styles that you need.

### Search Engine Optimized

The theme is optimized for search engines. You can just start adding content and it will be ready to be indexed by search engines.

### Lightning Speed

Svelte is superfast. You can see that in action here. Once the site is loaded, pages and posts load instantly like a native app.

![Pagespeed](/images/screenshots/pagespeed.png)

### Super Performance, SEO, and Accessibility

![Lighthouse Test](/images/screenshots/lighthouse-test.png)

### Math

Display beautiful math equations using mathjax. This feature can be disabled for performance.
<Katex math={"V=\\pi\\textrm{ m}^3"} displayMode/>
<br />
<Katex math={"x=-\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}"} displayMode />

### Comments

The theme includes integrated Disqus comments. This can be disabled if needed.

### Installation

Once you extract the theme zip file, run the following commands.

- `npm install`

- `npm run dev` for testing the site locally.

- `npm run build`

This will build the HTML site in _/public_ directory. This can be hosted anywhere. Either on conventional hosting or on a static hosting service.

You easily host it as pages using GitHub, Gitlab etc.

In most cases, it is drag-drop upload.

### Usage

The theme uses a centralized data from where you can make almost all the changes to the entire site.

The files that are responsible for the information shown on the website reside in _src/components_ directory as shown below.

```plaintext
├── \components
| ├── About.svelte
| └── Blog.svelte
| └── Skills.svelte
| └── Works.svelte
| └── Testimonials.svelte
.
.
```

### Color schemes

You can choose from more than 50 color schemes from [tailwind colors](https://tailwindcss.com/docs/customizing-colors). You can change the color scheme in _src/lib/settings.js_ as shown below.

```yml
color-scheme: blue-500
```

### Contact form

The theme provides a built-in contact form. You will have to add one line in _src/lib/settings.js_ to make it work.

Get an account from formspree.io. Go to integration. Copy the endpoint which would look like this

`https://formspree.io/f/mdowsdwy` and put it in _src/lib/settings.js_ as shown below

```yml
formspreeAction: "https://formspree.io/f/mdowwywy",
```

### Skills

Skills can be updated through a file in _src/lib/settings.js_. Here is how it would look like.

```json
{
    name: "HTML",
    skillLevel: 90,
    color: "text-pink-400",
  },
  {
    name: "CSS",
    skillLevel: 80,
    color: "text-green-400",
  },
  {
    name: "JavaScript",
    skillLevel: 60,
    color: "text-yellow-400",
  },
  {
    name: "Python",
    skillLevel: 70,
    color: "text-indigo-400",
  },
  {
    name: "Photoshop",
    skillLevel: 70,
    color: "text-blue-400",
  },
  {
    name: "Svelte",
    skillLevel: 50,
    color: "text-red-400",
  },
```

You can choose any tailwind class.

> All sections in the website have a variable in _src/lib/settings.js_ directory which can be updated.

### Works

You can add new projects or works in _/src/routes/works/_ directory. You can have markdown files in here just like blog posts.
The index of all works/projects can be found at `/works/`.

### Blog Posts

You can add blog posts in _/src/routes/blog/_ directory. The index of all the blog posts can be found at `/blog/`.

### Screenshots

![Figs Svelte kit Theme](/images/screenshots/blue.png)

![Figs Svelte kit Theme](/images/screenshots/indigo.png)

![Figs Svelte kit Theme](/images/screenshots/gray.png)

![Figs Svelte kit Theme](/images/screenshots/green.png)

![Figs Svelte kit Theme](/images/screenshots/yellow.png)

![Figs Svelte kit Theme](/images/screenshots/red.png)

<Cta {mainSettings} />
