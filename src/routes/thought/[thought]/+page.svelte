<script lang="ts">
  import Post from "$lib/Post.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  export const { post } = data;
</script>

<svelte:head>
  {#if post.subtitle}
    <title>{post.title} &mdash; {post.subtitle}</title>
  {:else}
    <title>{post.title}</title>
  {/if}
</svelte:head>

<Post {post} />
