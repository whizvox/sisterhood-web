<script setup>
import HowToInstallModal from "./HowToInstallModal.vue";
import FancyButton from "./FancyButton.vue";
import WindowsIcon from "./icons/WindowsIcon.vue";
import MacIcon from "./icons/MacIcon.vue";
import LinuxIcon from "./icons/LinuxIcon.vue";
import AndroidIcon from "./icons/AndroidIcon.vue";

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
    <div class="bg-back-light p-4 border-front border-2 rounded-lg">
        <div class="version">
            <h2>Act 1 (1.0)</h2>
            <div class="platform">
                <div class="systems">Windows Installer <WindowsIcon /></div>
                <div class="links">
                    <FancyButton href="https://u5jk2gbh3va0ygyt.public.blob.vercel-storage.com/Installer%20Versions/SisterhoodInstaller-1.0.zip">Download .exe</FancyButton>
                </div>
            </div>
            <hr>
            <div class="platform">
                <div class="systems">Windows <WindowsIcon />, Mac OSX <MacIcon />, Linux <LinuxIcon />, Android <AndroidIcon /></div>
                <div class="links">
                    <FancyButton :onClick="showH2IModal">How to Install</FancyButton>
                    <FancyButton href="https://github.com/whizvox/sisterhood-ksre/releases/latest/download/sisterhood.rpa">Download .rpa</FancyButton>
                </div>
            </div>
            <!-- Available February 14, 2025! That's in {{ countDays(new Date(), new Date("2025-02-14T20:00:00.000+00:00")) }} days! -->
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