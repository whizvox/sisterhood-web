<script setup lang="ts">
import FancyButton from './FancyButton.vue';
import BugIcon from './icons/BugIcon.vue';
import DiscordIcon from './icons/DiscordIcon.vue';
import KoFiIcon from './icons/KoFiIcon.vue';
</script>

<template>
    <div class="flex flex-col items-center mb-4">
        <img src="../assets/sh-logo-quill.webp" class="w-96">
        <h1 class="text-center">The Sisterhood Project</h1>
    </div>
    <div class="flex flex-row flex-wrap justify-center gap-2 mb-4">
        <FancyButton href="https://discord.gg/GZFSPDNcRE"><DiscordIcon /> Join the Discord / <BugIcon /> Report a bug</FancyButton>
        <FancyButton href="https://ko-fi.com/M4M512AHJB"><KoFiIcon /> Buy me a coffee</FancyButton>
    </div>
</template>
