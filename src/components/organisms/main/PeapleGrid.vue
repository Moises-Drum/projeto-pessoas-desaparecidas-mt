<template>
    <section
        class="w-[100%] flex flex-col items-center border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white"
    >
        <header class="w-full flex flex-col">
            <h3 class="text-[1.13rem]">Resultados da Busca</h3>
            <span class="text-[0.9rem] md:text-[0.75rem]">6 pessoas encontradas</span>
        </header>

        <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            <peaple-card
                url-img="https://midias.correiobraziliense.com.br/_midias/jpg/2025/06/22/675x450/1_snapinsta_to_469858790_468675629589470_5789330845432883739_n-54736292.jpg?20250622201248?20250622201248"
                name="Moisés de Souza Drumand"
                age="23"
                location="Cuiabá-MT"
                date-missing="2018-02-02"
            />
        </div>

        <footer class="w-full border-t border-[#24598f20] py-4">footer</footer>
    </section>
</template>

<script setup>
import PeapleCard from '@/components/molecules/card/PeapleCard.vue'

defineOptions({
    name: 'PeapleGrid',
})
</script>
