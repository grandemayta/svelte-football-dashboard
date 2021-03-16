<script lang="ts">
  import { getCompetition } from "../services";
  import Hero from "./Hero.svelte";
  import Matches from "./Matches.svelte";
  import Scorers from "./Scorers.svelte";
  import Standings from "./Standings.svelte";
  import Teams from "./Teams.svelte";
  export let competitionId: number;
</script>
<style>
  @media screen and (max-width: 768px) {
    .container {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>

{#await getCompetition(competitionId)}
  <p>Loading...</p>
{:then { name, area, code, currentSeason: { currentMatchday } }}
  <Hero title={name} subtitle={area.name} color="is-link" />
  <div class="container mt-5">
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <Teams {code} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-desktop">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <Standings {code} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-desktop">
      <div class="column is-7">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <Matches {code} {currentMatchday} />
            </div>
          </div>
        </div>
      </div>
      <div class="column is-5">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <Scorers {code} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{:catch error}
  <p>Opss something is not working!</p>
{/await}