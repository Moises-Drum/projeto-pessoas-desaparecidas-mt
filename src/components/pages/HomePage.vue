<template>
    <base-template>
        <div class="max-w-[1216px] w-[100%] flex flex-col py-4 px-4 xl:px-0">
            <div class="grid grid-cols-1 lg:grid-cols-[0.85fr_3fr] gap-6 justify-items-center">
                <search-form class="lg:col-span-2" />

                <peaple-filter class="row-span-2" />

                <peaple-grid class="row-span-3" />
            </div>
        </div>
    </base-template>
</template>

<script setup>
import SearchForm from '../organisms/forms/SearchForm.vue'
import BaseTemplate from '../templates/BaseTemplate.vue'
import PeapleGrid from '@/components/organisms/main/PeapleGrid.vue'
import PeapleFilter from '@/components/organisms/forms/PeapleFilter.vue'

defineOptions({
    name: 'HomePage',
})
</script>
