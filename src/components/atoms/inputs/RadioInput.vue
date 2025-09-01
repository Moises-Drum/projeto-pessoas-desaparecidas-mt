<template>
    <div class="flex items-center space-x-2">
        <div class="relative flex items-center justify-center">
            <input
                :id="idInput"
                type="radio"
                :name="name"
                :value="modelValue"
                :checked="checked"
                class="appearance-none text-white border-2 border-gray-300 rounded-sm checked:bg-[#24598f] checked:border-[#24598f] bg-gray-100 outline-none transition duration-200 ease-out focus:ring-2 focus:ring-offset-1 focus:ring-[#24598f]"
                :style="sizeInput"
                :disabled="disabled"
                @input="$emit('update:modelValue', $event.target.value)"
            />

            <check
                v-if="!!modelValue"
                class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none"
                :size="size - 2"
            />
        </div>

        <label
            :for="idInput"
            :class="labelSize"
        >
            {{ label }}
        </label>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { Check } from 'lucide-vue-next'

defineOptions({
    name: 'RadioInput',
})

const props = defineProps({
    modelValue: String,

    name: {
        type: String,
        required: true,
    },

    label: {
        type: String,
        default: '',
    },

    labelSize: {
        type: String,
        default: 'text-[0.9rem]',
    },

    size: {
        type: [String, Number],
        default: 16,
    },

    checked: { type: Boolean, default: false },

    disabled: {
        type: Boolean,
        default: false,
    },
})

const emits = defineEmits(['update:modelValue', 'hash'])

const sizeInput = computed(() => {
    return {
        width: `${props.size}px`,
        height: `${props.size}px`,
    }
})

const idInput = ref(`input-${crypto.randomUUID()}`)

onMounted(() => {
    emits('hash', idInput.value)
})

const teste = value => console.log(value)
</script>
