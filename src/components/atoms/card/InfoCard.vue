<template>
    <div :class="styleProps">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
    name: 'InfoCard',
})

const props = defineProps({
    spaceY: {
        type: Number,
        default: 2,
    },

    customStyle: String,
})

const styleProps = computed(() => {
    if (props.customStyle) {
        return props.customStyle
    }

    return `space-y-${props.spaceY} w-full p-4 flex flex-col bg-[#e2ebf3] rounded-lg`
})
</script>
