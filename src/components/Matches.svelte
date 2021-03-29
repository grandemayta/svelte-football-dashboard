<script type="ts">
  import dateFormat from 'dateformat';;
  import { getMatches } from "../services/getMatches";
  export let code: string;
  export let currentMatchday: number;
  export let teamsByKey: TeamWithKey;
</script>
<style>
  .table td {
    vertical-align: middle;
  }
</style>

{#await getMatches(code, currentMatchday)}
  <p>Loading...</p>
{:then { matches }}
  <h5 class="title is-5 is-uppercase mt-4">Next Matches</h5>
  <table class="table is-fullwidth">
    {#each matches as { homeTeam, awayTeam, status, score, utcDate }}
      <tr>
        <td class="is-hidden-mobile">{dateFormat(utcDate, 'dd/mm - H:MM ')}</td>
        <td class="has-text-centered">{teamsByKey[homeTeam.id].shortName}</td>
        <td class="has-text-centered" style="width: 80px;">
          {#if status === 'FINISHED'}
            {score.fullTime.homeTeam}-{score.fullTime.awayTeam}
          {:else}
            vs
          {/if}
        </td>
        <td class="has-text-centered">{teamsByKey[awayTeam.id].shortName}</td>
      </tr>
    {/each}
  </table>
{:catch error}
  <p>Oopss something is not working!</p>
{/await}