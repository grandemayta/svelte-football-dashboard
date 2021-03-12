<script type="ts">
  import { getMatches } from "../services/getMatches";

  export let competition: string;
</script>

{#await getMatches(competition, '2021-03-12', '2021-07-22')}
  <p>Loading...</p>
{:then { matches }}
  <table class="table is-hoverable is-fullwidth">
    {#each matches as { homeTeam, awayTeam, matchday }}
      <tr>
        <td>{homeTeam.name}</td>
        <td>vs</td>
        <td>{awayTeam.name}</td>
      </tr>
    {/each}
  </table>
{:catch error}
  <p>Oopss something is not working!</p>
{/await}