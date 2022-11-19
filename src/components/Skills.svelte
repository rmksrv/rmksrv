<script>
  import SkillItem from "./SkillItem.svelte";
  export let skills, mainSettings;
</script>

{#if skills?.length}
  <div class="works mb-8 md:mb-16">
    <h2
      class="font-bold text-xl pb-3 mb-3 border-b"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      My <span class={mainSettings.textColorScheme}>Skills</span>
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-3 items-center">
      {#each skills as item, index (item.color)}
        <SkillItem {item} {index} />
      {/each}
    </div>
  </div>
{/if}
