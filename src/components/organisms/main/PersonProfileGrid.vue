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

        <form-default-modal
            title="Fornecer Informações"
            :open-modal="openModal"
            @handle-close="handleCloseModal"
        >
            <template #subtitle>
                Sobre:
                <strong class="!text-[#344256] !font-semibold">Ana Maria Souza</strong>
            </template>

            <fieldset-section title="Informações sobre o Avistamento">
                <template #icon>
                    <eye
                        size="22"
                        color="#24598f"
                    />
                </template>

                <default-input
                    type="date"
                    label="Data do Avistamento"
                    width="w-full"
                    :required="true"
                />

                <default-input
                    type="time"
                    label="Horário Aproximado"
                    width="w-full"
                    :required="true"
                />

                <default-input
                    label="Local do Avistamento"
                    placeholder="Endereço ou ponto de referência"
                    width="w-full"
                    class="md:col-span-2"
                    :required="true"
                />

                <default-input
                    type="textarea"
                    label="Local do Avistamento"
                    placeholder="Descreva com detalhes o que você viu, as circunstâncias, roupas da pessoa, comportamento, acompanhantes, etc."
                    width="w-full"
                    height="h-auto"
                    class="md:col-span-2"
                    :required="true"
                />

                <info-card class="md:col-span-2">
                    <div class="flex items-center space-x-2">
                        <circle-alert
                            size="20"
                            color="#24598f"
                        />

                        <h3>Informações importantes</h3>
                    </div>

                    <ul class="px-7">
                        <li>
                            <span class="!text-[#485360] text-[0.9rem]">
                                • Todas as informações serão tratadas com sigilo e confidencialidade
                            </span>
                        </li>
                        <li>
                            <span class="!text-[#485360] text-[0.9rem]">
                                • Fornecer informações falsas pode configurar crime
                            </span>
                        </li>
                        <li>
                            <span class="!text-[#485360] text-[0.8rem]">
                                • Em caso de emergência, ligue imediatamente para 190
                            </span>
                        </li>
                        <li>
                            <span class="!text-[#485360] text-[0.9rem]">
                                • Você pode ser contatado para esclarecimentos adicionais
                            </span>
                        </li>
                    </ul>
                </info-card>
            </fieldset-section>
        </form-default-modal>
    </section>
</template>

<script setup>
import PhotoSection from '@/components/molecules/section/PhotoSection.vue'
import InfoSection from '@/components/molecules/section/InfoSection.vue'
import { User, MapPin, ClipboardList, Eye, CircleAlert } from 'lucide-vue-next'
import HistorySection from '@/components/molecules/section/HistorySection.vue'
import FormDefaultModal from '@/components/modals/form/FormDefaultModal.vue'
import DefaultInput from '@/components/atoms/inputs/DefaultInput.vue'
import FieldsetSection from '@/components/molecules/section/FieldsetSection.vue'
import { ref } from 'vue'
import InfoCard from '@/components/atoms/card/InfoCard.vue'

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

const openModal = ref(false)

const handleMoreInfo = () => {
    openModal.value = true
}

const handleInvestigationLog = () => {
    console.log('teste')
}

const handleCloseModal = () => {
    openModal.value = false
}
</script>
