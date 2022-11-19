<script>
  export let mainSettings;
</script>

<div class="hire mb-8 md:mb-16">
  <h2
    class="font-bold text-xl pb-3 mb-3 border-b"
    data-sal="slide-up"
    data-sal-duration="800"
  >
    <span class={mainSettings.textColorScheme}>Hire</span> Me
  </h2>

  <a
    class={`grid ${mainSettings.colorScheme} rounded px-4 py-3 text-center text-white font-bold hover:${mainSettings.colorAccent} transform duration-300`}
    href="/contact/">Hire Me</a
  >
</div>
