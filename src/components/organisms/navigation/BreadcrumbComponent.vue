<template>
    <nav class="flex space-x-2">
        <div
            v-for="(item, i) in items"
            :key="i"
            class="flex items-center space-x-2"
        >
            <router-link
                :to="item.to ? `${item.to}` : ''"
                :class="
                    i === items.length - 1
                        ? 'flex items-center gap-2'
                        : 'flex items-center gap-2 p-1 rounded-lg active:bg-gray-200'
                "
            >
                <slot
                    v-if="i === 0"
                    name="icon"
                ></slot>

                <span
                    :class="
                        i === items.length - 1
                            ? 'text-[0.9rem] !text-[#344256] cursor-default'
                            : 'text-[0.9rem]'
                    "
                >
                    {{ item.label }}
                </span>
            </router-link>

            <chevron-right
                v-if="i < items.length - 1"
                color="#8c97a6"
                size="14"
            />
        </div>
    </nav>
</template>

<script setup>
/**
 * Breadcrump Component
 *
 * @example
 * <breadcrumb-component :items="breadcrumbItems" />
 *
 * const breadcrumbItems = [
 *   { label: 'Dashboard', to: '/dashboard' },
 *   { label: 'Usuários', to: '/users' },
 *   { label: 'João Silva' } // Item atual (sem 'to')
 * ]
 */

import { ChevronRight } from 'lucide-vue-next'

defineOptions({
    name: 'BreadcrumbComponent',
})

defineProps({
    items: {
        type: Array,
        required: true,
        validator: value => {
            if (value.length === 0) {
                console.error('Breadcrumb: items não pode estar vazio')

                return false
            }

            if (value.length > 5) {
                console.error('Breadcrumb: O Array não pode ultrapassar 5 items.')

                return false
            }

            const invalidItem = value.find(item => {
                if (!item.label) {
                    console.error(
                        'Breadcrumb: Todos os items devem ter ao menos uma label',
                        invalidItem
                    )

                    return false
                }
            })

            return true
        },
    },
})
</script>
