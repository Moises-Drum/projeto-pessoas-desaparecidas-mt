<template>
    <div class="w-full flex flex-col space-y-2">
        <div class="w-full flex items-center space-x-2 rounded-lg">
            <slot name="icon"></slot>

            <h2 class="text-[1.25rem]">{{ title }}</h2>
        </div>

        <div
            class="w-full flex flex-col p-6 space-y-6 bg-[#f9fafb] rounded-lg transition duration-300 ease-out cursor-pointer hover:shadow-lg"
            @click="handleClick"
        >
            <div class="w-full flex space-x-8">
                <div class="max-w-[8rem] w-full h-[2rem] flex">
                    <badge-default
                        v-bind="badgeIsFound"
                        position="static"
                        size="0.9rem"
                        left="0"
                        top="8px"
                    />
                </div>
            </div>

            <div class="flex flex-col">
                <h4>Histórico de Investigação</h4>

                <div class="flex items-center">
                    <dot
                        :size="50"
                        color="#3498db"
                    />

                    <span class="!text-[#344256]">
                        {{ ellipsis(ocurrencesData[0].informacao) }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BadgeDefault from '@/components/atoms/ui/BadgeDefault.vue'
import { computed } from 'vue'
import { Dot } from 'lucide-vue-next'
import { ellipsis } from '@/utils/formatters.js'

defineOptions({
    name: 'HistorySection',
})

const props = defineProps({
    title: {
        type: String,
        required: true,
    },

    isFound: {
        type: Boolean,
        default: false,
    },

    ocurrencesData: {
        type: Array,
        required: true,
    },
})

const emits = defineEmits(['handle-click'])

const badgeIsFound = computed(() => {
    if (props.isFound) {
        return {
            text: 'Localizado',
            bgColor: '#22c35d',
            color: 'white',
        }
    }
    return {
        text: 'Desaparecido',
        bgColor: '#ee5b2b',
        color: 'white',
    }
})

const handleClick = () => {
    emits('handle-click')
}
</script>
