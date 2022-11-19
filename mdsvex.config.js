const config = {
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
  layout: {
    blog: "./src/routes/blog/Layout.svelte",
    work: "./src/routes/works/Layout.svelte",
  },
};

export default config;
