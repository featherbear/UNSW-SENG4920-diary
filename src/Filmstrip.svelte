<script>
  import Tile from "./Tile.svelte";
  import { fade } from "svelte/transition";

  import ContentLightbox from "./ContentLightbox.js";
  function showLightbox(item) {
    ContentLightbox.createLightbox({ data: item.content || `<img src="${item.src}" />` });
  }

  export let items = [];
  export let rotation = 0;
</script>

<style>
  .filmstrip {
    margin-right: 30px;
    margin-bottom: 30px;

    width: 200px;
    background-color: var(--stripColour);
    height: 100vh;
    overflow-y: scroll;
    padding: 15px;

    -webkit-box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
  }

  .spacer:not(:first-child) {
    margin-top: 15px;
  }

  .spacer {
    transform: scale(0.98);
    transition: transform 0.2s;
  }

  .spacer:hover {
    transform: scale(1);
  }
</style>

<div
  class="filmstrip"
  transition:fade={{ delay: 1000, duration: 800 }}
  style={`transform: rotate(${rotation}deg); margin-right: ${200 * Math.abs(Math.sin(Math.abs(rotation)))}px`}>
  {#each items as item}
    <div class="spacer">
      <Tile on:click={() => showLightbox(item)} src={item.src}>
        {item.content || ""}
      </Tile>
    </div>
  {/each}
</div>
