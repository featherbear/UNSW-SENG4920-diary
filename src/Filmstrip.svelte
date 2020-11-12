<script>
  import Tile from "./Tile.svelte";
  import { fade } from "svelte/transition";

  import ContentLightbox from "./ContentLightbox.js";

  export let items = {
    title: "",
    content: []
  };
</script>

<style>
  .filmstrip {
    margin-bottom: 30px;

    width: 200px;
    background-color: var(--stripColour);
    height: 100vh;
    overflow-y: scroll;
    padding: 15px;

    cursor: pointer;

    -webkit-box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 1px 3px 22px 0px rgba(0, 0, 0, 0.3);
  }

  .filmstrip:not(:last-child) {
    margin-right: 30px;
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

  .subtitle {
    font-style: italic;
    color: grey;
  }
</style>

<div class="filmstrip" transition:fade={{ delay: 1000, duration: 800 }}>
  <Tile>
    <b>{items.title}</b>
  </Tile>
  {#if items.content}
    {#each items.content as item}
      <div class="spacer">
        <Tile on:click={() => ContentLightbox.createLightbox({...item, title: [items.title, item.title, item.date].filter(v=>v).join(" - ")})}>
          {#if item.title}
            {item.title}
          {/if}
          {#if item.date}
            <div class="subtitle">{item.date}</div>
          {/if}
        </Tile>
      </div>
    {/each}
  {/if}
</div>
