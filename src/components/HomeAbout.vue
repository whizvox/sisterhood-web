<template>
    <div class="mb-4">
        <h1>About</h1>
        <p>
            Sisterhood is an ambitious project to expand the narrative of the cult classic visual novel,
            <a href="https://www.katawa-shoujo.com/">Katawa Shoujo</a>. To be more specific, it is an adaptation of the
            epic-length work of fanfiction, <a href="https://ks.fhs.sh/viewtopic.php?t=9907">Sisterhood</a>, which acts as
            a sequel to one of the game's endings. So if you haven't read Katawa Shoujo, then this story won't make much
            sense.
        </p>
        <p>
            Please read it if you haven't already! This project is actually a mod for 
            <a href="https://www.fhs.sh/projects/ksre">Katawa Shoujo: Re-Engineered</a>, a fan-made HD remaster that
            includes built-in modding support, so I recommend going with that approach. If you want to play the original
            game in its original 4:3 aspect ratio, you can find it on <a href="https://www.katawa-shoujo.com/download">the
            official website</a>, <a href="https://store.steampowered.com/app/3068300/Katawa_Shoujo">Steam</a> and
            <a href="https://4leafstudios.itch.io/katawa-shoujo">itch.io</a>.
        </p>
        <h2 class="mt-4 mb-2">The Story</h2>
        <p>
            The story takes place at Yamaku High School, a school located in modern-day Japan which supports disabled
            students through some of the most important years of their lives.
        </p>
        <p>
            Throughout the narrative, the perspective will shift between a few different people. Hisao, a kind-hearted boy
            that has been recently diagnosed with a heart condition, navigates the turbulent waters of a newfound romantic
            relationship. Hanako, a reclusive girl afflicted with severe burn scars on her right side, learns to overcome
            her anxiety, open up to people, and discover her path in life. Lilly, a blind-since-birth motherly figure, deals
            with balancing two great forces in her life: her family back in Scotland, and her newfound family at Yamaku.
            Akira, the hardworking yet playful older sister of Lilly, accepts an important career promotion at the cost of
            being interwoven into family politics.
        </p>
        <p>
            Throughout all of this, Hanako and Hisao learn to love each other, and Hanako and Lilly learn to understand each
            other.
        </p>
        <h2 class="mt-4">Gallery</h2>
        <div class="flex flex-col items-center">
            <figure>
                <img src="../assets/screenshot-akira.webp" />
                <figcaption>Akira giving Lilly some worldly advice.</figcaption>
            </figure>
            <figure>
                <img src="../assets/screenshot-field.webp" />
                <figcaption>Hisao and Hanako on vacation.</figcaption>
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