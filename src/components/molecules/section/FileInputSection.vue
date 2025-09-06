<template>
    <div :class="`flex flex-col space-y-4 ${width}`">
        <div class="w-full flex items-center space-x-2">
            <slot name="icon"></slot>

            <label
                :for="idInput"
                class="text-[1.1rem] font-semibold text-[#8c97a6]"
                v-text="required ? `${label} *` : label"
            ></label>
        </div>

        <div
            :class="`w-full min-h-50 ${height} p-6 space-y-4 border-2 border-dashed ${isDragOver ? 'border-[#8c97a6]' : 'border-[#dae0e7]'} rounded-lg transition duration-200 ease-out`"
            @dragover.prevent="isDragOver = true"
            @dragleave.prevent="isDragOver = false"
            @drop.prevent="handleDrop"
        >
            <div
                class="w-full flex flex-col justify-center items-center space-y-2 cursor-pointer pointer-events-auto"
                @click="handleSetFile"
            >
                <cloud-upload
                    size="50"
                    color="#8c97a6"
                />

                <span class="!text-[#344256]">Clique para escolher arquivos</span>

                <span class="text-[0.9rem] font-light">
                    ou arraste e solte aqui (máx. {{ formatSize }} por arquivo)
                </span>

                <span class="text-[0.9rem] font-light">Formatos aceitos: {{ formatMimes }}</span>
            </div>

            <ul class="space-y-2">
                <li
                    v-for="(file, i) in fileListSelected"
                    :key="i"
                    class="flex justify-between p-4 border border-[#dae0e7] rounded-md"
                >
                    <div class="flex items-center space-x-2">
                        <Image
                            size="16"
                            color="#24598f"
                        />

                        <span class="!text-[#485360]">{{ formatFileName(file.name) }}</span>
                    </div>

                    <button
                        type="button"
                        class="group p-2 hover:bg-[#8c97a620] rounded-md transition duration-150 ease-linear outline-none active:scale-[0.99] active:translate-y-[1px] will-change-transform backface-hidden"
                        @click="handleRemoveFile"
                    >
                        <trash2
                            size="20"
                            class="!text-[#24598f] group-hover:!text-red-500 transition duration-150 ease-linear"
                        />
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
/**
 * FileInputSection Component
 *
 * @example
 * <file-input-section
 *    label="Fotos ou Documentos (Opcional)"
 *    :formats="list"
 *    :file-size="100" <- MB
 *    class="md:col-span-2"
 * >
 *    <template #icon>
 *      <camera
 *        size="22"
 *        color="#24598f"
 *      />
 *    </template>
 * </file-input-section>
 *
 * const list = ['jpg', 'jpeg', 'png', 'gif']
 */

import { computed, ref } from 'vue'
import { CloudUpload, Trash2, Image } from 'lucide-vue-next'
import { ALL_FILE_EXTENSIONS, extensionsToMimeTypes } from '@/utils/mimeTypes.js'
import Swal from 'sweetalert2'

defineOptions({
    name: 'FileInputSection',
})

const props = defineProps({
    label: {
        type: String,
        required: true,
    },

    required: {
        type: Boolean,
        default: false,
    },

    modelValue: String,

    width: {
        type: String,
        default: 'w-full',
    },

    height: {
        type: String,
        default: 'h-auto',
    },

    mimes: {
        type: Array,
        required: true,
        validator: values => {
            const allHaveDot = values.every(value => value.startsWith('.'))
            const isValid = values.every(value => ALL_FILE_EXTENSIONS.includes(value))

            if (!allHaveDot) {
                console.error('FileInputSection (mimes): Adicione ponto antes das extensões.')
                return false
            }

            if (!isValid) {
                console.error('FileInputSection (mimes): Informe um tipo arquivo válido.')
                return false
            }

            return true
        },
    },

    fileSize: {
        type: Number,
        required: true,
    },
})

const emits = defineEmits(['file-list-selected', 'handle-remove-file'])

const idInput = ref(`input-${crypto.randomUUID()}`)
const fileListSelected = ref([])
const isDragOver = ref(false)

const formatMimes = computed(() => {
    return props.mimes.join(', ')
})

const formatSize = computed(() => {
    if (props.fileSize > 1000 ** 3 - 1) {
        return `${props.fileSize / 1000 ** 3}PB`
    }

    if (props.fileSize > 1000 ** 2 - 1) {
        return `${props.fileSize / 1000 ** 2}TB`
    }

    if (props.fileSize > 1000 - 1) {
        return `${props.fileSize / 1000}GB`
    }

    return `${props.fileSize}MB`
})

const handleDrop = e => {
    isDragOver.value = false

    const files = Array.from(e.dataTransfer.files)

    processFiles(files)
}

const processFiles = files => {
    try {
        const allowedMimeTypes = extensionsToMimeTypes(props.mimes)
        const maxSizeInBytes = props.fileSize * 1024 ** 2

        files.forEach(file => {
            if (!allowedMimeTypes.includes(file.type)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: `Arquivo "${file.name}" tem formato não permitido`,
                    confirmButtonColor: '#24598F',

                    didOpen: () => {
                        const confirmBtn = Swal.getConfirmButton()
                        const actionsContainer = confirmBtn.parentElement

                        actionsContainer.style.width = '100%'
                        actionsContainer.style.display = 'flex'
                        actionsContainer.style.justifyContent = 'center'

                        confirmBtn.style.width = '90%'
                    },
                })

                throw new Error(`Arquivo "${file.name}" tem formato não permitido`)
            }

            if (file.size > maxSizeInBytes) {
                Swal.fire({
                    icon: 'error',
                    title: 'Erro',
                    text: `Arquivo "${file.name}" é muito grande`,
                    confirmButtonColor: '#24598F',

                    didOpen: () => {
                        const confirmBtn = Swal.getConfirmButton()
                        const actionsContainer = confirmBtn.parentElement

                        actionsContainer.style.width = '100%'
                        actionsContainer.style.display = 'flex'
                        actionsContainer.style.justifyContent = 'center'

                        confirmBtn.style.width = '90%'
                    },
                })

                throw new Error(`Arquivo "${file.name}" é muito grande`)
            }
        })

        fileListSelected.value.push(...files)

        emits('file-list-selected', files)
    } catch (error) {
        console.error(error)
    }
}

const handleSetFile = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = props.mimes
    input.multiple = true

    input.addEventListener('change', e => {
        const files = Array.from(e.target.files)

        processFiles(files)
    })

    input.click()
}

const formatFileName = name => {
    if (name.length > 20) {
        return `${name.slice(0, 13)} ... ${name.substring(name.length - 8)}`
    }

    return name
}

const handleRemoveFile = index => {
    emits('handle-remove-file', index)

    fileListSelected.value.splice(index, 1)
}
</script>
