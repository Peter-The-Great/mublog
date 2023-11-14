<script lang="ts">
  import Post from "$lib/Post.svelte";
  import type { PageData } from "./$types";
  import { defaultAuthor, primaryLanguage } from "$lib/modules/config";
  import Placeholder from "$lib/Placeholder.svelte";
  import { _ } from "svelte-i18n";

  export let data: PageData;
  export const { post } = data;
</script>

<svelte:head>
  <title>{post.title} &mdash; {defaultAuthor.name}</title>
  <meta name="description" content={post.subtitle} />
  <meta property="og:description" content={post.subtitle} />
  <meta property="og:title" content={post.title} />
  <meta property="og:locale" content={primaryLanguage} />
  <meta property="og:image" content={post.cover} />
  <meta property="og:type" content="article" />
  <meta property="article:author" content={defaultAuthor.url} />
  <meta
    property="article:published_time"
    content={post.published.toISOString()}
  />
</svelte:head>

{#if post}
  <Post {post} />
{:else}
  <Placeholder
    icon="mdi:file-document-remove-outline"
    caption={$_("placeholder.not_found")}
  />
{/if}
