<script setup>
import FancyButton from "./components/FancyButton.vue";
import SiteHeader from "./components/SiteHeader.vue";
import HomeTrailer from "./components/HomeTrailer.vue";
import HomeAbout from "./components/HomeAbout.vue";
import HomeDownload from "./components/HomeDownload.vue";
import HomeCredits from "./components/HomeCredits.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
  <div class="container max-w-4xl m-auto">
    <header class="flex flex-col justify-center">
      <SiteHeader />
    </header>
    <main class="p-2 border-4 border-front rounded-lg flex flex-col gap-4 bg-back-main">
      <nav class="flex justify-center gap-4 pb-2">
        <FancyButton href="#trailer">Trailer</FancyButton>
        <FancyButton href="#about">About</FancyButton>
        <FancyButton href="#download">Download</FancyButton>
        <FancyButton href="#credits">Credits</FancyButton>
      </nav>
      <section id="trailer">
        <HomeTrailer />
      </section>
      <section id="about">
        <HomeAbout />
      </section>
      <section id="download">
        <HomeDownload />
      </section>
      <section id="credits">
        <HomeCredits />
      </section>
    </main>
    <footer>
      <SiteFooter />
    </footer>
  </div>
</template>
