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
            <h2>Original Work</h2>
            <div class="names">
                <div><a href="https://ks.fhs.sh/viewtopic.php?t=9907" target="_blank">Sisterhood</a> by Guest Poster</div>
            </div>
        </div>
        <div class="category">
            <h2>CG Art</h2>
            <div class="names">
                <div><a class="social" href="https://bsky.app/profile/zenmaruki.bsky.social" target="_blank"><BlueskyIcon /></a> ZenMaruki</div>
                <div><a class="social" href="https://x.com/Prince_G07" target="_blank"><TwitterIcon /></a> PrinceG07</div>
                <div><a class="social" href="https://likhos-art.somnovastudios.co/home" target="_blank"><WebsiteIcon /></a> Likhos</div>
                <div><a class="social" href="https://x.com/LegendarysoulII" target="_blank"><TwitterIcon /></a> legendarysoulII</div>
            </div>
        </div>
        <div class="category">
            <h2>Sprite Art</h2>
            <div class="names">
                <div><a class="social" href="https://x.com/dizzenzd"><TwitterIcon /></a> DIZZEN</div>
            </div>
        </div>
        <div class="category">
            <h2>Sprite Edits</h2>
            <div class="names">
                <div>nijo</div>
                <div>Alex FRD</div>
            </div>
        </div>
        <div class="category">
            <h2>Trailer / End Credits Song</h2>
            <div class="names">
                <div><a class="social" href="https://www.youtube.com/@TheCastillerian"><YoutubeIcon /></a> Castillerian</div>
            </div>
        </div>
        <div class="category">
            <h2>Beta Testers</h2>
            <div class="names">
                <div>Guest Poster</div>
                <div>Alex FRD</div>
                <div>ZenMaruki</div>
                <div>Melad</div>
            </div>
        </div>
        <div class="category">
            <h2>Special Thanks</h2>
            <div class="names">
                <div>Alex FRD</div>
                <div>Vladimir Hodakov</div>
                <div>Ikariya</div>
                <div>Grayest</div>
                <div>Fleeting Heartbeat Studios</div>
                <div>Four Leaf Studios</div>
                <div>The Katawa Shoujo Community</div>
            </div>
        </div>
        <div class="category">
            <h2>Directing, Engineering, Administration</h2>
            <div class="names">whizvox</div>
        </div>
    </div>
</template>

<style scoped>
.category {
    @apply flex flex-col lg:flex-row lg:justify-between;
}
.names {
    @apply flex flex-col text-end;
}
.social {
    @apply bg-back border-2 border-front rounded-full p-0.5;
}
</style>