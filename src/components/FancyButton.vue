<script setup>
defineProps(["href", "onClick"]);
</script>

<template>
    <a :href="href" @click="onClick" class="fancybtn"><slot></slot></a>
</template>

<style scoped>
a {
    @apply no-underline bg-back-dark p-2 rounded-lg hover:bg-front hover:text-back-light cursor-pointer;
}
</style>