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

    font-family:
        'Inter',
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        sans-serif;
    background-color: #f9fafb;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    legend {
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

    label {
        color: #344256;
    }

    input {
        color: #485360;
    }

    button {
        cursor: pointer;
        border: none;
    }
}
</style>
