<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import FootballSection from "./components/FootballSection.svelte";
  import Lazy from "./components/Lazy.svelte";
</script>

<Header />

<FootballSection competitionId={2019} competitionCode="SA" theme="is-link" />
<Lazy height={400}>
  <FootballSection competitionId={2014} competitionCode="PD" theme="is-success" />
</Lazy>
<Lazy height={400}>
  <FootballSection competitionId={2021} competitionCode="PD" theme="is-info" />
</Lazy>
<Lazy height={400}>
  <FootballSection competitionId={2002} competitionCode="BL1" theme="is-danger" />
</Lazy>


<Footer author="Gabriel Mayta" />