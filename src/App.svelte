<script>
  import Filmstrip from "./Filmstrip.svelte";
  import data from "./data.json";

  function rand() {
    let maxAngle = 15;
    return Math.random() * maxAngle - maxAngle/2;
  }
</script>

<style>
  .overflowContainer {
    overflow-y: hidden;
    height: 100%;

    flex-basis: 200px;
    display: flex;
  }

  :global(.overflowContainer > *) {
    flex-shrink: 0;
  }
</style>

<div class="overflowContainer">
  {#each data as items}
    <Filmstrip {items} rotation={rand()} />
  {/each}
</div>