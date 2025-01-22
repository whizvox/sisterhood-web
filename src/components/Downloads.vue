<script setup>
import IconWindows from "./icons/IconWindows.vue";
import IconApple from "./icons/IconApple.vue";
import IconLinux from "./icons/IconLinux.vue";
import IconAndroid from "./icons/IconAndroid.vue";
</script>

<template>
    <h1>Download</h1>
    <div class="downloads">
        <div class="version">
            <h2>Act 1 (1.0)</h2>
            <div class="version-platform">
                <div class="platform-list">Windows Installer <IconWindows /></div>
                <div class="download-links">
                    <a href="#">Download .exe</a>
                </div>
            </div>
            <div class="version-platform">
                <div class="platform-list">Windows <IconWindows />, Mac OSX <IconApple />, Linux <IconLinux />, Android <IconAndroid /></div>
                <div class="download-links">
                    <a href="#">How to Install</a>
                    <a href="#">Download .zip</a>
                    <a href="#">Download .rpa</a>
                </div>
            </div>
        </div>
    </div>
    <div class="legacy-downloads">

    </div>
</template>

<style scoped>
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
</style>