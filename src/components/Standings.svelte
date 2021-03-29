<script lang="ts">
  import { getStandings } from "../services";
  export let code: string;
  export let teamsByKey: TeamWithKey;
</script>
<style>
  .table td, .table th {
    border: none;
    vertical-align: middle;
  }
</style>
{#await getStandings(code)}
  <p>Loading...</p>
{:then { standings }}
  <table class="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th style="width: 53px;">
          <abbr title="Position">Pos</abbr>
        </th>
        <th colspan={2}>Team</th>
        <th class="has-text-centered">
          <abbr title="Played">Pld</abbr>
        </th>
        <th class="is-hidden-mobile has-text-centered">
          <abbr title="Played">Won</abbr>
        </th>
        <th class="is-hidden-mobile has-text-centered">
          <abbr title="Played">Draw</abbr>
        </th>
        <th class="is-hidden-mobile has-text-centered">
          <abbr title="Played">Lost</abbr>
        </th>
        <th class="is-hidden-mobile has-text-centered">
          <abbr title="Played">GF</abbr>
        </th>
        <th class="is-hidden-mobile has-text-centered">
          <abbr title="Played">GA</abbr>
        </th>
        <th class="is-hidden-mobile has-text-centered">
          <abbr title="Played">GD</abbr>
        </th>
        <th class="has-text-centered">
          <abbr title="Points has-text-centered">Pts</abbr>
        </th>
      </tr>
    </thead>
    <tbody>
      {#each standings as { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points, team }}
        <tr>
          <th class="has-text-centered">{position}</th>
          <td style="width: 48px;">
            <p class="image is-24x24">
              <img src={team.crestUrl} alt={team.name} />
            </p>
          </td>
          <td class="pl-0">
            <p>{teamsByKey[team.id].shortName}</p>
          </td>
          <td class="has-text-centered">{playedGames}</td>
          <td class="is-hidden-mobile has-text-centered">{won}</td>
          <td class="is-hidden-mobile has-text-centered">{draw}</td>
          <td class="is-hidden-mobile has-text-centered">{lost}</td>
          <td class="is-hidden-mobile has-text-centered">{goalsFor}</td>
          <td class="is-hidden-mobile has-text-centered">{goalsAgainst}</td>
          <td class="is-hidden-mobile has-text-centered">{goalDifference}</td>
          <td class="has-text-centered">{points}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:catch error}
  <p>Oopss something is not working</p>
{/await}
