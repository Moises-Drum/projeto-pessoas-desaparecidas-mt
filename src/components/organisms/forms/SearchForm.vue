<template>
    <div
        class="w-[100%] flex flex-col items-center border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-2"
    >
        <h1 class="text-[1.5rem]">Consulta de Pessoas Desaparecidas</h1>

        <span>
            Digite informações para localizar registros de pessoas desaparecidas em Mato Grosso
        </span>

        <search-input />
    </div>
</template>

<script setup>
import SearchInput from '@/components/molecules/inputs/SearchInput.vue'

defineOptions({
    name: 'SearchForm',
})
</script>
