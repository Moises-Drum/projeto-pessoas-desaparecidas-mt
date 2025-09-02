<template>
    <base-template>
        <div class="max-w-[1216px] w-[100%] flex flex-col py-4 px-4 xl:px-0">
            <div class="grid grid-cols-1 lg:grid-cols-[0.85fr_3fr] gap-6 justify-items-center">
                <search-form
                    class="lg:col-span-2"
                    @search-value="handleSearchValue"
                />

                <peaple-filter
                    class="row-span-2"
                    @selected-status="handleFilterStatus"
                    @selected-age-group="handleFilterAge"
                    @selected-sex="handleFilterSex"
                />

                <peaple-grid
                    v-if="!pageLoading"
                    class="row-span-3"
                    :peaple-list="peapleList"
                    :total-peaples="totalPeaples"
                    :pagination-data="paginationData"
                    @change-page="changePage"
                />

                <div
                    v-else
                    class="w-full min-h-[20rem] flex justify-center items-center border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white"
                >
                    <loader-circle
                        class="animate-spin"
                        color="#24598f"
                        size="40"
                    />
                </div>
            </div>
        </div>
    </base-template>
</template>

<script setup>
import SearchForm from '../organisms/forms/SearchForm.vue'
import BaseTemplate from '../templates/BaseTemplate.vue'
import PeapleGrid from '@/components/organisms/main/PeapleGrid.vue'
import PeapleFilter from '@/components/organisms/forms/PeapleFilter.vue'
import { onMounted, ref, watch } from 'vue'
import { pessoaResourceService } from '@/services/pessoaResourceService.js'
import { LoaderCircle } from 'lucide-vue-next'

defineOptions({
    name: 'HomePage',
})

const peapleList = ref([])
const totalPeaples = ref(0)
const pageLoading = ref(false)
const paginationData = ref({})
const currentPage = ref(0)
const filterStatus = ref(null)
const filterAge = ref({})
const filterSex = ref(null)
const searchValue = ref(null)

onMounted(async () => {
    await getPeaples()
})

const getPeaples = async () => {
    pageLoading.value = true

    try {
        const response = await pessoaResourceService.searchFilter({
            params: {
                pagina: currentPage.value ?? 0,
                porPagina: 9,
                nome: searchValue.value ?? '',
                status: filterStatus.value?.toUpperCase() ?? '',
                sexo: filterSex.value?.toUpperCase() ?? '',
                faixaIdadeInicial: filterAge.value?.initial ?? '',
                faixaIdadeFinal: filterAge.value?.final ?? '',
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
            isFound: !!peaple.ultimaOcorrencia.dataLocalizacao,
        }))

        paginationData.value = {
            pageNumber: response.data.pageable.pageNumber,
            pageSize: response.data.pageable.pageSize,
            totalPages: response.data.totalPages,
            totalElements: response.data.totalElements,
            first: response.data.first,
            last: response.data.last,
            numberOfElements: response.data.numberOfElements,
        }
    } catch (error) {
        console.log(error)

        pageLoading.value = false
    } finally {
        pageLoading.value = false
    }
}

const changePage = pageNumber => {
    currentPage.value = pageNumber
}

const handleFilterStatus = value => {
    filterStatus.value = value && value !== 'todos' ? value : null
}

const handleFilterAge = value => {
    if (value === 'todos') {
        filterAge.value = { initial: '', final: '' }

        return
    }

    if (value !== '40+') {
        const ageArray = value.split('-')

        filterAge.value = { initial: ageArray[0], final: ageArray[1] }

        return
    }

    filterAge.value = { initial: value.replace('+', ''), final: '' }
}

const handleFilterSex = value => {
    filterSex.value = value && value !== 'todos' ? value : null
}

const handleSearchValue = value => {
    searchValue.value = value ?? null
}

watch([currentPage, filterStatus, filterSex, searchValue], async () => {
    await getPeaples()
})

watch(
    filterAge,
    async () => {
        await getPeaples()
    },
    { deep: true }
)
</script>
