<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg20" alt="slide">

    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
        <g id="text-201">
        <g id="Frame 102">
        <path d="M442 475C442 466.163 449.163 459 458 459H1223V576C1223 584.837 1215.84 592 1207 592H458C449.163 592 442 584.837 442 576V475Z" fill="white"/>
        <text id="value" fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="487" y="510.977">Для этого пройди обучение в нашем учебном центре: собери</tspan><tspan x="487" y="539.977">под себя программу обучения.</tspan></text>
        </g>
        <path id="Vector 17" d="M1222 459H1242L1223.71 477.293L1222 479V476.586V459Z" fill="white"/>
        </g>
        </g>
</svg>


</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import bg20 from "@/assets/slides-images/twenty/bg.webp"
import irina from './assets/irina.mp3'

const audioIrina = new Audio(irina)

// eslint-disable-next-line no-undef
const emit = defineEmits(['continue'])

const replicStepAskWaiting = ref(false)

const nextStep = () => {
    replicStepAskWaiting.value = false
    replicStep.value += 1
}

let text1

const replicStep = ref(0)

watch(replicStep, (value) => {
    switch (value) {
        case 1:
            
            break;

        default:
            break;
    }
    
})

onMounted(async () => {
    await nextTick()

    document.addEventListener('nextReplic', () => {
        replicStep.value += 1
    })

    text1 = document.querySelector('#text-201')

    setTimeout(() => {
        audioIrina.play()
        text1.classList.add('visible')
    }, 500)

    setTimeout(() => {
        emit('continue')
    }, 1500)
})

// eslint-disable-next-line no-undef
defineExpose({
    nextStep
})
</script>

<style lang="scss">

</style>