<script lang="ts">
  export let content: string;
</script>

<div id="content">
  {@html content}
</div>

<style scoped lang="postcss">
  #content :global(img) {
    @apply rounded-md my-5;
  }
</style>
