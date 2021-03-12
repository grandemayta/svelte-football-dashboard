<script type="ts">
  import { getMatches } from "../services/getMatches";

  export let code: string;
  export let currentMatchday: number;
</script>

{#await getMatches(code, currentMatchday)}
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