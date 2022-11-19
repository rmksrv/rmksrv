<script>
  import FaIcon from "$components/FaIcon.svelte";
  export let services, mainSettings;
</script>

{#if services?.length}
  <div class="services mb-8 md:mb-16">
    <h2
      class="font-bold text-xl pb-3 mb-3 border-b"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      My <span class={`${mainSettings.textColorScheme}`}>Services</span>
    </h2>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mb-3 md:mb-5">
      {#each services as item}
        <div
          class="grid border justify-items-center rounded py-4 px-2"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <div
            class={`grid justify-items-center items-center icon w-12 h-12 rounded-full ${mainSettings.colorScheme} mb-2`}
          >
            <FaIcon icon={item.icon} class="text-white text-xl" />
          </div>
          <div class="grid justify-items-center">
            <h2 class="font-bold mb-2">{item.title}</h2>
            <p class="text-center mb-2">{item.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
