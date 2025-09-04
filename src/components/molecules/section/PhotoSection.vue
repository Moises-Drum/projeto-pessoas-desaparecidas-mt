<template>
    <div class="flex flex-col items-center w-full md:mt-16 space-y-4">
        <div class="relative w-full h-auto">
            <img
                :src="urlImage"
                class="w-full max-h-[400px] h-auto object-fill rounded-lg"
                alt="Foto de"
                loading="lazy"
                decoding="async"
            />

            <badge-default
                v-bind="badgeIsFound"
                size="0.9rem"
                right="5px"
                top="8px"
            />
        </div>

        <btn-default
            bg-color="#ee5b2b"
            text="FORNECER INFORMAÇÕES"
            custom-text="!text-white font-semibold"
            :size="btnTextSize"
            width="w-full"
            @handle-click="handleClick"
        >
            <template #icon>
                <triangle-alert
                    color="white"
                    :size="btnTextSize + 2"
                />
            </template>
        </btn-default>

        <info-card>
            <div class="flex items-center space-x-2">
                <phone
                    size="16"
                    color="#24598f"
                />
                <h3>Contato de Emergência</h3>
            </div>

            <p class="text-[0.9rem] !text-[#344256]">
                Ligue
                <strong>190</strong>
                em caso de avistamento urgente Ou entre em contato:
                <strong>(65) 3648-1234</strong>
            </p>
        </info-card>
    </div>
</template>

<script setup>
import BadgeDefault from '@/components/atoms/ui/BadgeDefault.vue'
import { computed, ref } from 'vue'
import BtnDefault from '@/components/atoms/buttons/btnDefault.vue'
import { TriangleAlert, Phone } from 'lucide-vue-next'
import InfoCard from '@/components/atoms/card/InfoCard.vue'

defineOptions({
    name: 'PhotoSection',
})

const props = defineProps({
    urlImage: {
        type: String,
        required: true,
        validator: url => {
            try {
                new URL(url)

                return true
            } catch (error) {
                console.error(
                    'PhotoSection (urlImage): Valor fornecido deve ser um link. Mais detalhes: ' +
                        error
                )

                return false
            }
        },
    },
    isFound: {
        type: Boolean,
        default: false,
    },
})
const emits = defineEmits(['handle-click'])

const btnTextSize = ref(14)

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
