<script lang="ts">
  import "../app.postcss";
  import "$lib/i18n";
  import { _ } from "svelte-i18n";
  import { defaultAuthor, title } from "$lib/modules/config";
  import Navbar from "$lib/Navbar.svelte";
</script>

<svelte:head>
  <title>{$_("title", { values: { title, author: defaultAuthor.name } })}</title
  >
</svelte:head>

<main class="m-10">
  <Navbar />
  <div class="mt-8">
    <slot />
  </div>
</main>
