<template>
    <modal-template :open-modal="openModal">
        <div
            class="flex flex-col max-w-[700px] max-h-[85dvh] w-[95%] md:w-full border border-[#dae0e7] rounded-lg shadow-sm space-y-6 bg-white"
        >
            <header class="relative w-full flex flex-col py-4 px-6">
                <h1 class="text-[1.25rem] md:text-[1.35rem]">{{ title }}</h1>

                <button
                    type="button"
                    class="absolute right-6"
                    @click="handleCloseModal"
                >
                    <x
                        size="20"
                        class="!text-[#8c97a6] hover:!text-[#344256] transition duration-150 ease-linear"
                    />
                </button>
            </header>

            <div class="w-full flex flex-col items-center px-6 overflow-y-auto">
                <slot></slot>
            </div>

            <footer class="w-full flex flex-col items-center"><slot name="footer"></slot></footer>
        </div>
    </modal-template>
</template>

<script setup>
import ModalTemplate from '@/components/templates/modals/ModalTemplate.vue'
import { X } from 'lucide-vue-next'

defineOptions({
    name: 'DefaultModal',
})

defineProps({
    openModal: {
        type: Boolean,
        default: false,
    },

    title: String,
})

const emits = defineEmits(['handle-close'])

const handleCloseModal = () => {
    emits('handle-close')
}
</script>

<style scoped lang="scss"></style>
