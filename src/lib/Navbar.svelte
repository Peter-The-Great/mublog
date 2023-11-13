<script lang="ts">
  import { _ } from "svelte-i18n";
  import Icon from "@iconify/svelte";
  import { defaultAuthor, links } from "$lib/modules/config";

  export let hasAbout = false;
</script>

<nav class="detail">
  <ul class="flex items-center gap-6">
    <li><a href="/">{$_("nav.newest")}</a></li>
    <li><a href="/all">{$_("nav.timeline")}</a></li>
    {#if hasAbout}
      <li>
        <a href="/about"
          >{$_("nav.about", {
            values: { author: defaultAuthor.shortName ?? defaultAuthor.name },
          })}</a
        >
      </li>
    {/if}
    <li class="flex gap-1">
      {#each links as link}
        <a href={link.url} title={link.title} aria-label={link.title}>
          <Icon icon={link.icon} width="28" />
        </a>
      {/each}
    </li>
  </ul>
</nav>
