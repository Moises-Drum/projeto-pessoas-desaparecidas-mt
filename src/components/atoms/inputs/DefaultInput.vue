<template>
    <div :class="`flex flex-col space-y-2 ${width}`">
        <label
            :for="idInput"
            class="text-[0.9rem] font-semibold text-[#8c97a6]"
            v-text="required ? `${label} *` : label"
        ></label>

        <input
            v-if="type === 'text'"
            :id="idInput"
            :type="type"
            :class="styleProps"
            :required="required"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <input
            v-if="type === 'date'"
            :id="idInput"
            :type="type"
            :class="styleProps"
            :required="required"
            :placeholder="placeholder"
            :value="modelValue"
            :min="dateMin"
            :max="dateMax"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <input
            v-if="type === 'time'"
            :id="idInput"
            :type="type"
            :class="styleProps"
            :required="required"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />

        <textarea
            v-if="type === 'textarea'"
            :id="idInput"
            :class="styleProps"
            :required="required"
            :placeholder="placeholder"
            :value="modelValue"
            rows="5"
            spellcheck="true"
            @input="$emit('update:modelValue', $event.target.value)"
        ></textarea>

        <input
            v-if="type === 'file'"
            :id="idInput"
            :type="type"
            :class="styleProps"
            :required="required"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

defineOptions({
    name: 'DefaultInput',
})

const props = defineProps({
    type: {
        type: String,
        default: 'text',
        validator: value => {
            if (!value && value.length === 0) {
                return true
            }

            const types = ['text', 'date', 'time', 'textarea', 'file']

            if (!types.includes(value)) {
                console.error('DefaultInput (type): Informe um tipo válido.')

                return false
            }

            return true
        },
    },

    label: {
        type: String,
        required: true,
    },

    required: {
        type: Boolean,
        default: false,
    },

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

    dateMin: String,
    dateMax: String,
})

defineEmits(['update:modelValue'])

const idInput = ref(`input-${crypto.randomUUID()}`)

const styleProps = computed(() => {
    if (props.customStyle) {
        return props.customStyle
    }

    return `w-full ${props.height} p-3 resize-none border border-[#dae0e7] rounded-md bg-background outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#24598F] transition duration-200 ease-out`
})
</script>

<style scoped lang="scss"></style>
