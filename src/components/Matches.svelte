<script type="ts">
  import { getMatches } from "../services/getMatches";
  export let code: string;
  export let currentMatchday: number;
</script>
{#await getMatches(code, currentMatchday)}
  <p>Loading...</p>
{:then { matches }}
  <h5 class="title is-5 is-uppercase  mt-5">Next Matches</h5>
  <table class="table is-hoverable is-fullwidth">
    {#each matches as { homeTeam, awayTeam, status, score }}
      <tr>
        <td>{homeTeam.name}</td>
        {#if status === 'FINISHED'}
          <td>{score.fullTime.homeTeam} vs {score.fullTime.awayTeam}</td>
        {:else}
          <td>vs</td>
        {/if}
        <td>{awayTeam.name}</td>
      </tr>
    {/each}
  </table>
{:catch error}
  <p>Oopss something is not working!</p>
{/await}