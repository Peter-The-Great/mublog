<script lang="ts">
  import { _ } from "svelte-i18n";
  import { DefaultAuthor, type Post } from "./modules/post";
  import Icon from "@iconify/svelte";
  import dayjs from "dayjs";

  export let item: Post;

  const authors = [DefaultAuthor];
</script>

<article>
  <div class="mb-5 max-w-xl">
    <h1 class="text-3xl font-semibold">{item.title}</h1>
    {#if item.subtitle}
      <h2 class="text-xl detail">{item.subtitle}</h2>
    {/if}
    <h3 class="mt-2">
      <span>{$_("post.authored_by")}</span>
      {#each authors as author}
        <a href={author.url} class="link-emphasis">{author.name}</a>
      {/each}
      <span>{dayjs(item.published).fromNow()}</span>
    </h3>
  </div>
  <div class="font-light max-w-3xl" id="content">
    {@html item.content}
  </div>
</article>
<div class="mt-8">
  <a href="/all" class="detail flex items-center gap-1">
    <span>{$_("post.view_more")}</span>
    <Icon class="inline" icon="lucide:arrow-right" width="24" />
  </a>
</div>

<style scoped lang="postcss">
  #content :global(img) {
    @apply rounded-md my-5;
  }
</style>
