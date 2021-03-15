<script lang="ts">
  import { getStandings } from "../services";
  export let code: string;
</script>
{#await getStandings(code)}
  <p>Loading...</p>
{:then { standings }}
  <table class="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>
          <abbr title="Position">Pos</abbr>
        </th>
        <th colspan={2}>Team</th>
        <th>
          <abbr title="Played">Pld</abbr>
        </th>
        <th>
          <abbr title="Played">Won</abbr>
        </th>
        <th>
          <abbr title="Played">Draw</abbr>
        </th>
        <th>
          <abbr title="Played">Lost</abbr>
        </th>
        <th>
          <abbr title="Played">GF</abbr>
        </th>
        <th>
          <abbr title="Played">GA</abbr>
        </th>
        <th>
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
          <th>{position}</th>
          <td style="width: 24px;">
            <p class="image is-24x24">
              <img src={team.crestUrl} alt={team.name} />
            </p>
          </td>
          <td>
            <p>{team.name}</p>
          </td>
          <td>{playedGames}</td>
          <td>{won}</td>
          <td>{draw}</td>
          <td>{lost}</td>
          <td>{goalsFor}</td>
          <td>{goalsAgainst}</td>
          <td>{goalDifference}</td>
          <td>{points}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{:catch error}
  <p>Oopss something is not working</p>
{/await}
