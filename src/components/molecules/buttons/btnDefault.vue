<template>
    <button
        :type="type"
        :class="`relative flex items-center justify-center space-x-4 ${styleProps}`"
        @click="teste"
    >
        <slot name="icon"></slot>

        <span :class="`${customText}`">{{ text }}</span>
    </button>
</template>

<script setup>
import { computed } from 'vue'

defineOptions({
    name: 'BtnDefault',
})

const props = defineProps({
    text: String,

    customText: String,

    type: {
        type: String,
        default: 'button',
    },

    width: {
        type: String,
        default: 'w-[30%]',
    },

    height: {
        type: String,
        default: 'h-10',
    },

    bgColor: {
        type: String,
        default: '#24598F',
    },

    customStyle: String,
})

const styleProps = computed(() => {
    if (props.customStyle) {
        return props.customStyle
    }

    return `${props.height} ${props.width} bg-[${props.bgColor}] px-3 py-3 rounded-lg outline-offset-2 transition duration-200 ease-out  will-change-transform backface-hidden hover:scale-[1.01] active:translate-y-[2px] active:scale-[0.99]`
})

const teste = () => {
    console.log('dfdfds')
}
</script>
