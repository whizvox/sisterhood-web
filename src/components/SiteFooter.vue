<script setup>
import FancyButton from './FancyButton.vue';
import BugIcon from './icons/BugIcon.vue';
import CodeIcon from './icons/CodeIcon.vue';
import DiscordIcon from './icons/DiscordIcon.vue';
import KoFiIcon from './icons/KoFiIcon.vue';
</script>

<template>
    <div class=" flex flex-row flex-wrap justify-center py-8 gap-4">
        <FancyButton href="#"><BugIcon /> Report an issue</FancyButton>
        <FancyButton href="#"><CodeIcon /> View source</FancyButton>
        <FancyButton href="https://discord.gg/xMVbax7D"><DiscordIcon /> Join the Discord</FancyButton>
        <FancyButton href="https://ko-fi.com/M4M512AHJB"><KoFiIcon /> Buy me a coffee</FancyButton>
    </div>
    <div class="flex flex-row justify-center mb-4">Copyright &copy; 2025 whizvox</div>
</template>