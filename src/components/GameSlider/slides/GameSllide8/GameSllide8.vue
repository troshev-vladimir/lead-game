<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg10" alt="slide">
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
            <g id="text-101">
                <g id="Frame 102">
                    <path d="M147 311C147 302.163 154.163 295 163 295H912C920.837 295 928 302.163 928 311V438H163C154.163 438 147 430.837 147 422V311Z" fill="white"/>
                    <text id="value" fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="192" y="349.477">&#x42d;&#x442;&#x43e; &#x43d;&#x430;&#x448;&#x438; &#x440;&#x430;&#x437;&#x440;&#x430;&#x431;&#x43e;&#x442;&#x447;&#x438;&#x43a;&#x438;. &#x41e;&#x43d;&#x438; &#x442;&#x43e;&#x436;&#x435; &#x43a;&#x43e;&#x433;&#x434;&#x430;-&#x442;&#x43e; &#x431;&#x44b;&#x43b;&#x438; &#x43d;&#x430; &#x442;&#x432;&#x43e;&#x435;&#x43c; </tspan><tspan x="192" y="383.477">&#x43c;&#x435;&#x441;&#x442;&#x435; &#x438; &#x442;&#x43e;&#x43b;&#x44c;&#x43a;&#x43e; &#x43d;&#x430;&#x447;&#x438;&#x43d;&#x430;&#x43b;&#x438; &#x441;&#x432;&#x43e;&#x439; &#x43f;&#x443;&#x442;&#x44c; 1&#x421; &#x43f;&#x440;&#x43e;&#x433;&#x440;&#x430;&#x43c;&#x43c;&#x438;&#x441;&#x442;&#x430;.</tspan></text>
                </g>
                <path id="Vector 17" d="M927 438V418L945.293 436.293L947 438H944.586H927Z" fill="white"/>
            </g>
        </g>
    </svg>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import bg10 from "@/assets/slides-images/ten/bg.webp"
import vitaly from './assets/vitaly.mp3'

const audioVitaly1 = new Audio(vitaly)

onMounted(async () => {
    await nextTick()

    const text1 = document.querySelector('#text-101')
    
    setTimeout(() => {
        audioVitaly1.play()
        text1.classList.add('visible')
    }, 1000)
})

onBeforeUnmount(() => {
    audioVitaly1.pause()
})
</script>

<style lang="scss">

</style>