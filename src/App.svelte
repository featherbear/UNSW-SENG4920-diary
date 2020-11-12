<script>
  import Filmstrip from "./Filmstrip.svelte";
  import diaryData from "./diaryData.js";
</script>

<style>
  .overflowContainer {
    overflow-y: hidden;
    height: 100%;

    flex-basis: 200px;
    display: flex;

    justify-content: center;
  }

  :global(.overflowContainer > *) {
    flex-shrink: 0;
  }
</style>

<div class="overflowContainer">
  {#each diaryData.filter(d=>d.content.length) as data}
    <Filmstrip items={data} />
  {/each}
</div>