<script lang="ts">
  import PostPreview from "$lib/PostPreview.svelte";
  import Placeholder from "$lib/Placeholder.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  export const { summaries } = data;
</script>

{#if summaries.length}
  <ul class="flex flex-col gap-4">
    {#each summaries as summary}
      <li><a href="/post/{summary.slug}"><PostPreview {summary} /></a></li>
    {/each}
  </ul>
{:else}
  <Placeholder />
{/if}
