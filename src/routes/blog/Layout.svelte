<script>
  import Disqus from "$components/Disqus.svelte";
  import { mainSettings } from "$lib/settings";
  export let title = "";
  export let description = "";
  export let image = "";
</script>

<div class="grid grid-cols-1 gap-6 place-items-center mb-3">
  {#if image}
    <img
      width="500"
      height="300"
      src={image}
      alt={title}
      loading="lazy"
      class="lazyload w-full object-cover object-center rounded"
    />
  {/if}
  {#if title}
    <h1 class="font-bold text-2xl text-center">{title}</h1>
  {/if}
  {#if description}
    <p class="text-center text-xl mb-10">{description}</p>
  {/if}
</div>
<!-- the mdsvex content will be slotted in here -->
<article class="post">
  <slot />
</article>
<div class="border-t py-5">
  <Disqus />
</div>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if mainSettings.math}
    <script src="https://unpkg.com/mathlive/dist/mathlive.min.js"></script>
  {/if}
</svelte:head>
