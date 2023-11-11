<script lang="ts">
  import { _ } from "svelte-i18n";
  import Icon from "@iconify/svelte";
  import { Link } from "svelte-navigator";
</script>

<nav class="detail">
  <ul class="flex items-center gap-6">
    <li><Link to="/">{$_("nav.newest")}</Link></li>
    <li><Link to="/all">{$_("nav.timeline")}</Link></li>
    <li>
      <a href="https://github.com/keesvv">
        <Icon icon="mdi:github" aria-label="GitHub" width="28" />
      </a>
    </li>
  </ul>
</nav>
