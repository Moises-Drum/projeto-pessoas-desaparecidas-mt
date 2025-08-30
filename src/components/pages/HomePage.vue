<template>
    <base-template>
        <div class="max-w-[1216px] w-[100%] flex flex-col py-4 px-4 xl:px-0">
            <div class="grid grid-cols-[1fr_3fr] gap-6 place-items-center">
                <search-form class="col-span-2" />

                <div>Sidebar</div>
                <div>content</div>
            </div>
        </div>
    </base-template>
</template>

<script setup>
import SearchForm from '../organisms/forms/SearchForm.vue'
import BaseTemplate from '../templates/BaseTemplate.vue'

defineOptions({
    name: 'HomePage',
})
</script>
