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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100dvw;
    height: 100dvh;

    font-family: 'Inter';
    background-color: #f9fafb;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #344256;
        font-weight: 500;
    }

    span,
    p,
    a {
        color: #8c97a6;
        transition: all 0.2s ease-out;
    }

    a:hover {
        color: #24598f;
    }

    strong {
        font-weight: bold;
    }
}
</style>
