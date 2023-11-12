<script lang="ts">
  import UserContent from "$lib/UserContent.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<UserContent content={data.about} />
