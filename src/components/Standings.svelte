<script lang="ts">
  import { getStandings } from "../services";
  export let code: string;
</script>
<style>
  .table td, .table th {
    border: none;
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
        <th>
          <abbr title="Played">Pld</abbr>
        </th>
        <th class="is-hidden-mobile">
          <abbr title="Played">Won</abbr>
        </th>
        <th class="is-hidden-mobile">
          <abbr title="Played">Draw</abbr>
        </th>
        <th class="is-hidden-mobile">
          <abbr title="Played">Lost</abbr>
        </th>
        <th class="is-hidden-mobile">
          <abbr title="Played">GF</abbr>
        </th>
        <th class="is-hidden-mobile">
          <abbr title="Played">GA</abbr>
        </th>
        <th class="is-hidden-mobile">
          <abbr title="Played">GD</abbr>
        </th>
        <th>
          <abbr title="Points">Pts</abbr>
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
          <td>
            <p>{team.name}</p>
          </td>
          <td>{playedGames}</td>
          <td class="is-hidden-mobile">{won}</td>
          <td class="is-hidden-mobile">{draw}</td>
          <td class="is-hidden-mobile">{lost}</td>
          <td class="is-hidden-mobile">{goalsFor}</td>
          <td class="is-hidden-mobile">{goalsAgainst}</td>
          <td class="is-hidden-mobile">{goalDifference}</td>
          <td>{points}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:catch error}
  <p>Oopss something is not working</p>
{/await}
