<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import FootballSection from "./components/FootballSection.svelte";
import Lazy from "./components/Lazy.svelte";
</script>
<style>
  :global(body) {
		overflow: hidden;
	}
</style>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
</svelte:head>

<Header />

<FootballSection competitionId="2019" competitionCode="SA" theme="is-info" />
<Lazy height={400}>
  <FootballSection competitionId="2021" competitionCode="PL" theme="is-success" />
</Lazy>
<Lazy height={400}>
  <FootballSection competitionId="2014" competitionCode="PD" theme="is-warning" />
</Lazy>
<Lazy height={400}>
  <FootballSection competitionId="2002" competitionCode="BL1" theme="is-danger" />
</Lazy>

<Lazy height={400}>
  <Footer author="Gabriel Mayta" />
</Lazy>