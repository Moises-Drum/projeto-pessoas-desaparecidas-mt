<template>
    <modal-template :open-modal="openModal">
        <form
            class="max-w-[700px] max-h-[800px] w-[95%] md:w-full h-[90%] md:h-full border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white overflow-auto"
            @submit.prevent="$emit('handle-submit')"
        >
            <header class="relative w-full flex flex-col">
                <h1 class="text-[1.25rem] md:text-[1.35rem]">{{ title }}</h1>
                <h2 class="!text-[#8c97a6]"><slot name="subtitle"></slot></h2>

                <button
                    type="button"
                    class="absolute right-0"
                    @click="handleCloseModal"
                >
                    <x
                        size="20"
                        class="!text-[#8c97a6] hover:!text-[#344256] transition duration-150 ease-linear"
                    />
                </button>
            </header>

            <div class="w-full flex-1 flex flex-col">
                <slot></slot>
            </div>

            <footer class="w-full flex flex-col">
                <div class="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                    <btn-default
                        :text="btnTextCancel"
                        width="w-full"
                        bg-color="#bcbcbc"
                        custom-text="!text-[#344256] font-semibold"
                        @handle-click="handleCloseModal"
                    />

                    <btn-default
                        type="submit"
                        :text="btnTextSend"
                        width="w-full"
                        custom-text="!text-white font-semibold"
                        :loading="sendLoading"
                    />
                </div>
            </footer>
        </form>
    </modal-template>
</template>

<script setup>
import ModalTemplate from '@/components/templates/modals/ModalTemplate.vue'
import BtnDefault from '@/components/atoms/buttons/btnDefault.vue'
import { X } from 'lucide-vue-next'

defineOptions({
    name: 'FormDefaultModal',
})

defineProps({
    title: String,
    btnTextSend: {
        type: String,
        default: 'Enviar Informações',
    },
    btnTextCancel: {
        type: String,
        default: 'Cancelar',
    },
    openModal: {
        type: Boolean,
        default: false,
    },
    sendLoading: {
        type: Boolean,
        default: false,
    },
})

const emits = defineEmits(['handle-close', 'handle-submit', 'open-modal'])

const handleCloseModal = () => {
    emits('handle-close')
}
</script>
