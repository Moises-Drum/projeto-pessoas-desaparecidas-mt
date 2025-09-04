<template>
    <span
        class="absolute z-10 px-2 py-1 rounded-full font-semibold shadow-lg"
        :style="customStyles"
    >
        {{ text.toUpperCase() }}
    </span>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
    name: 'BadgeDefault',
})

const props = defineProps({
    text: {
        type: String,
        required: true,
    },

    size: {
        type: String,
        default: '1rem',
    },

    color: String,

    bgColor: { type: String, default: 'bg-white' },

    left: String,

    right: String,

    top: String,

    bottom: String,
})

const customStyles = computed(() => ({
    color: props.color,
    fontSize: `${props.size} !important`,
    backgroundColor: props.bgColor,
    left: props.left,
    right: props.right,
    top: props.top,
    bottom: props.bottom,
}))
</script>

<style scoped lang="scss"></style>
