<script>
  export let data;

  $: ({ works } = data);
</script>

<h1 class="text-3xl font-bold mb-4">Works</h1>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  {#each works as { metadata, path }}
    <a
      data-sveltekit-prefetch
      href={`${path.replace("./", "").replace("+page.md", "")}`}
      class="no-underline"
    >
      {#if metadata.image}
        <img
          class="lazyload h-44 w-full object-cover object-center rounded"
          src={metadata.image}
          alt={metadata.title}
        />
      {/if}
      <h4 class="text-xl font-semibold text-center">{metadata.title}</h4>
      <p class="text-center">{metadata.description}</p>
    </a>
  {/each}
</div>
