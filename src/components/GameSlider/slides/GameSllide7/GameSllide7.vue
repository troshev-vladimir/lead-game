<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg7" alt="slide">
    <svg :class="{'no-continue-button': !isContinueBtn}" width="1920" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
    <g id="text-3">
    <g id="Frame 102">
    <path d="M251 408C251 399.163 258.163 392 267 392H1032V509C1032 517.837 1024.84 525 1016 525H267C258.163 525 251 517.837 251 509V408Z" fill="white"/>
    <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="296" y="443.977">Пойдем к нашим разработчикам, лучше них про это никто не</tspan><tspan x="296" y="472.977">расскажет.</tspan></text>
    </g>
    <path id="Vector 17" d="M1031 392H1051L1032.71 410.293L1031 412V409.586V392Z" fill="white"/>
    </g>
    <g id="further-btn">
    <rect x="617" y="918" width="685" height="72" rx="20" fill="white"/>
    <text fill="#010101" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="854.971" y="961.477">&#x41f;&#x440;&#x43e;&#x434;&#x43e;&#x43b;&#x436;&#x438;&#x442;&#x44c;</tspan></text>
    <g id="Group 528">
    <rect id="Rectangle 197" x="1014.97" y="953" width="42" height="2" fill="#010101"/>
    <path id="Polygon 2" d="M1064.03 954L1049.78 960.928L1054.47 954L1049.78 947.072L1064.03 954Z" fill="#010101"/>
    </g>
    </g>
    <g>
    <g id="text-2">
    <g id="Frame 102">
    <path d="M228 312C228 303.163 235.163 296 244 296H993C1001.84 296 1009 303.163 1009 312V429H244C235.163 429 228 421.837 228 413V312Z" fill="white"/>
    <text id="value" fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="273" y="347.977">«1С программист» – самая простая профессия для входа</tspan><tspan x="273" y="376.977">в IT-мир.</tspan></text>
    </g>
    <path id="Vector 17" d="M1008 429V409L1026.29 427.293L1028 429H1025.59H1008Z" fill="white"/>
    </g>
    </g>
</g>
    </svg>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
// import { useUserStore } from '@/store/user'
// import { storeToRefs } from 'pinia'
import bg7 from "@/assets/slides-images/seven/bg.webp"
import useFurtherButton from '../../composables/useFurtherButton'
import vitaly from './assets/vitaly.mp3'
import vitaly2 from './assets/vitaly2.mp3'

// eslint-disable-next-line no-undef
const emit = defineEmits(['continue']) 
const replicStep = ref(0)
const isContinueBtn = ref(true)
const replicStepAskWaiting = ref(true)
const audioVitaly1 = new Audio(vitaly)
const audioVitaly2 = new Audio(vitaly2)

let text3
let text4
useFurtherButton()
watch(replicStep, (value) => {
    switch (value) {
        case 1:
            audioVitaly1.pause()
            text4.classList.add('visible')
            audioVitaly2.play()
    
            setTimeout(() => {
                emit('continue')
            }, 1000)
            break;

        default:
            break;
    }
})
// const user = useUserStore()
// const { userName } = storeToRefs(user)

onMounted(async () => {
    await nextTick()

    document.addEventListener('nextReplic', () => {
        if (!replicStepAskWaiting.value) {
            replicStep.value += 1
        }

    })

    text3 = document.querySelector('#text-2')
    text4 = document.querySelector('#text-3')


    setTimeout(() => {
        text3.classList.add('visible')
        replicStepAskWaiting.value = false
        audioVitaly1.play()
    }, 1500)
})

onBeforeUnmount(() => {
    audioVitaly2.pause()
})

</script>

<style scoped lang="scss">
#interactive {
    display: none;

    &.active {
        display: block;
    }
}

.no-continue-button #further-btn{
  display: none;
}
</style>