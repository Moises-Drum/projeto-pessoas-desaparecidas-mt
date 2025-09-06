<template>
    <section
        class="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.5fr_1fr] md:grid-rows-3 gap-6 mt-2 border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white"
    >
        <photo-section
            class="md:row-span-3"
            :url-image="
                personData?.urlFoto ??
                'https://www.reabilitybauru.com.br/wp-content/uploads/2017/01/perfil-300x300.png'
            "
            :is-found="isFound"
            :person-name="personData?.nome ?? ''"
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
            :is-found="isFound"
            :ocurrences-data="ocurrencesData"
            @handle-click="handleInvestigationLog"
        >
            <template #icon>
                <clipboard-list
                    size="22"
                    color="#05832f"
                />
            </template>
        </history-section>

        <!--MODALS-->
        <form-default-modal
            v-if="!isFound"
            title="Fornecer Informações"
            :open-modal="openModal"
            :send-loading="sendLoading"
            @handle-close="handleCloseModal"
            @handle-submit="handleSubmit"
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
                    v-model="infoData.data"
                    type="date"
                    label="Data do Avistamento"
                    width="w-full"
                    class="md:col-span-2"
                    :required="true"
                />

                <default-input
                    v-model="infoData.informacao"
                    type="textarea"
                    label="Descrição Detalhada da Informação"
                    placeholder="Descreva com detalhes o que você viu, as circunstâncias, roupas da pessoa, comportamento, acompanhantes, etc."
                    width="w-full"
                    height="h-auto"
                    class="md:col-span-2"
                    :required="true"
                />

                <file-input-section
                    label="Fotos ou Documentos"
                    :mimes="['.jpg', '.jpeg', '.png']"
                    :file-size="100"
                    class="md:col-span-2"
                    :required="true"
                    @file-list-selected="handleFiles"
                    @handle-remove-file="handleRemoveFile"
                >
                    <template #icon>
                        <camera
                            size="22"
                            color="#24598f"
                        />
                    </template>
                </file-input-section>

                <default-input
                    v-model="infoData.descricao"
                    label="Descrição dos Anexos"
                    placeholder="Example : Foto João da Silva"
                    width="w-full"
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
                            <span class="!text-[#485360] text-[0.9rem]">
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

        <default-modal
            title="Historico de informações"
            :open-modal="openLogModal"
            @handle-close="handleCloseModal"
        >
            <ul
                v-if="ocurrencesData.length > 0"
                class="w-full flex flex-col space-y-4"
            >
                <li
                    v-for="(ocurrence, i) in ocurrencesData"
                    :key="i"
                    class="flex flex-col"
                >
                    <div class="relative flex items-center">
                        <span
                            :class="`absolute -left-[5px] !text-[#3498db] text-[1.5rem] ${i === 0 && 'animate-ping'}`"
                        >
                            •
                        </span>

                        <span class="text-[0.85rem] pl-4">
                            Avistamento: {{ formatDate(ocurrence.data) }}
                        </span>
                    </div>

                    <div class="w-full flex flex-col pl-4 border-l-2 border-[#3498db] space-y-3">
                        <p class="!text-[#485360]">{{ ocurrence.informacao }}</p>

                        <div
                            v-if="ocurrence?.anexos?.length > 0"
                            class="w-full flex flex-col items-end space-y-2"
                        >
                            <span class="text-[0.8rem]">Arquivos anexados:</span>

                            <button
                                type="button"
                                class="w-[20%] flex items-center space-x-2 p-1 !border-1 !border-[#3498db] group hover:bg-[#3498db] rounded-sm transition duration-300 ease-in-out"
                                @click="downloadFiles(ocurrence?.anexos)"
                            >
                                <download
                                    size="13"
                                    class="!text-[#3498db] group-hover:!text-white"
                                />

                                <span
                                    class="!text-[#3498db] group-hover:!text-white text-[0.75rem]"
                                >
                                    Baixar arquivos
                                </span>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>

            <div
                v-else
                class="flex justify-center items-center"
            >
                <span>Não há histórico de ocorrências</span>
            </div>

            <template #footer>
                <div class="w-full flex items-center justify-center p-6 bg-[#f4f4f4]">
                    <span class="!text-[0.8rem]">
                        Este histórico é atualizado conforme o progresso da investigação
                    </span>
                </div>
            </template>
        </default-modal>
    </section>
</template>

<script setup>
import PhotoSection from '@/components/molecules/section/PhotoSection.vue'
import InfoSection from '@/components/molecules/section/InfoSection.vue'
import { User, MapPin, ClipboardList, Eye, CircleAlert, Camera, Download } from 'lucide-vue-next'
import HistorySection from '@/components/molecules/section/HistorySection.vue'
import FormDefaultModal from '@/components/modals/form/FormDefaultModal.vue'
import DefaultInput from '@/components/atoms/inputs/DefaultInput.vue'
import FieldsetSection from '@/components/molecules/section/FieldsetSection.vue'
import { computed, onMounted, ref } from 'vue'
import InfoCard from '@/components/atoms/card/InfoCard.vue'
import FileInputSection from '@/components/molecules/section/FileInputSection.vue'
import Swal from 'sweetalert2'
import DefaultModal from '@/components/modals/default/DefaultModal.vue'
import { formatDate, formatTime } from '@/utils/formatters.js'
import { ocorrenciaResourceService } from '@/services/ocorrenciaResourceService.js'

