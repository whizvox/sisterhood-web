<script setup>
import FancyButton from "./FancyButton.vue";
import CloseIcon from "./icons/CloseIcon.vue";
</script>

<template>
    <div class="fixed top-0 left-0 bg-back-modal flex justify-center items-center w-full h-full">
        <div class="bg-back shadow-lg flex flex-col overflow-y-scroll w-full lg:max-w-4xl h-full">
            <header class="p-4 flex relative border-b-front-light border-b-2 text-4xl bg-back-light">
                <slot name="title">
                    Modal title
                </slot>
                <button type="button" class="absolute top-0 right-0 border-none p-5 cursor-pointer bg-transparent" @click="close"><CloseIcon /></button>
            </header>
            <section class="relative py-5 px-2">
                <slot name="body">
                    Modal body
                </slot>
            </section>
            <footer class="p-4 flex flex-row justify-end">
                 <FancyButton :onClick="close">Close</FancyButton>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "StaticModal",
    methods: {
        close() {
            this.$emit("close");
        }
    }
}
</script>