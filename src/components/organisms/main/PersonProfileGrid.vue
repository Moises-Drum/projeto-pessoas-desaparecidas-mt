<template>
    <section
        class="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.5fr_1fr] md:grid-rows-3 gap-6 mt-2 border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white"
    >
        <photo-section
            class="md:row-span-3"
            url-image="https://img.freepik.com/fotos-gratis/pessoa-de-origem-indiana-se-divertindo_23-2150285283.jpg?semt=ais_incoming&w=740&q=80"
            @handle-click="handleMoreInfo"
        />

        <info-section
            title="Dados Pessoais"
            :data-card="personalDataList"
        >
            <template #icon>
                <user
                    size="22"
                    color="#24598f"
                />
            </template>
        </info-section>

        <info-section
            title="Informações do Desaparecimento"
            :data-card="infoMisssingList"
        >
            <template #icon>
                <map-pin
                    size="22"
                    color="#ee5b2b"
                />
            </template>
        </info-section>

        <history-section
            title="Status e Atualizações"
            :is-found="false"
            @handle-click="handleInvestigationLog"
        >
            <template #icon>
                <clipboard-list
                    size="22"
                    color="#05832f"
                />
            </template>
        </history-section>

        <form-default-modal title="Fornecer Informações">
            <template #subtitle>
                Sobre:
                <strong class="!text-[#344256] !font-semibold">Ana Maria Souza</strong>
            </template>
        </form-default-modal>
    </section>
</template>

<script setup>
import PhotoSection from '@/components/molecules/section/PhotoSection.vue'
import InfoSection from '@/components/molecules/section/InfoSection.vue'
import { User, MapPin, ClipboardList } from 'lucide-vue-next'
import HistorySection from '@/components/molecules/section/HistorySection.vue'
import FormDefaultModal from '@/components/modals/form/FormDefaultModal.vue'

defineOptions({
    name: 'PersonProfileGrid',
})

const personalDataList = [
    { title: 'Nome Completo', content: 'Ana Maria Souza' },
    { title: 'Idade', content: '67 anos' },
    { title: 'Data de Nascimento', content: '10/01/1956' },
    { title: 'Sexo', content: 'Feminino' },
    {
        title: 'Características Físicas',
        content: 'Altura: 1,60m | Peso: 65kg | Cabelos grisalhos | Olhos azuis | Usa bengala',
    },
]

const infoMisssingList = [
    { title: 'Data do Desaparecimento', content: '05/11/2023' },
    { title: 'Horário Aproximado', content: '14h00' },
    { title: 'Local do Desaparecimento', content: 'Centro de Várzea Grande - MT' },
    {
        title: 'Circunstâncias',
        content: 'Saiu para resolver questões bancárias e não retornou.',
    },
    {
        title: 'Vestuário',
        content: 'Camisa social branca, calça social preta, sapato social preto',
    },
]

const handleMoreInfo = () => {
    console.log('teste')
}

const handleInvestigationLog = () => {
    console.log('teste')
}
</script>
