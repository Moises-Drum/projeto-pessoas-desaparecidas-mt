<template>
    <teleport to="#app">
        <div
            class="fixed z-1000 flex justify-center items-center w-full h-full bg-[#00000090] backdrop-blur-sm"
        >
            <slot></slot>
        </div>
    </teleport>
</template>

<script setup>
defineOptions({
    name: 'ModalTemplate',
})
</script>
