<script setup lang="ts">
import FancyButton from './FancyButton.vue';

</script>

<template>
    <div class="flex flex-col items-center mb-4">
        <img src="../assets/sh-logo-quill.webp" class="w-96">
        <h1 class="text-center">The Sisterhood Project</h1>
    </div>
    <nav class="flex justify-center gap-2 pb-4">
        <FancyButton href="#trailer">Trailer</FancyButton>
        <FancyButton href="#about">About</FancyButton>
        <FancyButton href="#download">Download</FancyButton>
        <FancyButton href="#credits">Credits</FancyButton>
    </nav>
</template>
