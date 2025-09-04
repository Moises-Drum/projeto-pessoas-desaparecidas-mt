<template>
    <header
        class="fixed top-0 z-50 w-[98%] flex justify-center items-center bg-white shadow rounded-md"
        role="banner"
    >
        <section class="max-w-[1216px] w-[100%]">
            <div class="flex items-center gap-2 py-2 px-4 xl:px-0">
                <police-logo
                    custom-style="w-[2.8rem] md:w-[3.2rem] h-auto cursor-pointer"
                    role="button"
                    tabindex="0"
                    aria-label="Ir para página inicial."
                    @click="handleLogo"
                    @keydown.enter="handleLogo"
                    @keydown.space="handleLogo"
                />

                <div class="flex flex-col">
                    <span class="!font-bold text-[18px] !text-[#344256]">Polícia Civil MT</span>
                    <span class="text-[16px] md:text-[14px]">Sistema de Pessoas Desaparecidas</span>
                </div>
            </div>
        </section>
    </header>
</template>

<script setup>
import PoliceLogo from '@/components/atoms/icons/PoliceLogo.vue'
import router from '@/router'

defineOptions({
    name: 'TheHeader',
})

const handleLogo = () => {
    router.replace({ path: '/' })
}
</script>
