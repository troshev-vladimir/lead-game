<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg7" alt="slide">
    <svg :class="{'no-continue-button': !isContinueBtn}" width="1920" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">

<g>
    <g id="text-2">
        <g id="Frame 102_2">
<path d="M228 312C228 303.163 235.163 296 244 296H993C1001.84 296 1009 303.163 1009 312V429H244C235.163 429 228 421.837 228 413V312Z" fill="white"/>
<text id="value_2" fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="273" y="347.977">&#xab;1&#x421; &#x43f;&#x440;&#x43e;&#x433;&#x440;&#x430;&#x43c;&#x43c;&#x438;&#x441;&#x442;&#xbb; &#x2013; &#x441;&#x430;&#x43c;&#x430;&#x44f; &#x43f;&#x440;&#x43e;&#x441;&#x442;&#x430;&#x44f; &#x43f;&#x440;&#x43e;&#x444;&#x435;&#x441;&#x441;&#x438;&#x44f; &#x434;&#x43b;&#x44f; &#x432;&#x445;&#x43e;&#x434;&#x430;&#10;</tspan><tspan x="273" y="376.977">&#x432; IT-&#x43c;&#x438;&#x440;.</tspan></text>
</g>
<path id="Vector 17_2" d="M1008 429V409L1026.29 427.293L1028 429H1025.59H1008Z" fill="white"/>
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
    <g id="text-3">
        <g id="Frame 102">
<path d="M228 465C228 456.163 235.163 449 244 449H1009V566C1009 574.837 1001.84 582 993 582H244C235.163 582 228 574.837 228 566V465Z" fill="white"/>
<text id="value" fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="273" y="500.977">&#x41f;&#x43e;&#x439;&#x434;&#x435;&#x43c; &#x43a; &#x43d;&#x430;&#x448;&#x438;&#x43c; &#x440;&#x430;&#x437;&#x440;&#x430;&#x431;&#x43e;&#x442;&#x447;&#x438;&#x43a;&#x430;&#x43c;, &#x43b;&#x443;&#x447;&#x448;&#x435; &#x43d;&#x438;&#x445; &#x43f;&#x440;&#x43e; &#x44d;&#x442;&#x43e; &#x43d;&#x438;&#x43a;&#x442;&#x43e; &#x43d;&#x435; </tspan><tspan x="273" y="529.977">&#x440;&#x430;&#x441;&#x441;&#x43a;&#x430;&#x436;&#x435;&#x442;.</tspan></text>
</g>
<path id="Vector 17" d="M1008 449H1028L1009.71 467.293L1008 469V466.586V449Z" fill="white"/>
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

let isLoadding = ref(true)

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