<script lang="ts">
  export let teams: Array<Team>;
</script>
<style>
  img {
    width: 40px;
  }
</style>

<nav class="level py-4 has-text-centered">
  {#each teams as { crestUrl, name }}
    <img src={crestUrl} alt={name} />
  {/each}
</nav>

