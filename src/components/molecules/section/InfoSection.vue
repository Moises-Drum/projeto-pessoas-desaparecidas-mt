<template>
    <div class="w-full flex flex-col space-y-2">
        <div class="w-full flex items-center space-x-2 rounded-lg">
            <slot name="icon"></slot>

            <h2 class="text-[1.25rem]">{{ title }}</h2>
        </div>

        <div class="w-full p-6 grid grid-cols-1 lg:grid-cols-2 gap-5 bg-[#f9fafb] rounded-lg">
            <template
                v-for="(data, i) in dataCard"
                :key="i"
            >
                <div
                    :class="
                        i === dataCard.length - 1
                            ? 'flex flex-col space-y-0.5 lg:col-span-2 '
                            : 'flex flex-col space-y-0.5 '
                    "
                >
                    <strong class="text-[0.9rem] !font-normal !text-[#8c97a6]">
                        {{ data.title }}
                    </strong>

                    <span
                        class="!text-[#344256]"
                        v-text="data.captalize !== false ? capitalize(data.content) : data.content"
                    ></span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
/**
 * InfoSection Component
 *
 * @example
 * <info-section :title="Nome Completo" :data-card="list">
 *      <template #icon>
 *          <user
 *              size="20"
 *              color="#24598f"
 *          />
 *      </template>
 * </info-section>
 *
 * const list = [
 *   { title: 'Nome', content: 'Pelé Frances Asiatico' },
 *   { title: 'Idade', content: '23 anos' },
 *   { title: 'Sexo', content: 'Masculino', captalize: false },
 *
 * ]
 */

import { capitalize } from '@/utils/formatters.js'

defineOptions({
    name: 'InfoSection',
})

defineProps({
    title: {
        type: String,
        required: true,
    },

    dataCard: {
        type: Array,
        required: true,
        validator: function (value) {
            return value.every(item => {
                if (
                    !item.title ||
                    item.title.length === 0 ||
                    !item.content ||
                    item.content.length === 0
                ) {
                    console.error(
                        'InfoSection (dataCard): Todos os items devem ter title e content preenchidos.',
                        item
                    )
                    return false
                }
                return true
            })

            return true
        },
    },
})

const teste = value => console.log(value)
</script>
