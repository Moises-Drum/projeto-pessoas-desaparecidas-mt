<template>
    <div :class="`${styleProps} relative flex items-center`">
        <search
            color="#8c97a6"
            size="20"
            class="absolute left-2"
        />

        <input
            class="w-[100%] h-10 px-3 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 w-full pl-10 pr-4 py-3 border border-[#dae0e7] rounded-lg bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-[#24598f]"
            type="text"
        />
    </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next'
import { computed } from 'vue'

defineOptions({
    name: 'SearchInput',
})

defineProps({
    placeholder: String,
    width: {
        type: String,
        default: 'w-[100%]',
    },
    height: {
        type: String,
        default: 'h-auto',
    },
    customStyle: String,
})

const styleProps = computed(() => {
    return ''
})
</script>
