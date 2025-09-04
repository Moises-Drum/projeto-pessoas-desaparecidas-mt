<template>
    <nav
        class="w-full flex items-center justify-end gap-x-1"
        aria-label="Pagination"
    >
        <btn-default
            text="Anterior"
            custom-text="hidden sm:block !text-white"
            width="auto"
            space-x="space-x-0 sm:space-x-2"
            :disabled="props.paginationData.first"
            @handle-click="changePage(props.paginationData.pageNumber - 1)"
        >
            <template #icon>
                <chevron-right
                    color="white"
                    class="rotate-180"
                    size="16"
                />
            </template>
        </btn-default>

        <div class="flex items-center">
            <button
                v-if="shouldShowFirstPage"
                type="button"
                :class="pageButtonClass(0)"
                @click="changePage(0)"
            >
                1
            </button>

            <div
                v-if="shouldShowStartEllipsis"
                class="hs-tooltip inline-block"
            >
                <span class="text-xs text-gray-400">...</span>
            </div>

            <button
                v-for="page in visiblePages"
                :key="page"
                type="button"
                :class="pageButtonClass(page)"
                @click="changePage(page)"
            >
                {{ page + 1 }}
            </button>

            <div
                v-if="shouldShowEndEllipsis"
                class="hs-tooltip inline-block"
            >
                <span class="text-xs text-gray-400">...</span>
            </div>

            <button
                v-if="shouldShowLastPage"
                type="button"
                :class="pageButtonClass(props.paginationData.totalPages - 1)"
                @click="changePage(props.paginationData.totalPages - 1)"
            >
                {{ props.paginationData.totalPages }}
            </button>
        </div>

        <btn-default
            text="Próximo"
            custom-text="hidden sm:block !text-white"
            width="auto"
            space-x="space-x-0 sm:space-x-2"
            :disabled="props.paginationData.last"
            @handle-click="changePage(props.paginationData.pageNumber + 1)"
        >
            <template #icon-right>
                <chevron-right
                    color="white"
                    size="16"
                />
            </template>
        </btn-default>
    </nav>
</template>

<script setup>
import { computed } from 'vue'
import { ChevronRight } from 'lucide-vue-next'
import BtnDefault from '@/components/atoms/buttons/btnDefault.vue'

defineOptions({
    name: 'PaginationComponent',
})

const props = defineProps({
    paginationData: {
        type: Object,
        required: true,
    },
})

const emit = defineEmits(['page-change'])

const visiblePages = computed(() => {
    const current = props.paginationData.pageNumber
    const total = props.paginationData.totalPages
    const maxVisible = 3
    const pages = []

    let start = Math.max(0, current - Math.floor(maxVisible / 2))
    let end = Math.min(total - 1, start + maxVisible - 1)

    if (end - start < maxVisible - 1) {
        start = Math.max(0, end - maxVisible + 1)
    }

    const showFirst = start > 0
    const showLast = end < total - 1

    if (showFirst && start <= 1) {
        start = 0
    } else if (showFirst) {
        start = Math.max(2, start)
    }

    if (showLast && end >= total - 3) {
        end = total - 1
    } else if (showLast) {
        end = Math.min(total - 3, end)
    }

    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    return pages
})

const shouldShowFirstPage = computed(() => {
    return !visiblePages.value.includes(0) && props.paginationData.totalPages > 1
})

const shouldShowLastPage = computed(() => {
    const lastPage = props.paginationData.totalPages - 1
    return !visiblePages.value.includes(lastPage) && props.paginationData.totalPages > 1
})

const shouldShowStartEllipsis = computed(() => {
    return shouldShowFirstPage.value && visiblePages.value[0] > 1
})

const shouldShowEndEllipsis = computed(() => {
    const lastVisible = visiblePages.value[visiblePages.value.length - 1]
    return shouldShowLastPage.value && lastVisible < props.paginationData.totalPages - 2
})

const changePage = pageNumber => {
    if (pageNumber >= 0 && pageNumber < props.paginationData.totalPages) {
        emit('page-change', pageNumber)
    }
}

const pageButtonClass = pageNumber => {
    const isActive = pageNumber === props.paginationData.pageNumber

    return isActive
        ? 'min-h-9.5 min-w-9.5 flex justify-center items-center text-white p-1 text-sm rounded-lg bg-[#24598F] focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'
        : 'min-h-9.5 min-w-9.5 flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 p-1 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
}
</script>
