<template>
    <div :class="`${customStyle} mix-blend-multiply object-contain`">
        <img
            class="w-[100%] h-[100%]"
            :src="Logo"
            alt="Brasão da Policia Civil do Estado de Mato-Grosso"
        />
    </div>
</template>

<script setup>
import Logo from '@/assets/imgs/logo/policia-civil-brasao.jpg'

defineOptions({
    name: 'PoliceLogo',
})

defineProps({
    customStyle: {
        type: String,
        default: 'w-[3rem] h-[3rem]',
    },
})
</script>
