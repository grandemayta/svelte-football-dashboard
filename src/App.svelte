<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import FootballSection from "./components/FootballSection.svelte";
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

<FootballSection competitionId={2019} competitionCode="SA" theme="is-link" />

<Footer author="Gabriel Mayta" />