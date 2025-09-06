<template>
    <fieldset class="w-full space-y-4">
        <legend class="flex items-center space-x-2">
            <slot name="icon"></slot>

            <span class="!text-[#344256] text-[1.1rem]">{{ title }}</span>
        </legend>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <slot></slot>
        </div>
    </fieldset>
</template>

<script setup>
defineOptions({
    name: 'FieldsetSection',
})

defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>
