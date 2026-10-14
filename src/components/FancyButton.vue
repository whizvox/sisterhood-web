<script setup>
const { href, onClick, openNewTab = true, disabled = false } = defineProps(["href", "onClick", "openNewTab", "disabled"]);
</script>

<template>
    <a :href="href" @click="onClick" class="fancybtn" :class="disabled ? 'disabled' : ''" :target="(href && !href.startsWith('#') && openNewTab) ? '_blank' : null"><slot></slot></a>
</template>

<style scoped>
.fancybtn {
    @apply no-underline bg-back-dark p-2 rounded-lg hover:bg-front hover:text-back-light cursor-pointer;
}
.fancybtn.disabled {
    @apply hover:bg-back-dark hover:text-inherit cursor-auto;
}
</style>
