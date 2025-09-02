<template>
    <button
        :type="type"
        :class="`relative flex items-center justify-center ${styleProps}`"
        :style="
            !disabled
                ? `background-color: ${props.bgColor}`
                : `background-color: ${props.bgColor}; opacity: 0.5`
        "
        :disabled="disabled"
        @click="$emit('handleClick')"
    >
        <template v-if="!loading">
            <slot name="icon"></slot>

            <span :class="`${customText}`">{{ text }}</span>

            <slot name="icon-right"></slot>
        </template>

        <loader-circle
            v-else
            color="white"
            class="animate-spin"
        />
    </button>
</template>

<script setup>
import { LoaderCircle } from 'lucide-vue-next'
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

    spaceX: {
        type: String,
        default: 'space-x-4',
    },

    height: {
        type: String,
        default: 'h-10',
    },

    bgColor: {
        type: String,
        default: '#24598F',
    },

    disabled: {
        type: Boolean,
        default: false,
    },

    loading: {
        type: Boolean,
        default: false,
    },

    customStyle: String,
})

defineEmits(['handleClick'])

const styleProps = computed(() => {
    if (props.customStyle) {
        return props.customStyle
    }

    if (props.disabled) {
        return `${props.height} ${props.width} ${props.spaceX} px-3 py-3 rounded-lg outline-offset-2 !cursor-default`
    }

    return `${props.height} ${props.width} ${props.spaceX} px-3 py-3 rounded-lg outline-offset-2 transition duration-200 ease-out  will-change-transform backface-hidden hover:scale-[1.01] active:translate-y-[2px] active:scale-[0.99]`
})
</script>
