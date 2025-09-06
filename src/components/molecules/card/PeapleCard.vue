<template>
    <div
        class="flex flex-col items-center justify-center w-full p-3 space-y-4 border border-[#24598f20] bg-[#f9fafb] rounded-lg shadow hover:shadow-lg"
    >
        <header class="relative w-full h-[11rem]">
            <img
                :src="urlPhoto"
                class="w-full h-full object-fill rounded-lg shadow"
                :alt="`Foto de ${name}`"
                loading="lazy"
                decoding="async"
                @error="urlPhotoError"
            />

            <badge-default
                v-bind="badgeIsFound"
                size="0.8rem"
                right="5px"
                top="8px"
            />
        </header>

        <div class="w-full space-y-2">
            <h3 class="text-center">{{ name }}</h3>

            <div class="space-y-1">
                <div class="flex space-x-2 items-center">
                    <calendar
                        size="16"
                        color="#24598f"
                        aria-hidden="true"
                    />

                    <span class="text-[0.9rem]">{{ age }} anos</span>
                </div>

                <div class="flex space-x-2 items-center">
                    <map-pin
                        size="16"
                        color="#24598f"
                        aria-hidden="true"
                    />

                    <span class="text-[0.9rem]">{{ location }}</span>
                </div>

                <div class="flex space-x-2 items-center">
                    <lucide-clock7
                        size="16"
                        color="#24598f"
                        aria-hidden="true"
                    />

                    <span class="text-[0.9rem]">Desapareceu em {{ formatDate(dateMissing) }}</span>
                </div>
            </div>
        </div>

        <footer class="w-full">
            <btn-default
                text="Ver Detalhes"
                custom-text="!text-white"
                width="w-full"
                @handle-click="handleClick"
            />
        </footer>
    </div>
</template>

<script setup>
import BtnDefault from '@/components/atoms/buttons/btnDefault.vue'
import { Calendar, MapPin, LucideClock7 } from 'lucide-vue-next'
import BadgeDefault from '@/components/atoms/ui/BadgeDefault.vue'
import { formatDate } from '@/utils/formatters.js'
import { computed, ref } from 'vue'

defineOptions({
    name: 'PeapleCard',
})

const props = defineProps({
    urlImg: String,

    isFound: {
        type: Boolean,
        default: false,
    },

    name: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    location: {
        type: String,
        required: true,
    },

    dateMissing: {
        type: String,
        required: true,
    },
})

const emits = defineEmits(['handle-click-btn-card'])

const urlPhoto = ref(
    props?.urlImg ??
        'https://www.reabilitybauru.com.br/wp-content/uploads/2017/01/perfil-300x300.png'
)

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
    emits('handle-click-btn-card')

    console.log(urlPhoto.value)
}

const urlPhotoError = () => {
    urlPhoto.value =
        'https://www.reabilitybauru.com.br/wp-content/uploads/2017/01/perfil-300x300.png'
}
</script>

<style scoped lang="scss"></style>
