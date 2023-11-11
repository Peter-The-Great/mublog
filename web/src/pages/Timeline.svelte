<script lang="ts">
  import { Link } from "svelte-navigator";
  import { catalog } from "../modules/catalog";
  import PostPreview from "../lib/PostPreview.svelte";
</script>

<ul class="flex flex-col gap-4">
  {#each $catalog as item}
    <li><Link to="/t/{item.slug}"><PostPreview post={item} /></Link></li>
  {/each}
</ul>
