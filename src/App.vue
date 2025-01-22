<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import About from "./components/About.vue";
import Downloads from "./components/Downloads.vue";
import Credits from "./components/Credits.vue";
</script>

<template>
  <div class="container max-w-4xl m-auto">
    <header class="flex flex-col justify-center">
      <SiteHeader />
    </header>
    <main class="p-2 lg:border-4 lg:border-front lg:rounded-lg">
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
  </div>
</template>
