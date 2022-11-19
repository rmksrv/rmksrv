<script>
  export let mainSettings, clients;
</script>

{#if clients?.length}
  <div class="works mb-8 md:mb-16">
    <h2
      class="font-bold text-xl pb-3 mb-3 border-b"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      <span class={mainSettings.textColorScheme}>Worked</span> at
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-3 items-center">
      {#each clients as item}
        <a href={item.link}>
          <img
            width="120"
            height="50"
            loading="lazy"
            class="lazyload w-full"
            src={item.image}
            alt={item.name}
            data-sal="slide-up"
            data-sal-duration="800"
          />
        </a>
      {/each}
    </div>
  </div>
{/if}
