<template>
    <form
        role="search"
        :class="
            isTablet && !showDropdownMobile
                ? 'w-[100%] flex flex-col items-center border border-[#dae0e7] rounded-lg shadow-sm px-6 py-3 lg:p-6 space-y-4 bg-white  cursor-pointer lg:cursor-auto transition duration-200 ease-in active:scale-[0.99] active:translate-y-[1px]'
                : 'w-[100%] flex flex-col items-center border border-[#dae0e7] rounded-lg shadow-sm px-6 py-3 lg:p-6 space-y-4 bg-white'
        "
        aria-labelledby="filters-title"
        onsubmit="return false"
    >
        <div
            class="w-full flex items-center justify-between lg:justify-normal"
            @click="handleClickDropdown"
        >
            <div class="flex items-center space-x-2">
                <funnel
                    size="16"
                    color="#24598f"
                    aria-hidden="true"
                />

                <h3
                    id="filters-title"
                    class="text-[1.15rem]"
                >
                    Filtros
                </h3>
            </div>

            <chevron-down
                v-if="isTablet"
                size="20"
                color="#24598f"
                :class="showDropdownMobile ? 'rotate-180 transform' : ''"
                aria-hidden="true"
            />
        </div>

        <transition name="slide-down">
            <div
                v-if="hasDropdown"
                class="w-full space-y-6"
            >
                <div class="w-full space-y-4">
                    <fieldset class="space-y-2">
                        <legend
                            id="status-legend"
                            class="text-[1rem] md:text-[0.9rem]"
                        >
                            Status
                        </legend>

                        <div
                            class="space-y-1"
                            role="radiogroup"
                            aria-labelledby="status-legend"
                            aria-required="false"
                        >
                            <radio-input
                                :model-value="status.todos"
                                name="status"
                                :size="isMobile ? 18 : 16"
                                label="Todos"
                                :checked="status.todos === selectedStatus"
                                @update:model-value="handleStatus"
                            />

                            <radio-input
                                :model-value="status.desaparecidos"
                                name="status"
                                :size="isMobile ? 18 : 16"
                                label="Desaparecido"
                                :checked="status.desaparecidos === selectedStatus"
                                @update:model-value="handleStatus"
                            />

                            <radio-input
                                :model-value="status.localizados"
                                name="status"
                                :size="isMobile ? 18 : 16"
                                label="Localizado"
                                :checked="status.localizados === selectedStatus"
                                @update:model-value="handleStatus"
                            />
                        </div>
                    </fieldset>

                    <fieldset class="space-y-2">
                        <legend
                            id="age-legend"
                            class="text-[1rem] md:text-[0.9rem]"
                        >
                            Faixa Etária
                        </legend>

                        <div
                            class="space-y-1"
                            role="radiogroup"
                            aria-labelledby="age-legend"
                            aria-required="false"
                        >
                            <radio-input
                                :model-value="ageGroup.A"
                                name="age"
                                :size="isMobile ? 18 : 16"
                                label="0-17"
                                :checked="ageGroup.A === selectedAgeGroup"
                                @update:model-value="handleAgeGroup"
                            />

                            <radio-input
                                :model-value="ageGroup.B"
                                name="age"
                                :size="isMobile ? 18 : 16"
                                label="18-39"
                                :checked="ageGroup.B === selectedAgeGroup"
                                @update:model-value="handleAgeGroup"
                            />

                            <radio-input
                                :model-value="ageGroup.C"
                                name="age"
                                :size="isMobile ? 18 : 16"
                                label="40+"
                                :checked="ageGroup.C === selectedAgeGroup"
                                @update:model-value="handleAgeGroup"
                            />
                        </div>
                    </fieldset>
                </div>

                <btn-default
                    text="Limpar Filtros"
                    custom-text="!text-[#344256]"
                    width="w-full"
                    bg-color="#d1d9e0"
                    @handle-click="resetFilters"
                />
            </div>
        </transition>
    </form>
</template>

<script setup>
import { Funnel, ChevronDown } from 'lucide-vue-next'
import RadioInput from '@/components/atoms/inputs/RadioInput.vue'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BtnDefault from '@/components/atoms/buttons/btnDefault.vue'

defineOptions({
    name: 'PeapleFilter',
})

const status = ref({
    todos: 'todos',
    desaparecidos: 'desaparecidos',
    localizados: 'localizados',
})
const ageGroup = ref({
    A: '0-17',
    B: '18-39',
    C: '40+',
})

const selectedStatus = ref(status.value.todos)
const selectedAgeGroup = ref(ageGroup.value.A)
const showDropdownMobile = ref(false)
const windowWidth = ref(window.innerWidth)

const isTablet = computed(() => windowWidth.value < 1024)
const isMobile = computed(() => windowWidth.value < 768)

const hasDropdown = computed(() => {
    if (!isTablet.value) {
        return true
    }

    return showDropdownMobile.value
})

onMounted(() => {
    window.addEventListener('resize', updateWindowWidth)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth)
})

const handleStatus = status => {
    selectedStatus.value = status
}

const handleAgeGroup = age => {
    selectedAgeGroup.value = age
}

const resetFilters = () => {
    selectedStatus.value = status.value.todos
    selectedAgeGroup.value = ageGroup.value.A
}

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth
}

const handleClickDropdown = () => {
    showDropdownMobile.value = !showDropdownMobile.value
}

watch(windowWidth, newVal => {
    windowWidth.value = newVal
})
</script>

<style scoped lang="scss">
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.2s ease-in;
    transform-origin: top;
}

.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
