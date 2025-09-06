<template>
    <base-template>
        <div class="max-w-[1216px] w-full h-full pt-4 px-4 xl:px-0">
            <breadcrumb-component :items="broadcrumbItems">
                <template #icon>
                    <house
                        size="14"
                        color="#8c97a6"
                    />
                </template>
            </breadcrumb-component>

            <person-profile-grid
                v-if="!pageLoading && personData && ocurrencesData"
                :person-data="personData"
                :ocurrences-data="ocurrencesData"
                @update-data-page="updateDataPage"
            />

            <div
                v-else
                class="w-full h-[56dvh] flex justify-center items-center mt-2 border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white"
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
import BaseTemplate from '@/components/templates/pages/BaseTemplate.vue'
import { usePersonDataStore } from '@/pinia/usePersonDataStore.js'
import BreadcrumbComponent from '@/components/organisms/navigation/BreadcrumbComponent.vue'
import { onMounted, ref } from 'vue'
import { House, LoaderCircle } from 'lucide-vue-next'
import PersonProfileGrid from '@/components/organisms/main/PersonProfileGrid.vue'
import { pessoaResourceService } from '@/services/pessoaResourceService.js'
import { ocorrenciaResourceService } from '@/services/ocorrenciaResourceService.js'

defineOptions({
    name: 'PersonDetailPage',
})

const broadcrumbItems = ref([{ label: 'Consultar', to: '/' }, { label: 'Pessoa' }])
const personData = ref(null)
const ocurrencesData = ref(null)
const pageLoading = ref(false)

onMounted(async () => {
    const personDataStore = usePersonDataStore()

    await getPerson(personDataStore.id)

    const ocoId = personData.value.ultimaOcorrencia.ocoId || null

    await getOcurrences(ocoId)
})

const getPerson = async id => {
    pageLoading.value = true

    if (!id) throw new Error('Id da pessoa não informado.')

    try {
        const response = await pessoaResourceService.byId(id)
        personData.value = response.data
    } catch (error) {
        console.error(error)

        pageLoading.value = false
    } finally {
        pageLoading.value = false
    }
}

const getOcurrences = async ocoId => {
    if (!ocoId) throw new Error('ocoId não informado.')

    try {
        const response = await ocorrenciaResourceService.getOcurrences({
            params: {
                ocorrenciaId: ocoId,
            },
        })

        ocurrencesData.value = [...response.data].sort((a, b) => b.id - a.id)
    } catch (error) {
        console.error(error)
    }
}

const updateDataPage = async () => {
    const personDataStore = usePersonDataStore()

    await getPerson(personDataStore.id)

    const ocoId = personData.value.ultimaOcorrencia.ocoId || null

    await getOcurrences(ocoId)
}
</script>
