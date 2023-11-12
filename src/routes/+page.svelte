<script lang="ts">
  import Post from "$lib/Post.svelte";
  import Placeholder from "$lib/Placeholder.svelte";
  import type { PageData } from "./$types";
  import { _ } from "svelte-i18n";

  export let data: PageData;
  export const { post } = data;
</script>

{#if post}
  <Post {post} />
{:else}
  <Placeholder />
{/if}
