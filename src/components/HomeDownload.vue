<script setup>
import HowToInstallModal from "./HowToInstallModal.vue";
import FancyButton from "./FancyButton.vue";
import WindowsIcon from "./icons/WindowsIcon.vue";
import MacIcon from "./icons/MacIcon.vue";
import LinuxIcon from "./icons/LinuxIcon.vue";
import AndroidIcon from "./icons/AndroidIcon.vue";
import FlatpakIcon from "./icons/FlatpakIcon.vue";
import CodeIcon from "./icons/CodeIcon.vue";

// function toUTC(date) {
//     let result = new Date(date);
//     result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
//     return result;
// }
// function countDays(start, end) {
//     return Math.round((toUTC(end) - toUTC(start)) / (24 * 60 * 60 * 1000));
// }
</script>

<template>
    <h1>Download</h1>
    <div class="bg-back-light p-4 border-front border-2 rounded-lg mb-4">
        <div class="version">
            <div class="flex justify-between">
                <h2 class="inline-block">All-in-One Installer</h2>
                <span class="italic text-front-light">Updated Feb 17, 2025</span>
            </div>
            <div class="platform">
                <div class="systems">Windows <WindowsIcon /> (v1.1)</div>
                <div class="links">
                    <FancyButton href="https://u5jk2gbh3va0ygyt.public.blob.vercel-storage.com/Installer%20Versions/SisterhoodInstaller-1.1.zip">Download .exe</FancyButton>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-back-light p-4 border-front border-2 rounded-lg">
        <div class="version">
            <div class="flex justify-between">
                <h2 class="inline-block">Act 1 (v1.0.3)</h2>
                <span class="italic text-front-light">Updated Sep 15, 2025</span>
            </div>
            <div class="platform">
                <div class="systems">Windows <WindowsIcon />, Mac OSX <MacIcon />, Linux <LinuxIcon />, Android <AndroidIcon />, Flatpak <FlatpakIcon /></div>
                <div class="links">
                    <FancyButton :onClick="showH2IModal">How to Install</FancyButton>
                    <FancyButton href="https://github.com/whizvox/sisterhood-ksre/releases/latest/download/sisterhood.rpa">Download .rpa</FancyButton>
                </div>
            </div>
            <div>
                <h3 class="font-bold">Changelog</h3>
                <ul class="list-disc">
                    <li>Replace deprecated behavior to work with Ren'Py 8.4.1 and Katawa Shoujo: Re-Engineered 2.0.3</li>
                </ul>
            </div>
            <div class="mt-4 flex justify-between gap-4">
                <FancyButton href="https://github.com/whizvox/sisterhood-ksre/releases">Download previous versions</FancyButton>
                <FancyButton href="https://codeberg.org/whizvox/sisterhood-ksre"><CodeIcon /> View source</FancyButton>
            </div>
        </div>
    </div>
    <HowToInstallModal v-show="isH2IModalVisible" @close="closeH2IModal" />
</template>

<script>
export default {
    name: "HowToInstallModal",
    data() {
        return {
            isH2IModalVisible: false
        };
    },
    methods: {
        showH2IModal() {
            this.isH2IModalVisible = true;
        },
        closeH2IModal() {
            this.isH2IModalVisible = false;
        }
    }
}
</script>

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