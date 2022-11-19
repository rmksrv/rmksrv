<script>
  export let mainSettings, about;
</script>

<div class="about mb-8 md:mb-16 relative z-20">
  <h2
    class="font-bold text-xl pb-3 mb-3 border-b"
    data-sal="slide-up"
    data-sal-duration="800"
  >
    <span class={mainSettings.textColorScheme}>About</span> Me
  </h2>

  <p data-sal="slide-up" data-sal-duration="800">
    {about.description}
  </p>
  <div class="details mt-3 md:mt-6" data-sal="slide-up" data-sal-duration="800">
    <table>
      <tbody>
        {#each Object.entries(about.details) as item}
          <tr class="mb-2">
            <td
              class="{mainSettings.colorScheme} text-white rounded px-2 py-1 capitalize"
              >{item[0]}:</td
            >
            <td><span class="ml-10">{item[1]}</span></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  table {
    border-collapse: separate;
    border-spacing: 0 1em;
  }
</style>
