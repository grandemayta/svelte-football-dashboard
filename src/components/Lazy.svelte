<script lang="ts">
  import { onMount } from "svelte";

  export let height: number;
  let el: HTMLElement;
  let isVisible: boolean;

  onMount(() => {
    const observer = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
      if (isVisible) {
        observer.unobserve(el);
        observer.disconnect();
      }
    });
    observer.observe(el);
  });
</script>
  
<div bind:this={el}>
  {#if isVisible}
    <slot />
  {:else}
     <div style="height: {height}px;"></div>
  {/if}
</div>