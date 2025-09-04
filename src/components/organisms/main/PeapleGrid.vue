<template>
    <section
        class="w-[100%] flex flex-col items-center border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white"
    >
        <header class="w-full flex flex-col">
            <h3 class="text-[1.13rem]">Resultados da Busca</h3>

            <span class="text-[0.9rem] md:text-[0.75rem]">
                {{ totalPeaples }} pessoas encontradas
            </span>
        </header>

        <div
            class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center"
        >
            <template v-if="peapleList.length > 0">
                <peaple-card
                    v-for="peaple in peapleList"
                    :key="peaple.id"
                    :url-img="peaple.urlPhoto"
                    :name="peaple.name"
                    :age="peaple.age"
                    :location="peaple.localMissing"
                    :date-missing="peaple.dateMissing"
                    :is-found="peaple.isFound"
                    @handle-click-btn-card="handleClickCard(peaple.id)"
                />
            </template>

            <div
                v-else
                class="col-span-full flex flex-col items-center justify-center py-12 text-gray-500"
            >
                <search class="w-12 h-12 mb-4 text-gray-300" />
                <p class="text-lg font-medium">Nenhum resultado encontrado</p>
                <span class="text-sm mt-1">Verifique os termos ou filtros de busca</span>
            </div>
        </div>

        <footer
            v-show="Object.keys(paginationData).length > 0"
            class="w-full border-t border-[#24598f20] py-4"
        >
            <pagination-component
                :pagination-data="paginationData"
                @page-change="handleChangePage"
            />
        </footer>
    </section>
</template>

<script setup>
import PeapleCard from '@/components/molecules/card/PeapleCard.vue'
import { Search } from 'lucide-vue-next'
import PaginationComponent from '@/components/molecules/navigation/PaginationComponent.vue'
import { useRouter } from 'vue-router'
import { usePersonDataStore } from '@/pinia/usePersonDataStore.js'

defineOptions({
    name: 'PeapleGrid',
})

defineProps({
    peapleList: {
        type: Array,
        default: () => [],
    },

    totalPeaples: {
        type: Number,
        default: 0,
    },

    paginationData: {
        type: Object,
        required: true,
    },
})

const emits = defineEmits(['change-page'])

const router = useRouter()
const personDataStore = usePersonDataStore()

const handleChangePage = page => {
    emits('change-page', page)
}

const handleClickCard = id => {
    router.push({ name: 'person-detail' })

    personDataStore.setId(id)
}
</script>
