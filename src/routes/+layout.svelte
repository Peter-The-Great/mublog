<script lang="ts">
  import "../app.postcss";
  import { initI18n } from "$lib/modules/i18n";
  import { _ } from "svelte-i18n";
  import { defaultAuthor, title } from "$lib/modules/config";
  import Navbar from "$lib/Navbar.svelte";

  initI18n();
</script>

<svelte:head>
  <title>{$_("title", { values: { title, author: defaultAuthor.name } })}</title
  >
</svelte:head>

<main class="m-8 md:m-10">
  <header class="mb-6">
    <a class="detail absolute -top-10 focus:top-0" tabindex={0} href="#main"
      >{$_("a11y.skip_link")}</a
    >
    <Navbar />
  </header>
  <div class="md:mt-8" id="main">
    <slot />
  </div>
</main>
