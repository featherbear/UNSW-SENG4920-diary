<script>
  import IFrame from "./PreviewIFrame.svelte"

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function close() {
    dispatch("destroy");
  }

  import { fade } from "svelte/transition";

  let commitID = ""
  let link = "";
  export let data;
  $: {
    link = (data.link || "").replace(/^https?:\/\//i, '')
    let regex = /^github.com\/.+?\/blob\/(.+?)\//i.exec(link)
    if (regex) {
      commitID = regex[1].slice(0, 8)
    }
  }
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
    cursor: pointer;
  }

  .content {
    background-color: white;
    width: 60%;
    height: 60%;

    border-radius: 3px;
    user-select: text;

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

  .lightbox :global(pre) {
    display: inline;
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
        {#if commitID}
          <p>Commit: <a href={data.link}>{commitID}</a></p>
        {:else}
          <p>Link: <a href={data.link}>{link}</a></p>
        {/if}
    {/if}
    {#if data.frame}
      <IFrame url={data.frame.url} title={data.frame.title} />
    {/if}
  </div>
</div>
