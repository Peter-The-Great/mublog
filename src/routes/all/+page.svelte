<script lang="ts">
  import PostPreview from "$lib/PostPreview.svelte";
  import Placeholder from "$lib/Placeholder.svelte";
  import type { LayoutData } from "../$types";

  export let data: LayoutData;
  export const { postSummaries: summaries } = data;
</script>

{#if summaries.length}
  <ul class="flex flex-col gap-4">
    {#each summaries as summary}
      <li><a href="/thought/{summary.slug}"><PostPreview {summary} /></a></li>
    {/each}
  </ul>
{:else}
  <Placeholder />
{/if}
