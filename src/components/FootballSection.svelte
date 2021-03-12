<script lang="ts">
  import { getCompetition } from "../services/getCompetition";
  import Hero from "./Hero.svelte";
  import Matches from "./Matches.svelte";
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
  </div>
{:catch error}
  <p>Opss something is not working!</p>
{/await}