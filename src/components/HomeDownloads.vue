<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <h1>Download</h1>
    <div class="bg-back-light p-4 border-front border-2 rounded-lg">
        <div class="version">
            <h2>Act 1 (1.0)</h2>
            <div class="platform">
                <div class="systems">Windows Installer <Icon icon="ri:windows-fill" /></div>
                <div class="links">
                    <a href="#">Download .exe</a>
                </div>
            </div>
            <hr>
            <div class="platform">
                <div class="systems">Windows <Icon icon="ri:windows-fill" />, Mac OSX <Icon icon="ic:baseline-apple" />, Linux <Icon icon="mdi:linux" />, Android <Icon icon="basil:android-solid" /></div>
                <div class="links">
                    <a href="#">How to Install</a>
                    <a href="#">Download .rpa</a>
                </div>
            </div>
        </div>
    </div>
    <div class="legacy-downloads">

    </div>
</template>

<style scoped>
hr {
    @apply border-b-2 border-b-front-light;
}
.version {
    @apply flex flex-col gap-2;
}
.platform {
    @apply flex flex-row justify-between items-center;
}
.platform svg {
    @apply w-4 h-4 inline-block align-baseline;
}
.systems {
    @apply md:flex-grow w-1/2;
}
.links {
    @apply flex flex-col justify-end gap-2 sm:flex-row;
}
.links a {
    @apply no-underline bg-back-dark p-2 rounded-lg hover:bg-front hover:text-back-light;
}
</style>

<!-- <style scoped>
.downloads {
    background-color: var(--color-background-soft);
    padding: 1rem;
    border: 0.3rem solid var(--color-text);
    border-radius: 20px;
}
.downloads h2 {
    margin-bottom: 0.5rem;
}
.downloads svg {
    width: 1em;
    height: 1em;
}
.version {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.version-platform {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.platform-list {
    flex-grow: 1;
}
.download-links {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 0.5rem;
}
.download-links a {
    text-decoration: none;
    background-color: var(--color-background-mute);
    padding: 0.8rem;
    border-radius: 20px;
}
.download-links a:hover {
    background-color: white;
}
</style> -->