<script>
  export let mainSettings, testimonials;
</script>

{#if testimonials?.length}
  <div class="testimonials mb-8 md:mb-16">
    <h2
      class="font-bold text-xl pb-3 mb-3 border-b"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      <span class={mainSettings.textColorScheme}>Testimonials</span>
    </h2>

    <div class="py-3">
      {#each testimonials as item}
        <div
          class="min-w-screen flex items-center justify-center mb-5"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <div
            class="w-full mx-auto rounded-lg bg-white border shadow-lg px-5 pt-5 pb-10 text-gray-800"
          >
            <div class="w-full pt-1 pb-3">
              <div
                class="overflow-hidden rounded-full w-16 h-16 mx-auto shadow-lg"
              >
                <img
                  width="65"
                  height="65"
                  loading="lazy"
                  class="w-full"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            </div>
            <div class="w-full mb-10">
              <div class="text-3xl text-gray-300 text-left leading-tight h-3">
                <i class="fas fa-quote-left" />
              </div>
              <p
                class="text-sm md:text-base italic text-gray-600 text-center px-5"
              >
                {item.review}
              </p>
              <div
                class="text-3xl text-gray-300 text-right leading-tight h-3 -mt-3"
              >
                <i class="fas fa-quote-right" />
              </div>
            </div>
            <div class="w-full">
              <p
                class={`text-md ${mainSettings.textColorScheme} font-bold text-center`}
              >
                {item.name}
              </p>
              <p class="text-xs text-gray-500 text-center">{item.social}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}
