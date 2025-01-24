<script setup>
import FancyButton from './FancyButton.vue';
import StaticModal from './StaticModal.vue';
import WindowsIcon from './icons/WindowsIcon.vue';
import MacIcon from './icons/MacIcon.vue';
import LinuxIcon from './icons/LinuxIcon.vue';
import AndroidIcon from './icons/AndroidIcon.vue';
</script>

<template>
    <StaticModal v-show="isH2IModalVisible" @close="closeH2IModal">
        <template #title>How to Install</template>
        <template #body>
            <div class="flex flex-row gap-2 mb-4">
                <FancyButton href="#howto-pc">Windows, Mac OSX, Linux</FancyButton>
                <FancyButton href="#howto-android">Android</FancyButton>
            </div>
            <div id="howto-pc" class="mb-4">
                <h2>Windows <WindowsIcon />, Mac <MacIcon />, Linux <LinuxIcon /></h2>
                <ol>
                    <li>Download the <span class="code">.rpa</span> file.</li>
                    <li>Download and install <a href="https://www.fhs.sh/projects/ksre">Katawa Shoujo: Re-Engineered</a>.</li>
                    <li>Move the <span class="code">sisterhood.rpa</span> file into the <span class="code">game</span> folder of your Katawa Shoujo: Re-Engineered installation.</li>
                    <li>The final result should look something like this: <img class="w-5/6" src="../assets/screenshot-install-windows.webp"></li>
                    <li>Start Katawa Shoujo: Re-Engineered.</li>
                    <li>Clicking on the Mods button should reveal Sisterhood as a menu option.</li>
                </ol>
            </div>
            <hr class="border-b-2 border-b-front mb-4">
            <div id="howto-android">
                <h2>Android <AndroidIcon /></h2>
                <ol>
                    <li>Download the <span class="code">.rpa</span> file.</li>
                    <li>Download and install <a href="https://www.fhs.sh/projects/ksre">Katawa Shoujo: Re-Engineered</a>.</li>
                    <li>Open the File Manager app on your device.</li>
                    <li>Navigate to the <span class="code">Android/data/sh.fhs.ksre/files</span> folder. You may need to run Katawa Shoujo: Re-Engineered at least once if you don't see this folder.</li>
                    <li>Create a new folder called <span class="code">game</span>.</li>
                    <li>Move the <span class="code">sisterhood.rpa</span> file into the <span class="code">game</span> folder.</li>
                    <li>The final result should look something like this: <img class="w-5/6" src="../assets/screenshot-install-android.webp"> (Note: the file size may differ)</li>
                    <li>Open Katawa Shoujo: Re-Engineered.</li>
                    <li>Tapping on the Mods button should reveal Sisterhood as a menu option.</li>
                </ol>
            </div>
        </template>
    </StaticModal>
</template>