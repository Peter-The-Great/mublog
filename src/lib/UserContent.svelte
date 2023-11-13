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
</style>
