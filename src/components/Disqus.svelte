<script>
  import { mainSettings } from "$lib/settings";

  let showComments = false;

  const runDisqus = () => {
    let d = document,
      s = d.createElement("script");
    s.src = `//${mainSettings.disqusShortname}.disqus.com/embed.js`;
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  };
</script>

{#if mainSettings.disqusShortname}
  {#if showComments}
    <div id="disqus_thread" use:runDisqus />
  {:else}
    <button
      class={`text-white rounded px-4 py-1 ${mainSettings.colorScheme}`}
      on:click={() => (showComments = true)}>Show/Add Comments</button
    >
  {/if}
{/if}
