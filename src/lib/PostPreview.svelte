<script lang="ts">
  import type { PostSummary } from "$lib/modules/post";

  export let summary: PostSummary;
</script>

<div>
  <h1 class="inline">{summary.title}</h1>
  <div class="inline text-gray-500">
    {#if summary.subtitle}
      <span>&mdash;</span>
      <h2 class="inline">{summary.subtitle}</h2>
    {/if}
  </div>
</div>
