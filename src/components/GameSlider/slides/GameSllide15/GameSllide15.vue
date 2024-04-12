<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg17" alt="slide">

    <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="&#208;&#161;&#209;&#134;&#208;&#181;&#208;&#189;&#208;&#176; 91">
<g id="text-1">
<path id="Vector 17" d="M854 435H834L852.293 416.707L854 415V417.414V435Z" fill="white"/>
<g id="Frame 102">
<path d="M853 318C853 309.163 860.163 302 869 302H1618C1626.84 302 1634 309.163 1634 318V419C1634 427.837 1626.84 435 1618 435H853V318Z" fill="white"/>
<text id="value" fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="898" y="353.977">{{ userName }}, &#x43e;&#x442;&#x43b;&#x438;&#x447;&#x43d;&#x430;&#x44f; &#x440;&#x430;&#x431;&#x43e;&#x442;&#x430;, &#x432;&#x441;&#x435; &#x437;&#x430;&#x434;&#x430;&#x43d;&#x438;&#x44f; &#x432;&#x44b;&#x43f;&#x43e;&#x43b;&#x43d;&#x435;&#x43d;&#x44b;!&#10;</tspan><tspan x="898" y="382.977">&#x41d;&#x43e; &#x441;&#x43f;&#x435;&#x440;&#x432;&#x430; &#x43d;&#x430;&#x434;&#x43e; &#x430;&#x432;&#x442;&#x43e;&#x440;&#x438;&#x437;&#x43e;&#x432;&#x430;&#x442;&#x44c;&#x441;&#x44f;</tspan></text>
</g>
</g>
</g>
</svg>

</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import bg17 from "@/assets/slides-images/seventeen/bg.webp"
import useFurtherButton from '../../composables/useFurtherButton'
import vitaly from './assets/vitaly.mp3'
import vitaly2 from './assets/vitaly2.mp3'
import vitaly3 from './assets/vitaly3.mp3'
// eslint-disable-next-line no-undef
const emit = defineEmits(['nextSlide', 'question'])

const user = useUserStore()
const { userName } = storeToRefs(user)
const replicStepAskWaiting = ref(false)
useFurtherButton()
const nextStep = () => {
    replicStepAskWaiting.value = false
    replicStep.value += 1
}
const audioVitaly1 = new Audio(vitaly)
const audioVitaly2 = new Audio(vitaly2)
const audioVitaly3 = new Audio(vitaly3)
let text1, text2, text3

const replicStep = ref(0)

watch(replicStep, (value) => {
    switch (value) {
        case 1:
            audioVitaly1.pause()
            text1.classList.remove('visible')
            setTimeout(() => {
                audioVitaly2.play()
                text2.classList.add('visible')
            }, 500)
            break;

        case 2:
            audioVitaly2.pause()
            audioVitaly3.play()
            text3.classList.add('visible')
            break;

        case 3:
            emit('nextSlide')

            break;

        default:
            break;
    }
    
})

onMounted(async () => {
    await nextTick()

    document.addEventListener('nextReplic', () => {
        if (replicStepAskWaiting.value === true) return 
        replicStep.value += 1
    })

    text1 = document.querySelector('#text-1')
    text2 = document.querySelector('#text-2')
    text3 = document.querySelector('#text-3')

    replicStepAskWaiting.value = true

    setTimeout(() => {
        text1.classList.add('visible')
        audioVitaly1.play()
    }, 500)

    setTimeout(() => {
        emit('question')
    }, 1500)
})

onBeforeUnmount(() => {
    audioVitaly3.pause()
})

// eslint-disable-next-line no-undef
defineExpose({
    nextStep
})
</script>

<style lang="scss">

</style>
