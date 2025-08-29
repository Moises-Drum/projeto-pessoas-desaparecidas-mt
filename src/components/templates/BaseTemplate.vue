<template>
    <the-header />

    <main class="w-[100%]">
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
