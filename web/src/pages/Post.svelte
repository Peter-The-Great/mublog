<script lang="ts">
  import { useParams } from "svelte-navigator";
  import { catalog } from "../modules/catalog";

  const params = useParams();

  const item = $params.slug
    ? $catalog.find((item) => item.slug === $params.slug)
    : $catalog[0];
</script>

<div class="mb-5 max-w-xl">
  <h1 class="text-3xl font-semibold">{item?.title}</h1>
  {#if item?.subtitle}
    <h2 class="text-xl detail">{item?.subtitle}</h2>
  {/if}
</div>
<div class="font-light max-w-3xl">{item?.content}</div>
