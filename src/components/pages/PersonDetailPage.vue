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

            <person-profile-grid />
        </div>
    </base-template>
</template>

<script setup>
import BaseTemplate from '@/components/templates/BaseTemplate.vue'
import { usePersonDataStore } from '@/pinia/usePersonDataStore.js'
import BreadcrumbComponent from '@/components/organisms/navigation/BreadcrumbComponent.vue'
import { ref } from 'vue'
import { House } from 'lucide-vue-next'
import PersonProfileGrid from '@/components/organisms/main/PersonProfileGrid.vue'

defineOptions({
    name: 'PersonDetailPage',
})

const personDataStore = usePersonDataStore()

const broadcrumbItems = ref([{ label: 'Consultar', to: '/' }, { label: 'Pessoa' }])

// const showId = () => {
//     return personDataStore.id ?? 'N/A'
// }
</script>
