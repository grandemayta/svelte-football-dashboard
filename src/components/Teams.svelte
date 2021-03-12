<script lang="ts">
  import { getCompetition } from "../services";
  export let competition: string;
</script>
<style>
    img {
      width: 40px;
    }
</style>

{#await getCompetition(competition)}
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