<script lang="ts">
  import PostPreview from "$lib/PostPreview.svelte";
  import type { LayoutData } from "../$types";

  export let data: LayoutData;
  export const { postSummaries: summaries } = data;
</script>

<ul class="flex flex-col gap-4">
  {#each summaries as summary}
    <li><a href="/thought/{summary.slug}"><PostPreview {summary} /></a></li>
  {/each}
</ul>
