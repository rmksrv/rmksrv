<script>
  export let mainSettings, posts;
</script>

{#if posts?.length}
  <div class="blogs mb-8 md:mb-16">
    <h2
      class="font-bold text-xl pb-3 mb-3 border-b"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      My <span class={`${mainSettings.textColorScheme}`}>Blog</span>
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 py-3">
      {#each posts as { metadata, path }, index}
        {#if index < mainSettings.numberOfBlogPostsToShow}
          <a data-sveltekit-prefetch href={path.replace("+page.md", "")}>
            <div data-sal="slide-up" data-sal-duration="800">
              <img
                width="200"
                height="150"
                loading="lazy"
                class="lazyload h-44 w-full object-cover object-center rounded"
                src={metadata.image}
                alt={metadata.title}
              />

              <h3 class="font-semibold text-center">{metadata.title}</h3>
              <p class="text-sm text-center">{metadata.description}</p>
            </div>
          </a>
        {/if}
      {/each}
    </div>
    <p class="text-center py-2">
      <a
        data-sveltekit-prefetch
        data-sveltekit-noscroll
        class={`${mainSettings.textColorScheme} underline hover:text-blue-600`}
        href="/blog/">All Posts</a
      >
    </p>
  </div>
{/if}
