<template>
    <div class="mb-4">
        <h1>About</h1>
        <p>
            Sisterhood is an ambitious project to expand the narrative of the cult classic visual novel,
            <a href="https://www.katawa-shoujo.com/">Katawa Shoujo</a>, by adapting the epic-length work of fanfiction,
            <a href="https://ks.fhs.sh/viewtopic.php?t=9907">Sisterhood</a>, into a full-fledged visual novel. So if you
            haven't read Katawa Shoujo, then this story won't make any sense.
        </p>
        <p>
            Please read it if you haven't already! This project is actually a mod for 
            <a href="https://www.fhs.sh/projects/ksre">Katawa Shoujo: Re-Engineered</a>, a fan-made HD remaster that
            includes modding support, so I recommend playing through that for your first time. If you want to play the
            game in its original 4:3 aspect ratio, you can find it on <a href="https://www.katawa-shoujo.com/download">the
            official website</a>, <a href="https://store.steampowered.com/app/3068300/Katawa_Shoujo">Steam</a> and
            <a href="https://4leafstudios.itch.io/katawa-shoujo">itch.io</a>.
        </p>
        <h2 class="mt-4 mb-2">The Story</h2>
        <p>
            The story picks up after Hisao and Hanako's public intimate moment in the park—a moment to cement their
            newfound status as boyfriend and girlfriend. Lilly and Akira had previously been summoned to Scotland, and
            now must answer the request to move back in with their estranged family.
        </p>
        <p>
            Throughout the story, the perspective will shift between a few different people. Hisao, carefully
            treading the waters of his newfound condition and relationship. Hanako, learning to open up to people and
            find her own path in life. Akira, navigating family politics and climbing the corporate ladder. And Lilly,
            balancing her family by blood and her family by bond.
        </p>
        <p>
            On this journey, Hanako and Hisao learn to love each other, and Hanako and Lilly learn to understand each
            other.
        </p>
        <h2 class="mt-4">Gallery</h2>
        <div class="flex flex-col items-center">
            <figure>
                <img src="../assets/screenshot-akira.webp" />
                <figcaption>Akira gives Lilly some worldly advice.</figcaption>
            </figure>
            <figure>
                <img src="../assets/screenshot-field.webp" />
                <figcaption>Hisao and Hanako take a rural retreat.</figcaption>
            </figure>
            <figure>
                <img src="../assets/screenshot-takawa.webp" />
                <figcaption>Hisao meets with one of Yamaku's therapists.</figcaption>
            </figure>
            <figure>
                <img src="../assets/screenshot-bed.webp" />
                <figcaption>Hisao and Hanako spend an intimate night together.</figcaption>
            </figure>
            <figure>
                <img src="../assets/screenshot-hotel.webp" />
                <figcaption>Hisao and Hanako definitely don't do anything wierd.</figcaption>
            </figure>
            <figure>
                <img src="../assets/screenshot-caress.webp" />
                <figcaption>The bonds of sisterhood grow ever stronger.</figcaption>
            </figure>
        </div>
        <div class="bg-back-important border-2 border-front-important rounded-lg p-4 mt-4">
            <h2 class="text-front-important mb-2">Disclaimer</h2>
            <p>
                Sisterhood contains explicit material not suitable for all ages. You can disable this content in the
                options menu if you do not wish to experience it.
            </p>
        </div>
    </div>
</template>

<style scoped>
figure {
    @apply mt-4 flex flex-col items-center w-11/12;
}
figure img {
    @apply rounded-lg border-2 border-front;
}
figcaption {
    @apply bg-back-dark w-11/12 rounded-b-lg p-2;
}
</style>