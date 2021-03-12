<script lang="ts">
  export let title: string;
  export let subtitle: string;
  export let color: string;
</script>
<section class="hero {color}">
  <div class="hero-body">
    <p class="title">{title}</p>
    <p class="subtitle">{subtitle}</p>
  </div>
</section>
