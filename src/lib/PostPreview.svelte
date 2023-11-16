<script lang="ts">
  import dayjs from "dayjs";
  import type { PostSummary } from "$lib/modules/post";
  import { hasLangMismatch, locale, locales } from "$lib/modules/i18n";
  import { _ } from "svelte-i18n";

  export let summary: PostSummary;
</script>

<div class="flex items-center gap-8">
  <span class="detail">{dayjs(summary.published).format("ll")}</span>
  <div>
    {#if hasLangMismatch($locale, summary)}
      <span
        class="mr-1"
        title={$_(`locale.${summary.language}`)}
        aria-label={$_(`locale.${summary.language}`)}
        >{locales[summary.language].flag}</span
      >
    {/if}
    <span>{summary.title}</span>
    {#if summary.subtitle}
      <div class="inline detail">
        <span>&mdash;</span>
        <span>{summary.subtitle}</span>
      </div>
    {/if}
  </div>
</div>
