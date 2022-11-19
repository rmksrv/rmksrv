<script>
  import { mainSettings } from "$lib/settings";
</script>

<h1 class="text-3xl font-bold mb-4">Contact Me</h1>

<form action={mainSettings.formspreeAction} method="POST" target="_blank">
  <div class="grid gap-4">
    <label for="email"> Your email: </label>
    <input
      id="email"
      class="border py-2 px-3 text-grey-darkest rounded"
      type="email"
      name="_replyto"
    />

    <label for="message"> Your message: </label>
    <textarea
      id="message"
      class="border py-2 px-3 text-grey-darkest rounded"
      name="message"
      rows="6"
    />

    <!-- your other form fields go here -->

    <button
      class={`grid ${mainSettings.colorScheme} rounded px-4 py-3 text-center text-white font-bold hover:${mainSettings.colorAccent} transform duration-300`}
      type="submit">Send</button
    >
  </div>
</form>
