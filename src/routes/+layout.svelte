<script>
  import { mainSettings, sidebar } from "$lib/settings";
  import "../app.postcss";
  import "../../static/global.css";
  import "../../static/custom.css";
  import "../../static/atom-dark-syntax.css";
  import LoadingAnimation from "$components/LoadingAnimation.svelte";
  import Sidebar from "$components/Sidebar.svelte";
  import Footer from "$components/Footer.svelte";

  import { onMount } from "svelte";
  let showLoading = true;
  onMount(() => {
    showLoading = false;
  });
  export const prerender = true
</script>

{#if showLoading}
  <LoadingAnimation {showLoading} />
{/if}
<div class="container">
  <div class="wrapper px-0 md:px-2">
    <div class="grid md:grid-cols-12 gap-0 md:gap-8">
      <Sidebar {sidebar} {mainSettings} />
      <main
        class="col-span-12 md:col-span-8 shadow-lg md:rounded-lg bg-white p-4 md:p-8 overflow-hidden"
      >
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</div>

<svelte:head>
  {#if !showLoading}
    <link rel="icon" href={mainSettings.favicon} />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <title>{mainSettings.title}</title>
    <meta name="description" content={mainSettings.description} />
  {/if}
</svelte:head>
