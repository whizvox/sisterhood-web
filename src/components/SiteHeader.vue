<template>
    <div class="flex flex-col items-center">
        <img src="../assets/sh-logo-quill.png" class="w-96">
        <h1 class="text-center">The Sisterhood Project</h1>
    </div>
    <nav class="flex justify-center gap-2 border-b-4 border-front pb-4 lg:border-none">
        <a href="#about">About</a>
        <a href="#download">Download</a>
        <a href="#credits">Credits</a>
    </nav>
</template>

<style scoped>
    nav > a {
        @apply no-underline bg-back-dark p-2 rounded-lg hover:bg-back-light;
    }
</style>