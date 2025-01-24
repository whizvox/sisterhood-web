<script setup>
import HowToInstallModal from "./HowToInstallModal.vue";
// import FancyButton from "./FancyButton.vue";
// import WindowsIcon from "./icons/WindowsIcon.vue";
// import MacIcon from "./icons/MacIcon.vue";
// import LinuxIcon from "./icons/LinuxIcon.vue";
// import AndroidIcon from "./icons/AndroidIcon.vue";
</script>

<template>
    <h1>Download</h1>
    <div class="bg-back-light p-4 border-front border-2 rounded-lg">
        <div class="version">
            <h2>Act 1</h2>
            <!-- <div class="platform">
                <div class="systems">Windows Installer <WindowsIcon /></div>
                <div class="links">
                    <FancyButton href="#">Download .exe</FancyButton>
                </div>
            </div>
            <hr>
            <div class="platform">
                <div class="systems">Windows <WindowsIcon />, Mac OSX <MacIcon />, Linux <LinuxIcon />, Android <AndroidIcon /></div>
                <div class="links">
                    <FancyButton :onClick="showH2IModal">How to Install</FancyButton>
                    <FancyButton href="#">Download .rpa</FancyButton>
                </div>
            </div> -->
            Coming February 14, 2025!
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