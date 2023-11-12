<script lang="ts">
  import Post from "$lib/Post.svelte";
  import type { PageData } from "./$types";
  import { defaultAuthor } from "$lib/modules/config";
  import Placeholder from "$lib/Placeholder.svelte";
  import { _ } from "svelte-i18n";

  export let data: PageData;
  export const { post } = data;
</script>

<svelte:head>
  {#if post}
    <title>{post.title} &mdash; {defaultAuthor.name}</title>
  {/if}
</svelte:head>

{#if post}
  <Post {post} />
{:else}
  <Placeholder
    icon="mdi:file-document-remove-outline"
    caption={$_("placeholder.not_found")}
  />
{/if}
