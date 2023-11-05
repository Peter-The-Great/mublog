<script lang="ts">
  import { _ } from "svelte-i18n";
  import Icon from "@iconify/svelte";
</script>

<nav class="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
  <ul>{$_("nav.newest")}</ul>
  <ul>{$_("nav.timeline")}</ul>
  <ul>
    <a href="https://github.com/keesvv">
      <Icon icon="mdi:github" aria-label="GitHub" width="28" />
    </a>
  </ul>
</nav>
