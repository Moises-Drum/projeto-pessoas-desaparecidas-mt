<template>
    <form
        role="search"
        class="w-[100%] flex flex-col items-center border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-2 bg-white"
        aria-labelledby="form-title"
        @submit.prevent="searchPersonas"
    >
        <h1
            id="form-title"
            class="text-[1.3rem] md:text-[1.5rem] text-center font-bold"
        >
            Consulta de Pessoas Desaparecidas
        </h1>

        <p
            id="search-description"
            class="text-center"
        >
            Digite informações para localizar registros de pessoas desaparecidas em Mato Grosso
        </p>

        <search-input
            v-model="searchValue"
            width="max-w-[642px] w-full"
            placeholder="Digite o nome da pessoa"
            aria-label="Campo de busca para pessoas desaparecidas"
            aria-describedby="search-description"
            aria-required="true"
        />

        <btn-default
            text="Consultar"
            type="submit"
            custom-text="!text-white"
            width="max-w-[642px] w-full"
            :aria-label="
                searchValue ? 'Consultar pessoas desaparecidas' : 'Digite algo para consultar'
            "
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
import BtnDefault from '@/components/atoms/buttons/btnDefault.vue'
import SearchInput from '@/components/atoms/inputs/SearchInput.vue'
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'

defineOptions({
    name: 'SearchForm',
})

const emits = defineEmits(['search-value'])

const searchValue = ref('')

const searchPersonas = () => {
    emits('search-value', searchValue.value)
}
</script>
