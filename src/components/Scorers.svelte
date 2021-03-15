<script lang="ts">
  import { getScorers } from "../services";

  export let code: string;
</script>

{#await getScorers(code)}
  <p>Loading...</p>
{:then { scorers }}
  <h5 class="title is-5 is-uppercase mt-5">Top Scorers</h5>
  <table class="table is-hoverable is-fullwidth">
    {#each scorers as { player, team, numberOfGoals }}
    <tr>
      <td>{player.name}</td>
      <td>{team.name}</td>
      <td>{numberOfGoals}</td>
    </tr>
    {/each}
  </table>
{:catch error}
  <p>Opss something is not working!</p>
{/await}