<script setup>
import HowToInstallModal from "./HowToInstallModal.vue";
import FancyButton from "./FancyButton.vue";
import WindowsIcon from "./icons/WindowsIcon.vue";
import MacIcon from "./icons/MacIcon.vue";
import LinuxIcon from "./icons/LinuxIcon.vue";
import AndroidIcon from "./icons/AndroidIcon.vue";
import FlatpakIcon from "./icons/FlatpakIcon.vue";
import CodeIcon from "./icons/CodeIcon.vue";
import DownloadIcon from "./icons/DownloadIcon.vue";
import ExternalIcon from "./icons/ExternalIcon.vue";
</script>

<template>
    <h1>Download</h1>
    <div class="bg-back-light p-4 border-front border-2 rounded-lg mb-4">
        <div class="version">
            <div class="flex justify-between">
                <h2 class="inline-block">Act 2 (v2.0.1)</h2>
                <span class="italic text-front-light">Updated Oct 28, 2026</span>
            </div>
            <div class="platform">
                <div class="systems">Windows <WindowsIcon />, Mac OSX <MacIcon />, Linux <LinuxIcon />, Android <AndroidIcon />, Flatpak <FlatpakIcon /></div>
                <div class="links">
                    <FancyButton :onClick="showH2IModal" class="text-center">How to Install</FancyButton>
                    <FancyButton href="https://github.com/whizvox/sisterhood-ksre/releases/latest/download/sisterhood.rpa" :openNewTab="false"><DownloadIcon /> Download .rpa</FancyButton>
                </div>
            </div>
            <div>
                <h3 class="font-bold">Changelog</h3>
                <ul class="list-disc">
                    <li>Rework Shared Soak event in chapter 34</li>
                    <li>Fix missing sprite in Chapter 31</li>
                    <li>Fix a few CGs being permanently locked or missing in Memories</li>
                    <li>Fix being unable to read scene descriptions in Chapter Select on mobile devices (viewing a replay requires tapping twice)</li>
                    <li>Fix dialogue going off-screen on mobile devices in Chapter 24</li>
                    <li>Fix misattributed line of dialogue in Chapter 33</li>
                    <li>Fix a few grammar mistakes and clarify some dialogue in Chapters 5, 20, 28, and 33</li>
                </ul>
            </div>
            <div class="mt-4 flex justify-between gap-4 text-center">
                <FancyButton href="https://github.com/whizvox/sisterhood-ksre/releases"><ExternalIcon /> Download previous versions</FancyButton>
                <FancyButton href="https://codeberg.org/whizvox/sisterhood-ksre"><CodeIcon /> View source</FancyButton>
            </div>
        </div>
    </div>
    <div class="bg-back-light p-4 border-front border-2 rounded-lg mb-4">
        <div class="version">
            <div class="flex justify-between">
                <h2 class="inline-block">All-in-One Installer</h2>
                <span class="italic text-front-light">Updated Feb 17, 2025</span>
            </div>
            <div class="platform">
                <div class="systems">Windows <WindowsIcon /> (v1.1)</div>
                <div class="links">
                    <FancyButton href="https://www.dropbox.com/scl/fi/a8nvaxwnhnsdfq52ryiio/SisterhoodInstaller-1.1.zip?rlkey=36vp9hxzsjyo0ya760eske3mp&st=3gpqrv55&e=1&dl=0" :openNewTab="false"><DownloadIcon /> Download .exe</FancyButton>
                </div>
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
