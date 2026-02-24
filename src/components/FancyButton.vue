<script setup>
const { href, onClick, openNewTab = true } = defineProps(["href", "onClick", "openNewTab"]);
</script>

<template>
    <a :href="href" @click="onClick" class="fancybtn" :target="(href && !href.startsWith('#') && openNewTab) ? '_blank' : null"><slot></slot></a>
</template>

<style scoped>
a {
    @apply no-underline bg-back-dark p-2 rounded-lg hover:bg-front hover:text-back-light cursor-pointer;
}
</style>
