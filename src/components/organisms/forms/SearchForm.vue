<template>
    <form
        class="w-[100%] flex flex-col items-center border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-2"
        @submit.prevent="searchPersonas"
    >
        <h1 class="text-[1.3rem] md:text-[1.5rem] text-center font-bold">
            Consulta de Pessoas Desaparecidas
        </h1>

        <p class="text-center">
            Digite informações para localizar registros de pessoas desaparecidas em Mato Grosso
        </p>

        <search-input
            v-model="searchValue"
            width="max-w-[642px] w-full"
            placeholder="Digite nome, idade, cidade ..."
        />

        <btn-default
            text="Consultar"
            type="submit"
            custom-text="!text-white"
            width="max-w-[642px] w-full"
            :disabled="!!!searchValue"
        >
            <template #icon>
                <search
                    color="white"
                    size="16"
                />
            </template>
        </btn-default>
    </form>
</template>

<script setup>
import BtnDefault from '@/components/molecules/buttons/btnDefault.vue'
import SearchInput from '@/components/molecules/inputs/SearchInput.vue'
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'

defineOptions({
    name: 'SearchForm',
})

const searchValue = ref('')

const searchPersonas = () => {
    console.log('teste')
}
</script>
