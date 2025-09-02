<template>
    <section
        class="w-[100%] flex flex-col items-center border border-[#dae0e7] rounded-lg shadow-sm p-6 space-y-6 bg-white"
    >
        <header class="w-full flex flex-col">
            <h3 class="text-[1.13rem]">Resultados da Busca</h3>
            <span class="text-[0.9rem] md:text-[0.75rem]">
                {{ totalPeaples }} pessoas encontradas
            </span>
        </header>

        <div
            class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center"
        >
            <template v-if="peapleList.length > 0">
                <peaple-card
                    v-for="peaple in peapleList"
                    :key="peaple.id"
                    :url-img="peaple.urlPhoto"
                    :name="peaple.name"
                    :age="peaple.age"
                    :location="peaple.localMissing"
                    :date-missing="peaple.dateMissing"
                />
            </template>

            <div
                v-else
                class="col-span-full flex flex-col items-center justify-center py-12 text-gray-500"
            >
                <search class="w-12 h-12 mb-4 text-gray-300" />
                <p class="text-lg font-medium">Nenhum resultado encontrado</p>
                <span class="text-sm mt-1">Verifique os termos ou filtros de busca</span>
            </div>
        </div>

        <footer class="w-full border-t border-[#24598f20] py-4">
            <nav
                class="w-full flex items-center justify-end gap-x-1"
                aria-label="Pagination"
            >
                <button
                    type="button"
                    class="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    aria-label="Previous"
                >
                    <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <span class="sr-only">Previous</span>
                </button>

                <div class="flex items-center gap-x-1">
                    <button
                        type="button"
                        class="min-h-9.5 min-w-9.5 flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:focus:bg-white/10"
                        aria-current="page"
                    >
                        1
                    </button>

                    <button
                        type="button"
                        class="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    >
                        2
                    </button>

                    <button
                        type="button"
                        class="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    >
                        3
                    </button>

                    <div class="hs-tooltip inline-block">
                        <button
                            type="button"
                            class="hs-tooltip-toggle group min-h-9.5 min-w-9.5 flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
                        >
                            <span class="group-hover:hidden text-xs">•••</span>
                            <svg
                                class="group-hover:block hidden shrink-0 size-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path d="m6 17 5-5-5-5"></path>
                                <path d="m13 17 5-5-5-5"></path>
                            </svg>
                            <span
                                class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-2xs dark:bg-neutral-700"
                                role="tooltip"
                            >
                                Next 4 pages
                            </span>
                        </button>
                    </div>

                    <button
                        type="button"
                        class="min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    >
                        8
                    </button>
                </div>

                <button
                    type="button"
                    class="min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                    aria-label="Next"
                >
                    <span class="sr-only">Next</span>
                    <svg
                        class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </button>
            </nav>
        </footer>
    </section>
</template>

<script setup>
import PeapleCard from '@/components/molecules/card/PeapleCard.vue'
import { Search } from 'lucide-vue-next'

defineOptions({
    name: 'PeapleGrid',
})

defineProps({
    peapleList: {
        type: Array,
        default: () => [],
    },

    totalPeaples: {
        type: Number,
        default: 0,
    },
})
</script>
