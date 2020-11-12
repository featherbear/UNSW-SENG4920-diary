<script>
  export let src;
</script>

<style>
  .tile {
    display: flex;
    align-items: center;
    text-align: center;
    cursor: pointer;
    min-height: 80px;
  }
</style>

<div class="tile gradientBorder" on:click>
  <slot />
</div>
