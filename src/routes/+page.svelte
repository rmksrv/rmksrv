<script>
  import {
    mainSettings,
    about,
    skills,
    services,
    clients,
    testimonials,
    hobbies,
  } from "$lib/settings";

  import About from "$components/About.svelte";
  import Skills from "$components/Skills.svelte";
  import Services from "$components/Services.svelte";
  import Works from "$components/Works.svelte";
  import Clients from "$components/Clients.svelte";
  import Blog from "$components/Blog.svelte";
  import Testimonials from "$components/Testimonials.svelte";
  import Hobbies from "$components/Hobbies.svelte";
  import HireMe from "$components/HireMe.svelte";
  import Cta from "$components/Cta.svelte";

  export let data;
  $: ({ works, posts } = data);
</script>

<About {mainSettings} {about} />
<Skills {mainSettings} {skills} />
<Services {mainSettings} {services} />
<!--<Works {mainSettings} {works} />-->
<Clients {mainSettings} {clients} />
<!--<Blog {mainSettings} {posts} />-->
<Testimonials {mainSettings} {testimonials} />
<Hobbies {mainSettings} {hobbies} />
<!--<HireMe {mainSettings} />-->
<!--<Cta {mainSettings} />-->

<svelte:head>
  <title>{mainSettings.title}</title>
</svelte:head>
