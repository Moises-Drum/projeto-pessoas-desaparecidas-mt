<template>
    <modal-template>
        <div
            class="max-w-[700px] max-h-[800px] w-[95%] md:w-full h-[90%] md:h-full border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white"
        >
            <header class="w-full flex flex-col">
                <h1 class="text-[1.25rem] md:text-[1.35rem]">{{ title }}</h1>
                <h2 class="!text-[#8c97a6]"><slot name="subtitle"></slot></h2>
            </header>

            <div class="w-full flex-1 flex flex-col">
                <slot></slot>
            </div>

            <footer class="w-full flex flex-col">
                <div class="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                    <btn-default
                        :text="btnTextCancel"
                        width="w-full"
                        bg-color="#bcbcbc"
                        custom-text="!text-[#344256] font-semibold"
                    />

                    <btn-default
                        :text="btnTextSend"
                        width="w-full"
                        custom-text="!text-white font-semibold"
                    />
                </div>
            </footer>
        </div>
    </modal-template>
</template>

<script setup>
import ModalTemplate from '@/components/templates/modals/ModalTemplate.vue'
import BtnDefault from '@/components/atoms/buttons/btnDefault.vue'

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
})
</script>
