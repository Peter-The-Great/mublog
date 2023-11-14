<script lang="ts">
  export let content: string;
</script>

<div>
  {@html content}
</div>

<style scoped lang="postcss">
  div :global(img) {
    @apply rounded-md my-5;
  }

  div :global(a) {
    @apply underline;
  }

  div :global(strong) {
    @apply font-semibold;
  }

  div :global(p),
  div :global(blockquote) {
    @apply mb-4;
  }

  div :global(h1),
  div :global(h2),
  div :global(h3) {
    @apply mt-5 mb-1;
  }

  div :global(h1),
  div :global(h2) {
    @apply text-2xl font-semibold;
  }

  div :global(h3) {
    @apply text-lg detail;
  }

  div :global(blockquote) {
    @apply border-l-2 px-4 py-3 detail italic;
  }

  div :global(blockquote p) {
    @apply m-auto;
  }

  div :global(ul) {
    @apply list-disc list-inside;
  }

  div :global(ol) {
    @apply list-decimal list-inside;
  }

  div :global(thead) {
    @apply text-left;
  }

  div :global(th) {
    @apply font-semibold;
  }

  div :global(th),
  div :global(td) {
    @apply border px-2 py-0.5;
  }

  div :global(pre) {
    @apply text-xs;
  }

  div :global(hr) {
    @apply my-6;
  }
</style>
