<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import HomeAbout from "./components/HomeAbout.vue";
import HomeDownloads from "./components/HomeDownloads.vue";
import HomeCredits from "./components/HomeCredits.vue";
</script>

<template>
  <div class="container max-w-4xl m-auto">
    <header class="flex flex-col justify-center">
      <SiteHeader />
    </header>
    <main class="p-2 lg:border-4 lg:border-front lg:rounded-lg">
      <section id="about">
        <HomeAbout />
      </section>
      <section id="download">
        <HomeDownloads />
      </section>
      <section id="credits">
        <HomeCredits />
      </section>
    </main>
  </div>
</template>
