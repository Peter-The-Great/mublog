<script lang="ts">
  import "../app.postcss";
  import "$lib/i18n";
  import { _ } from "svelte-i18n";
  import { title } from "$lib/modules/config";
  import { DefaultAuthor } from "$lib/modules/post";
  import Navbar from "$lib/Navbar.svelte";
</script>

<svelte:head>
  <title>{$_("title", { values: { title, author: DefaultAuthor.name } })}</title
  >
</svelte:head>

<main class="m-10">
  <Navbar />
  <div class="mt-8">
    <slot />
  </div>
</main>
