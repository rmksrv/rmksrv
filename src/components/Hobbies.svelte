<script>
  export let mainSettings, hobbies;
</script>

{#if hobbies?.length}
  <div class="works mb-8 md:mb-16">
    <h2
      class="font-bold text-xl pb-3 mb-3 border-b"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      My <span class={mainSettings.textColorScheme}>Hobbies</span>
    </h2>
    <div>
      {#each hobbies as item}
        <p
          class={`inline-block rounded-full text-white ${item.color} duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100`}
          data-sal="slide-up"
          data-sal-duration="800"
        >
          {item.hobby}
        </p>
      {/each}
    </div>
  </div>
{/if}
