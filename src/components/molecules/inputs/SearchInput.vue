<template>
    <div :class="`relative flex items-center ${width}`">
        <search
            :color="iconColor"
            :size="iconSize"
            :class="`absolute z-10 ${iconPosition}`"
        />

        <input
            :class="styleProps"
            type="text"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
import { computed } from 'vue'

defineOptions({
    name: 'SearchInput',
})

const props = defineProps({
    modelValue: String,

    placeholder: String,

    width: {
        type: String,
        default: 'w-[30%]',
    },

    height: {
        type: String,
        default: 'h-10',
    },

    customStyle: String,

    iconSize: {
        type: Number,
        default: 16,
    },

    iconColor: {
        type: String,
        default: '#8c97a6',
    },

    iconPosition: {
        type: String,
        default: 'left-3',
    },
})

const emits = defineEmits(['update:modelValue'])

const styleProps = computed(() => {
    if (props.customStyle) {
        return props.customStyle
    }

    return `w-full ${props.height} px-3 pl-10 pr-4 py-3 border border-[#dae0e7] rounded-lg bg-background outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#24598F] transition duration-200 ease-out`
})
</script>
