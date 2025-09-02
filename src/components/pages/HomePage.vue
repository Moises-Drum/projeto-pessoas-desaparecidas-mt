<template>
    <base-template>
        <div class="max-w-[1216px] w-[100%] flex flex-col py-4 px-4 xl:px-0">
            <div
                v-if="!pageLoading"
                class="grid grid-cols-1 lg:grid-cols-[0.85fr_3fr] gap-6 justify-items-center"
            >
                <search-form class="lg:col-span-2" />

                <peaple-filter class="row-span-2" />

                <peaple-grid
                    class="row-span-3"
                    :peaple-list="peapleList"
                    :total-peaples="totalPeaples"
                />
            </div>

            <div
                v-else
                class="w-full h-full flex justify-center items-center"
            >
                <loader-circle
                    class="animate-spin"
                    color="#24598f"
                    size="40"
                />
            </div>
        </div>
    </base-template>
</template>

<script setup>
import SearchForm from '../organisms/forms/SearchForm.vue'
import BaseTemplate from '../templates/BaseTemplate.vue'
import PeapleGrid from '@/components/organisms/main/PeapleGrid.vue'
import PeapleFilter from '@/components/organisms/forms/PeapleFilter.vue'
import { onMounted, ref } from 'vue'
import { pessoaResourceService } from '@/services/pessoaResourceService.js'
import { LoaderCircle } from 'lucide-vue-next'

defineOptions({
    name: 'HomePage',
})

const peapleList = ref([])
const totalPeaples = ref(0)
const pageLoading = ref(false)

onMounted(async () => {
    await getPeaples()
})

const getPeaples = async () => {
    pageLoading.value = true

    try {
        const response = await pessoaResourceService.searchFilter({
            params: {
                porPagina: 9,
            },
        })

        totalPeaples.value = response.data.totalElements

        peapleList.value = response.data.content.map(peaple => ({
            id: peaple.id,
            name: peaple.nome,
            age: peaple.idade,
            sex: peaple.sexo,
            urlPhoto: peaple.urlFoto,
            dateMissing: peaple.ultimaOcorrencia.dtDesaparecimento,
            localMissing: peaple.ultimaOcorrencia.localDesaparecimentoConcat,
            isFound: peaple.ultimaOcorrencia.encontradoVivo,
        }))
    } catch (error) {
        console.log(error)

        pageLoading.value = false
    } finally {
        pageLoading.value = false
    }
}
</script>
