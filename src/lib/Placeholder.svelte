<script lang="ts">
  import Icon from "@iconify/svelte";
  import { _ } from "svelte-i18n";
</script>

<h1 class="flex items-center gap-1.5">
  <Icon icon="mdi:pencil-off-outline" width="28" />
  <span>{$_("no_content")}</span>
</h1>
