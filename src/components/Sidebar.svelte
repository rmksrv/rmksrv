<script>
  import Typewriter from "svelte-typewriter";
  import FaIcon from "$components/FaIcon.svelte";
  export let mainSettings, sidebar;
</script>

<aside
  class="sidebar md:sticky top-6 self-start col-span-12 md:col-span-4 shadow-lg md:rounded-lg {mainSettings.colorScheme} p-4"
>
  <a href="/"
    ><div
      class="image grid justify-items-center py-3 md:py-5 border-b duration-300"
    >
      <img
        width="85"
        height="85"
        loading="lazy"
        class="lazyload rounded-full shadow border-4 border-white"
        src={sidebar.image}
        alt={sidebar.name}
      />
    </div>
  </a>
  <div class="description grid justify-items-center py-3 md:py-5">
    {#if sidebar.name}
      <a href="/">
        <h1
          class="text-2xl font-bold text-white hover:text-gray-100 duration-300"
        >
          {sidebar.name}
        </h1>
      </a>
    {/if}
    {#if sidebar.designations}
      <div class="text-white mb-2 pt-1 h-5 font-semibold italic">
<!--        <Typewriter loop interval={100}>-->
        <Typewriter interval={100}>
          {#each sidebar.designations as item}
            <span>{item}</span>
          {/each}
        </Typewriter>
      </div>
    {/if}
    {#if sidebar.social}
      <div class="social w-full mt-3 md:mt-6">
        <ul class="flex justify-around mb-3 md:mb-5">
          {#each sidebar.social as item}
            <li>
              <a href={item.link} title={item.title}>
                <FaIcon
                  icon={item.icon}
                  class="text-3xl md:text-2xl text-white hover:text-gray-300"
                />
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
    {#if sidebar.sidebarLinks}
      <div class="downloads">
        <ul class="flex justify-around text-white">
          {#each sidebar.sidebarLinks as item, i}
            <li>
              <a
                data-sveltekit-prefetch
                href={item.link}
                class="text-sm font-semibold hover:underline"
                download={item.downloadable && "resume"}>{item.title}</a
              >
            </li>
            {#if i !== sidebar.sidebarLinks.length - 1}
              <li class="font-light px-1">|</li>
            {/if}
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</aside>
