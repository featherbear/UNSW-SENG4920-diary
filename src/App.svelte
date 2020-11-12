<script>
  import Filmstrip from "./Filmstrip.svelte";
  import diaryData from "./diaryData.js";
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .overflowContainer {
    flex: 1;
    height: 100%;
    position: relative;

    flex-basis: 200px;
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
  }

  :global(.overflowContainer > *) {
    flex-shrink: 0;
  }

  .titleBlock {
    background-color: white;
    
    z-index: 99;
    
    top: 0;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    padding: 10px 0;
    margin-bottom: 15px;

    font-family: 'Open Sans';
  }

  .titleBlock img {
    pointer-events: none;
    filter: contrast(0) brightness(0.2);
  }

  .titleBlock p {
    margin: 4px;
  }
</style>

<div class="container">
  <div class="titleBlock gradientAnim">
    <img alt="logo" src="https://splitify.github.io/branding/textmark/textmark@72.png"/> 
    <p>Project Diary - Andrew Wong (z5206677)</p>
  </div>
  <div class="overflowContainer">
    {#each diaryData.filter(d=>d.content && d.content.length) as data}
      <Filmstrip items={data} />
    {/each}
  </div>
</div>