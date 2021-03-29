<script lang="ts">
  import { getCompetitionAndTeams } from "../services";
  import Hero from "./Hero.svelte";
  import Matches from "./Matches.svelte";
  import Scorers from "./Scorers.svelte";
  import Standings from "./Standings.svelte";
  import Teams from "./Teams.svelte";
  export let competitionId: string;
  export let competitionCode: string;
  export let theme: string;
</script>
<style>
  @media screen and (max-width: 768px) {
    .container {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>

{#await getCompetitionAndTeams(competitionId, competitionCode)}
  <div style="height: 800px"></div>
{:then { name, area, code, teams, teamsByKey, currentSeason }}
  <Hero title={name} subtitle={area.name} {theme} />
  <div class="container mt-5 mb-5">
    <div class="columns">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <Teams {teams} />
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
              <Standings {code} {teamsByKey} />
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
             <Matches {code} currentMatchday={currentSeason.currentMatchday} {teamsByKey} />
            </div>
          </div>
        </div>
      </div>
      <div class="column is-5">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <Scorers {code} {teamsByKey} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{:catch error}
  <p>We reached the limit usage <strong>(10req/sec)</strong></p>
{/await}