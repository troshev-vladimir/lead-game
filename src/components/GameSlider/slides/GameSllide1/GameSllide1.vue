<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg2" alt="slide">
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
        <g id="text-2">
        <path id="Vector 17" d="M881 337V357L862.707 338.707L861 337H863.414H881Z" fill="white"/>
        <g id="Frame 102">
        <path d="M880 337H1645C1653.84 337 1661 344.163 1661 353V532C1661 540.837 1653.84 548 1645 548H896C887.163 548 880 540.837 880 532V337Z" fill="white"/>
        <text id="value" fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="925" y="391.477">&#x414;&#x43e;&#x431;&#x440;&#x43e; &#x43f;&#x43e;&#x436;&#x430;&#x43b;&#x43e;&#x432;&#x430;&#x442;&#x44c; &#x432; IT!&#10;</tspan><tspan x="925" y="425.477">&#x421;&#x435;&#x439;&#x447;&#x430;&#x441; &#x442;&#x44b; &#x443;&#x437;&#x43d;&#x430;&#x435;&#x448;&#x44c;, &#x43a;&#x430;&#x43a; &#x443;&#x441;&#x442;&#x440;&#x43e;&#x435;&#x43d; &#x43c;&#x438;&#x440; 1&#x421; &#x43f;&#x440;&#x43e;&#x433;&#x440;&#x430;&#x43c;&#x43c;&#x438;&#x440;&#x43e;&#x432;&#x430;&#x43d;&#x438;&#x44f;. &#10;</tspan><tspan x="925" y="459.477">&#x410; &#x447;&#x443;&#x442;&#x44c; &#x43f;&#x43e;&#x437;&#x436;&#x435;, &#x43d;&#x430;&#x441;&#x442;&#x430;&#x432;&#x43d;&#x438;&#x43a; &#x412;&#x438;&#x442;&#x430;&#x43b;&#x438;&#x439; &#x434;&#x430;&#x441;&#x442; &#x442;&#x435;&#x431;&#x435; &#x437;&#x430;&#x434;&#x430;&#x43d;&#x438;&#x435;, &#x43d;&#x430; </tspan><tspan x="925" y="493.477">&#x43a;&#x43e;&#x442;&#x43e;&#x440;&#x43e;&#x43c; &#x442;&#x44b; &#x441;&#x43c;&#x43e;&#x436;&#x435;&#x448;&#x44c; &#x437;&#x430;&#x440;&#x430;&#x431;&#x43e;&#x442;&#x430;&#x442;&#x44c; &#x43f;&#x435;&#x440;&#x432;&#x44b;&#x435; &#x434;&#x435;&#x43d;&#x44c;&#x433;&#x438;!</tspan></text>
        </g>
        </g>
        </g>
    </svg>

</template>

<script setup>
import bg2 from "@/assets/slides-images/second/bg.webp"
import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import ann from './assets/ann.mp3'
const audioAnn1 = new Audio(ann)

// eslint-disable-next-line no-undef
const emit = defineEmits(['continue'])

onMounted(async () => {
    await nextTick()

    const text1 = document.querySelector('#text-2')
    setTimeout(() => {
        audioAnn1.play()
        text1.classList.add('visible')
    }, 500)

    setTimeout(() => {
        emit('continue')
    }, 1000)
})
onBeforeUnmount(() => {
    audioAnn1.pause()
})
</script>

<style lang="scss">

</style>