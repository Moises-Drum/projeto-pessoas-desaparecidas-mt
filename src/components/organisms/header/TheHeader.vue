<template>
    <header class="w-[100%] flex justify-center items-center text-[#344256] shadow">
        <section class="w-[1216px]">
            <div class="flex items-center gap-2 py-2">
                <police-logo custom-style="w-[50px] h-auto" />

                <div class="flex flex-col">
                    <span class="font-bold text-[18px]">Polícia Civil MT</span>
                    <span class="opacity-50 text-[14px]">Sistema de Pessoas Desaparecidas</span>
                </div>
            </div>
        </section>
    </header>
</template>

<script setup>
import PoliceLogo from '@/components/atoms/icons/PoliceLogo.vue'

defineOptions({
    name: 'TheHeader',
})
</script>
