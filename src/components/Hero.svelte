<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let color: string;
</script>
<style>
  section {
    width: 100%;
  }
</style>
<section class="hero {color}">
  <div class="hero-body">
    <p class="title">{title}</p>
    <p class="subtitle">{subtitle}</p>
  </div>
</section>
