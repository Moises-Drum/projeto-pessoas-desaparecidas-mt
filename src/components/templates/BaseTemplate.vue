<template>
    <the-header />

    <main
        class="w-[100%] flex-1 flex justify-center mt-[5rem]"
        role="main"
    >
        <slot></slot>
    </main>

    <the-footer />
</template>

<script setup>
import TheFooter from '../organisms/footer/TheFooter.vue'
import TheHeader from '../organisms/header/TheHeader.vue'

defineOptions({
    name: 'BaseTemplate',
})
</script>
