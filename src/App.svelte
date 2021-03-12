<script lang="ts">
  import Header from "./components/Header.svelte";
  import Hero from "./components/Hero.svelte";
  import Footer from "./components/Footer.svelte";
  import Teams from "./components/Teams.svelte";
import Matches from "./components/Matches.svelte";
</script>

<Header />

<Hero title="Serie A" subtitle="2020/2021" color="is-link" />
<div class="container">
  <Teams competition="SA" />
  <Matches competition="SA" />
</div>

<Footer author="Gabriel Mayta" />