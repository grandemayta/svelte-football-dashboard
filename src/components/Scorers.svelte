<script lang="ts">
  import { getScorers } from "../services";

  export let code: string;
</script>

{#await getScorers(code)}
  <p>Loading...</p>
{:then { scorers }}
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