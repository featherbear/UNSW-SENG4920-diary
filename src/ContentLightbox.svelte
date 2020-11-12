<script>
  import IFrame from "./PreviewIFrame.svelte"

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("destroy");
  }

  import { fade } from "svelte/transition";

  export let data;
</script>

<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }

  .content {
    background-color: white;
    width: 60%;
    height: 60%;

    border-radius: 3px;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  :global(.content > *) {
    width: 100%;
    max-height: 100%;
  }
</style>

<div class="lightbox" transition:fade={{ duration: 300 }}>
  <div class="background" on:click={close} />
  <div class="content">
    {#if data.title}
      <h1>{data.title}</h1>
    {/if}
    {#if data.content}
      {#if Array.isArray(data.content)}
        <ul>
          {#each data.content as entry}
            <li>{@html entry}</li>
          {/each}
        </ul>
      {:else}
        <p>{@html data.content}</p>
      {/if}
    {/if}
    {#if data.link}
      <p>Link: <a href={data.link}>{data.link.replace(/^https?:\/\//i, '')}</a></p>
    {/if}
    {#if data.frame}
      <IFrame url={data.frame.url} title={data.frame.title} />
    {/if}
  </div>
</div>
