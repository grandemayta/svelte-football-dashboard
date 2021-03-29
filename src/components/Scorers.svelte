<script lang="ts">
  import { getScorers } from "../services";
  export let code: string;
  export let teamsByKey: TeamWithKey;
</script>
<style>
  .table td {
    vertical-align: middle;
  }
</style>

{#await getScorers(code) then { scorers }}
  <h5 class="title is-5 is-uppercase mt-4">Top Scorers</h5>
  <table class="table is-fullwidth">
    {#each scorers as { player, team, numberOfGoals }}
    <tr>
      <td>{player.name}</td>
      <td style="width: 24px;">
        <p class="image is-24x24">
          <img src={teamsByKey[team.id].crestUrl} alt={team.name} />
        </p>
      </td>
      <td class="pl-0">
        {teamsByKey[team.id].shortName}
      </td>
      <td>{numberOfGoals}</td>
    </tr>
    {/each}
  </table>
{/await}