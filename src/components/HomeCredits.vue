<script setup>
import BlueskyIcon from './icons/BlueskyIcon.vue';
import TwitterIcon from './icons/TwitterIcon.vue';
import WebsiteIcon from './icons/WebsiteIcon.vue';
import YoutubeIcon from './icons/YoutubeIcon.vue';
</script>

<template>
    <h1>Credits</h1>
    <div class="bg-back-light border-2 border-front p-4 rounded-lg flex flex-col gap-2">
        <div class="category">
            <h3>Original Work</h3>
            <div class="names">
                <div><a href="https://ks.fhs.sh/viewtopic.php?t=9907" target="_blank">Sisterhood</a> by Guest Poster</div>
            </div>
        </div>
        <div class="category">
            <h3>CG Art</h3>
            <div class="names">
                <div><a class="social" href="https://bsky.app/profile/zenmaruki.bsky.social" target="_blank"><BlueskyIcon /></a> ZenMaruki</div>
                <div><a class="social" href="https://x.com/Prince_G07" target="_blank"><TwitterIcon /></a> PrinceG07</div>
                <div><a class="social" href="https://likhos-art.somnovastudios.co" target="_blank"><WebsiteIcon /></a> Likhos</div>
                <div><a class="social" href="https://x.com/LegendarysoulII" target="_blank"><TwitterIcon /></a> legendarysoulII</div>
            </div>
        </div>
        <div class="category">
            <h3>Sprite Art</h3>
            <div class="names">
                <div><a class="social" href="https://x.com/dizzenzd" target="_blank"><TwitterIcon /></a> DIZZEN</div>
            </div>
        </div>
        <div class="category">
            <h3>Additional Art</h3>
            <div class="names">
                <div><a class="social" href="https://x.com/niomesan" target="_blank"><TwitterIcon /></a> nijo</div>
            </div>
        </div>
        <div class="category">
            <h3>Sprite Edits</h3>
            <div class="names">
                <div>nijo</div>
                <div>Celestial Caesar</div>
            </div>
        </div>
        <div class="category">
            <h3>Trailer / End Credits Song</h3>
            <div class="names">
                <div><a class="social" href="https://www.youtube.com/@TheCastillerian" target="_blank"><YoutubeIcon /></a> Castillerian</div>
            </div>
        </div>
        <div class="category">
            <h3>Beta Testers</h3>
            <div class="names">
                <div>Guest Poster</div>
                <div>Celestial Caesar</div>
                <div>ZenMaruki</div>
                <div>Melad</div>
            </div>
        </div>
        <div class="category">
            <h3>Special Thanks</h3>
            <div class="names">
                <div>Celestial Caesar</div>
                <div>Vladimir Hodakov</div>
                <div>Ikariya</div>
                <div>Grayest</div>
                <div>Fleeting Heartbeat Studios</div>
                <div>Four Leaf Studios</div>
                <div>The Katawa Shoujo Community</div>
            </div>
        </div>
        <div class="category">
            <h3>Directing, Engineering, Administration</h3>
            <div class="names">whizvox</div>
        </div>
    </div>
</template>

<style scoped>
.category {
    @apply flex flex-col md:flex-row md:justify-between;
}
.names {
    @apply flex flex-col text-end;
}
.social {
    @apply bg-back border-2 border-front rounded-full p-0.5;
}
</style>