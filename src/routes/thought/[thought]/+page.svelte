<script lang="ts">
  import Post from "$lib/Post.svelte";
  import { ExampleItem } from "$lib/modules/post";
</script>

<svelte:head>
  {#if ExampleItem.subtitle}
    <title>{ExampleItem.title} &mdash; {ExampleItem.subtitle}</title>
  {:else}
    <title>{ExampleItem.title}</title>
  {/if}
</svelte:head>

<Post item={ExampleItem} />
