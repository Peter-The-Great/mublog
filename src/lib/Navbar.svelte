<script lang="ts">
  import { _ } from "svelte-i18n";
  import Icon from "@iconify/svelte";
</script>

<nav class="detail">
  <ul class="flex items-center gap-6">
    <li><a href="/">{$_("nav.newest")}</a></li>
    <li><a href="/all">{$_("nav.timeline")}</a></li>
    <li>
      <a href="https://github.com/keesvv">
        <Icon icon="mdi:github" aria-label="GitHub" width="28" />
      </a>
    </li>
  </ul>
</nav>
