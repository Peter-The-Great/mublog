<script lang="ts">
  import type { PostSummary } from "$lib/modules/post";
  import dayjs from "dayjs";

  export let summary: PostSummary;
</script>

<div class="flex items-center gap-8">
  <span class="detail">{dayjs(summary.published).format("ll")}</span>
  <div>
    <h1 class="inline">{summary.title}</h1>
    <div class="inline detail">
      {#if summary.subtitle}
        <span>&mdash;</span>
        <h2 class="inline">{summary.subtitle}</h2>
      {/if}
    </div>
  </div>
</div>
