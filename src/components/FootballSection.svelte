<script lang="ts">
  import { getCompetition } from "../services";
  import Hero from "./Hero.svelte";
  import Matches from "./Matches.svelte";
  import Scorers from "./Scorers.svelte";
  import Standings from "./Standings.svelte";
  import Teams from "./Teams.svelte";

  export let competitionId: number;
</script>

{#await getCompetition(competitionId)}
  <p>Loading</p>
{:then { name, area, code, currentSeason: { currentMatchday } }}
  <Hero title={name} subtitle={area.name} color="is-link" />
  <div class="container">
    <Teams {code} />
    <Matches {code} {currentMatchday} />
    <Standings {code} />
    <Scorers {code} />
  </div>
{:catch error}
  <p>Opss something is not working!</p>
{/await}