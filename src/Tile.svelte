<script>
  export let src;
</script>

<style>
  .tile {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 80px;
  }
</style>

<div class="tile gradientBorder" on:click>
  <slot />
</div>
