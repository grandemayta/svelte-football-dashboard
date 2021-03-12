<script lang="ts">
  import { getTeams } from "../services";
  export let code: string;
</script>
<style>
    img {
      width: 40px;
    }
</style>

{#await getTeams(code)}
  <p>Loading...</p>
{:then { teams }}
  <nav class="level py-4">
    {#each teams as { crestUrl, name }}
      <img src={crestUrl} alt={name} />
    {/each}
  </nav>
{:catch error}
  <p>Oopss something is not working</p>
{/await}