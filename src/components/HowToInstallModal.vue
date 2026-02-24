<script setup>
import FancyButton from './FancyButton.vue';
import StaticModal from './StaticModal.vue';
import WindowsIcon from './icons/WindowsIcon.vue';
import MacIcon from './icons/MacIcon.vue';
import LinuxIcon from './icons/LinuxIcon.vue';
import AndroidIcon from './icons/AndroidIcon.vue';
import FlatpakIcon from './icons/FlatpakIcon.vue';
import ExternalIcon from './icons/ExternalIcon.vue';
import DownloadIcon from './icons/DownloadIcon.vue';
import ContextMenuIcon from './icons/ContextMenuIcon.vue';
</script>

<template>
    <StaticModal v-show="isH2IModalVisible" @close="closeH2IModal">
        <template #title>How to Install</template>
        <template #body>
            <div class="bg-back-important border-2 border-front-important rounded-lg p-4 mb-4">
                <h2 class="text-front-important mb-2">Notice on Updating</h2>
                <p>
                    If you are updating from an old version of Sisterhood to a newer version, it is highly recommended
                    to stay on the older version unless absolutely necessary. Attempting to load a save from an older
                    version with a newer version installed will result in the game unexpectedly quitting to the main
                    menu at some point.
                </p>
                <p>If you absolutely must update, you will need to restart from the beginning.</p>
            </div>
            <div class="flex flex-row gap-2 mb-4">
                <FancyButton href="#howto-pc">Windows, Mac, Linux</FancyButton>
                <FancyButton href="#howto-android">Android</FancyButton>
                <FancyButton href="#howto-flatpak">Flatpak</FancyButton>
            </div>
            <div id="howto-pc" class="mb-4">
                <h2>Windows <WindowsIcon class="embed" />, Mac <MacIcon class="embed" />, Linux <LinuxIcon class="embed" /></h2>
                <ol>
                    <li>Download the <span class="code">.rpa</span> file (<a href="https://github.com/whizvox/sisterhood-ksre/releases/latest/download/sisterhood.rpa">Direct Download Link <DownloadIcon class="embed" /></a>).</li>
                    <li>Download and install <a href="https://www.fhs.sh/projects/ksre" target="_blank">Katawa Shoujo: Re-Engineered <ExternalIcon class="embed" /></a>.</li>
                    <li>Move the <span class="code">sisterhood.rpa</span> file into the <span class="code">game</span> folder of your Katawa Shoujo: Re-Engineered installation.</li>
                    <li>The final result should look something like this: <img class="w-5/6" src="../assets/screenshot-install-windows.webp"></li>
                    <li>Run Katawa Shoujo: Re-Engineered.</li>
                    <li>Clicking on the Mods button should reveal Sisterhood as a menu option.</li>
                </ol>
            </div>
            <hr class="border-b-2 border-b-front mb-4">
            <div id="howto-android">
                <h2>Android <AndroidIcon class="embed" /></h2>
                <div class="bg-back-dark border-2 border-front-dark rounded-lg p-4 mb-4">
                  <span class="underline">Important to Note:</span> This process requires downloading a third-party app to access Android's otherwise protected file system and may not work on future versions.
                </div>
                <ol class="mb-1">
                    <li>Download the <span class="code">.rpa</span> file (<a href="https://github.com/whizvox/sisterhood-ksre/releases/latest/download/sisterhood.rpa">Direct Download Link <DownloadIcon class="embed" /></a>).</li>
                    <li>Download, install, and run <a href="https://www.fhs.sh/projects/ksre" target="_blank">Katawa Shoujo: Re-Engineered <ExternalIcon class="embed" /></a>. After running it once, close it.</li>
                    <li>Install <a href="https://play.google.com/store/apps/details?id=com.marc.files" target="_blank">Files (by Marc apps & software) <ExternalIcon class="embed" /></a>.</li>
                    <li>Open the newly-downloaded Files app, tap the context menu in the top right (<ContextMenuIcon class="embed" />), and tap "New window".</li>
                    <li>Open the app switcher, tap the Files icon at the top, and select "Split screen". You should see the Files app stick to the top half of the screen. Now tap the other Files window in the bottom half.</li>
                    <li>In one Files window, navigate to the <span class="code">Android/data/sh.fhs.ksre/files</span> folder and create a new folder called <span class="code">game</span>.</li>
                    <li>In the other Files window, navigate to the <span class="code">Download</span> folder.</li>
                    <li>Tap and hold the <span class="code">sisterhood.rpa</span> file in the second window. Then, tap and drag it into the <span class="code">game</span> folder in the first window.</li>
                    <li>Run Katawa Shoujo: Re-Engineered.</li>
                    <li>Tapping on the Mods button should reveal Sisterhood as a menu option.</li>
                </ol>
                <div class="flex flex-col items-center mb-4">
                  <p class="italic">If you have trouble following along with steps 4-8, here's a video guide:</p>
                  <iframe class="max-w-full" width="500px" height="350px" src="https://www.youtube.com/embed/JFVdjk6f3lg?si=bdzJAo3noM-qp_y7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <hr class="border-b-2 border-b-front mb-4">
            <div id="howto-flatpak" class="mb-4">
                <h2>Flatpak <FlatpakIcon class="embed" /></h2>
                <ol>
                    <li>Download the <span class="code">.rpa</span> file (<a href="https://github.com/whizvox/sisterhood-ksre/releases/latest/download/sisterhood.rpa">Direct Download Link <DownloadIcon class="embed" /></a>).</li>
                    <li>Download and install <a href="https://flathub.org/apps/sh.fhs.ksre" target="_blank">Katawa Shoujo: Re-Engineered <ExternalIcon class="embed" /></a> from Flathub.</li>
                    <li>Move the <span class="code">sisterhood.rpa</span> file into the <span class="code">~/.var/app/sh.fhs.ksre/mods</span> directory (you should probably run KS:RE once before doing this).</li>
                    <li>The final result should look something like this: <img class="w-5/6" src="../assets/screenshot-install-flatpak2.webp"></li>
                    <li>Run Katawa Shoujo: Re-Engineered.</li>
                    <li>Clicking on the Mods button should reveal Sisterhood as a menu option.</li>
                </ol>
            </div>
        </template>
    </StaticModal>
</template>
