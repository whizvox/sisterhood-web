<template>
    <div class="top">
        <img src="../assets/sh-logo-quill.png">
        <h1>The Sisterhood Project</h1>
    </div>
    <nav>
        <a href="#about">About</a>
        <a href="#download">Download</a>
        <a href="#credits">Credits</a>
    </nav>
</template>

<style scoped>
.top img {
    object-fit: contain;
    height: 40vh;
}
.top h1 {
    font-size: 52px;
}
nav {
    display: flex;
}
nav a {
    margin: 0 10px;
    text-decoration: none;
    background-color: var(--color-background-mute);
    padding: 0.6em;
    border-radius: 10px;
}
nav a:hover {
    background-color: var(--color-background-soft);
}
</style>