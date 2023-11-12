<script lang="ts">
  import PostPreview from "$lib/PostPreview.svelte";
  import { ExampleItem } from "$lib/modules/post";

  const posts = [ExampleItem];
</script>

<ul class="flex flex-col gap-4">
  {#each posts as item}
    <li><a href="/thought/{item.slug}"><PostPreview post={item} /></a></li>
  {/each}
</ul>
