<script lang="ts">
  import Post from "$lib/Post.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  export const { post } = data;
</script>

<Post {post} />
