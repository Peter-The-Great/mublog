<script lang="ts">
  import Icon from "@iconify/svelte";
  import { _ } from "svelte-i18n";

  export let icon = "mdi:pencil-off-outline";
  export let caption = $_("placeholder.no_content");
</script>

<h1 class="flex items-center gap-1.5">
  <Icon {icon} width="28" />
  <span>{caption}</span>
</h1>
