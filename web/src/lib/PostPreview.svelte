<script lang="ts">
  import type { BlogItem } from "../modules/catalog";

  export let post: BlogItem;
</script>

<div>
  <h1 class="inline">{post.title}</h1>
  <div class="inline text-gray-500">
    {#if post.subtitle}
      <span>&mdash;</span>
      <h2 class="inline">{post.subtitle}</h2>
    {/if}
  </div>
</div>
