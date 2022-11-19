<script>
  import { onMount } from "svelte";

  export let mainSettings;

  onMount(() => {
    const scriptTag = document.createElement("script");
    const form = document.getElementById("rzp");
    scriptTag.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    scriptTag.setAttribute("data-payment_button_id", "pl_IGZXh2tQ3Q0G8R");
    form.appendChild(scriptTag);
  });

  const features = [
    "Server Side Rendered by default.",
    "SEO optimized.",
    "Blazing Fast.",
    "Easy to customize.",
    "3 months support.",
    "Get assistance with reported bugs and issues.",
    "Help with included 3rd party assets.",
  ];
</script>

{#if mainSettings.showBuyButton}
  <div class="cta">
    <h2
      class="font-bold text-xl pb-3 mb-3 border-b"
      data-sal="slide-up"
      data-sal-duration="800"
    >
      Buy
      <span class={mainSettings.textColorScheme}>Figs Sveltekit Theme</span>
      <span
        ><img
          width="25"
          height="25"
          loading="lazy"
          class="lazyload inline-block ml-2 w-6"
          src={mainSettings.touchIcon}
          alt="Figs Sveltekit Theme"
        />
      </span>
    </h2>
    <div
      class="grid grid-cols-1 gap-4 py-3 items-center"
      data-sal="fade"
      data-sal-duration="800"
    >
      <ul>
        {#each features as feature}
          <li class="italic text-gray-600">
            <i class="fas fa-check-circle text-green-500 mr-2" />{feature}
          </li>
        {/each}
      </ul>

      <div class="max-w-xs">
        <ul>
          <li>
            <a
              class="block mb-4 underline text-blue-500 hover:text-blue-600"
              href="/blog/documentation/">Features</a
            >
          </li>
          <li>
            <a
              class="block mb-4 underline text-blue-500 hover:text-blue-600"
              href="/blog/usage">Usage</a
            >
          </li>
        </ul>
        <form id="rzp" />
      </div>
    </div>
  </div>
{/if}
