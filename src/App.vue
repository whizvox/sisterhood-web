<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import About from "./components/About.vue";
import Downloads from "./components/Downloads.vue";
import Credits from "./components/Credits.vue";
</script>

<template>
  <header>
    <SiteHeader />
  </header>
  <main>
    <section id="about">
      <About />
    </section>
    <section id="download">
      <Downloads />
    </section>
    <section id="credits">
      <Credits />
    </section>
  </main>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: linear-gradient(white, transparent 50%);
  padding-bottom: 1rem;
  border-bottom: 0.5rem solid var(--color-text);
}
main {
  padding: 2rem;
}
</style>