defineOptions({
    name: 'PersonProfileGrid',
})

const props = defineProps({
    personData: {
        type: Object,
        required: true,
    },

    ocurrencesData: {
        type: Array,
        required: true,
    },
})

const emits = defineEmits(['update-data-page'])

const personalDataList = ref([])

const infoMisssingList = ref([])

const openModal = ref(false)
const openLogModal = ref(false)
const infoData = ref({
    informacao: null,
    descricao: null,
    data: null,
    ocoId: null,
    files: [],
})
const sendLoading = ref(false)

onMounted(() => {
    personalDataList.value = [
        { title: 'Nome', content: props?.personData?.nome ?? 'Não informado' },
        {
            title: 'Idade',
            content: `${props?.personData?.idade} anos` ?? 'Não informado',
            captalize: false,
        },
        { title: 'Sexo', content: props?.personData?.sexo ?? 'Não informado' },
    ]

    infoMisssingList.value = [
        {
            title: 'Data do Desaparecimento',
            content:
                formatDate(props?.personData?.ultimaOcorrencia?.dtDesaparecimento) ??
                'Não informado',
        },
        {
            title: 'Horário Aproximado',
            content:
                formatTime(props?.personData?.ultimaOcorrencia?.dtDesaparecimento) ??
                'Não informado',
        },
        {
            title: 'Local do Desaparecimento',
            content:
                props?.personData?.ultimaOcorrencia?.localDesaparecimentoConcat ?? 'Não informado',
        },
        {
            title: 'Informação',
            content:
                props?.personData?.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.informacao ??
                'Não informado',
            captalize: false,
        },
        {
            title: 'Vestimentas',
            content:
                props?.personData?.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO
                    ?.vestimentasDesaparecido ?? 'Não informado',
            captalize: false,
        },
    ]
})

const handleMoreInfo = () => {
    openModal.value = true
}

const handleInvestigationLog = () => {
    openLogModal.value = true
}

const handleCloseModal = () => {
    openModal.value = false
    openLogModal.value = false

    clearInputs()
}

const handleFiles = values => {
    infoData.value.files.push(...values)
}

const handleRemoveFile = index => {
    infoData.value.files.splice(index, 1)
}

const clearInputs = () => {
    infoData.value = {
        informacao: null,
        descricao: null,
        data: null,
        ocoId: null,
        files: [],
    }
}

const handleSubmit = async () => {
    sendLoading.value = true

    try {
        infoData.value.ocoId = props.personData.ultimaOcorrencia.ocoId

        const binaryObj = new FormData()

        if (infoData.value.files && infoData.value.files.length > 0) {
            infoData.value.files.forEach(file => {
                binaryObj.append('files', file)
            })
        }

        await ocorrenciaResourceService.sendNewOcurrence(binaryObj, {
            params: {
                informacao: infoData.value.informacao,
                descricao: infoData.value.descricao,
                data: infoData.value.data,
                ocoId: infoData.value.ocoId,
            },
        })

        emits('update-data-page')

        Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Ocorrência registrada com sucesso!',
            showConfirmButton: false,
            timer: 4000,
        }).then(() => handleCloseModal())
    } catch (error) {
        sendLoading.value = false

        console.error(error)

        await Swal.fire({
            icon: 'error',
            title: 'Erro ',
            text: 'Erro ao enviar as informações.',
            confirmButtonColor: '#24598f',

            didOpen: () => {
                const confirmBtn = Swal.getConfirmButton()
                const actionsContainer = confirmBtn.parentElement

                actionsContainer.style.width = '100%'
                actionsContainer.style.display = 'flex'
                actionsContainer.style.justifyContent = 'center'

                confirmBtn.style.width = '90%'
            },
        })
    } finally {
        sendLoading.value = false
    }
}

const isFound = computed(() => !!props.personData?.ultimaOcorrencia?.dataLocalizacao)

const baixando = ref(null)

function archiveNameForUrl(url) {
    try {
        const instanceUrl = new URL(url)
        const base = instanceUrl.pathname.split('/').pop() || 'arquivo'

        return decodeURIComponent(base)
    } catch {
        return 'arquivo'
    }
}

async function downloadFiles(anexos) {
    if (!Array.isArray(anexos) || anexos.length === 0) return

    baixando.value = true

    try {
        await Promise.all(
            anexos.map(async url => {
                const response = await fetch(url)
                const blob = await response.blob()

                const a = document.createElement('a')

                a.href = URL.createObjectURL(blob)
                a.download = archiveNameForUrl(url)

                a.click()

                URL.revokeObjectURL(a.href)
            })
        )
    } catch (error) {
        console.error(error)

        baixando.value = false
    } finally {
        baixando.value = false
    }
}
</script>
