<template>
    <div
        class="z-10 flex justify-center items-center px-3 py-1 rounded-full shadow-lg"
        :style="customStyles"
    >
        <span
            :class="`font-semibold`"
            :style="`color: ${color} !important`"
        >
            {{ text.toUpperCase() }}
        </span>
    </div>
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

    color: {
        type: String,
        default: '#fff',
    },

    bgColor: { type: String, default: 'bg-white' },

    left: String,

    right: String,

    top: String,

    bottom: String,

    position: {
        type: String,
        default: 'absolute',
    },
})

const customStyles = computed(() => ({
    position: props.position,
    fontSize: `${props.size} !important`,
    backgroundColor: props.bgColor,
    left: props.left,
    right: props.right,
    top: props.top,
    bottom: props.bottom,
}))
</script>

<style scoped lang="scss"></style>
