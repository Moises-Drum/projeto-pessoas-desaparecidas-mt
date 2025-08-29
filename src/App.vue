<template>
    <router-view />
</template>

<script setup>
defineOptions({
    name: 'App',
})
</script>

<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100dvw;
    height: 100dvh;

    font-family: 'Inter';
}
</style>
