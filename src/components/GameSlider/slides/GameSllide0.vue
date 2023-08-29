<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg" alt="slide">
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="&#208;&#161;&#209;&#134;&#208;&#181;&#208;&#189;&#208;&#176; 102">
        <g id="text-1">
        <g id="Frame 102">
        <path d="M856 556C856 547.163 863.163 540 872 540H1171V628C1171 636.837 1163.84 644 1155 644H872C863.163 644 856 636.837 856 628V556Z" fill="white"/>
        <text id="&#208;&#159;&#209;&#128;&#208;&#184;&#208;&#178;&#208;&#181;&#209;&#130;, {{userName}}!" fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="901" y="591.977">&#x41f;&#x440;&#x438;&#x432;&#x435;&#x442;, {{userName}}!</tspan></text>
        </g>
        <path id="Vector 17" d="M1169 540H1189L1170.71 559.208L1169 561V558.465V540Z" fill="white"/>
        </g>
        </g>
    </svg>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { onMounted, nextTick } from 'vue'
import bg from "@/assets/slides-images/first/bg.webp"
const user = useUserStore()
const { userName } = storeToRefs(user)

// eslint-disable-next-line no-undef
const emit = defineEmits(['question'])

onMounted(async () => {
    await nextTick()

    const text1 = document.querySelector('#text-1')
    
    setTimeout(() => {
        text1.classList.add('visible')
    }, 500)

    setTimeout(() => {
        emit('question')
    }, 1000)
})
</script>

<style lang="scss">
.iframe {
    position: relative;
    z-index: 1;
}

.tips {
    position: absolute;
    z-index: 2;
    bottom: 0;
    right: 0;
    background-color: #666;
    width: 400px;
    height: 600px;
    padding: 20px;

    .tip {
        width: 100%;
        height: 20px;
        border: 1px solid #000;
    }
}

</style>