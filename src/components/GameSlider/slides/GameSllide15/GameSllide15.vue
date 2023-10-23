<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg17" alt="slide">

    <svg width="1920" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
<g>
<g id="text-1">
<path id="Vector 17" d="M854 435H834L852.293 416.707L854 415V417.414V435Z" fill="white"/>
<g id="Frame 102">
<path d="M853 318C853 309.163 860.163 302 869 302H1618C1626.84 302 1634 309.163 1634 318V419C1634 427.837 1626.84 435 1618 435H853V318Z" fill="white"/>
<text fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="898" y="353.977">{{userName}}, ты отлично справился со всеми заданиями!</tspan></text>
</g>
</g>
<g id="text-2">
<path id="Vector 17_2" d="M854 411H834L852.293 392.707L854 391V393.414V411Z" fill="white"/>
<g id="Frame 102_2">
<path d="M853 323C853 314.163 860.163 307 869 307H1618C1626.84 307 1634 314.163 1634 323V395C1634 403.837 1626.84 411 1618 411H853V323Z" fill="white"/>
<text fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="898" y="358.977">Ты заработал свои первые деньги. Узнай, как их получить!</tspan></text>
</g>
</g>
<g id="text-3">
<path id="Vector 17_3" d="M854 460V480L835.707 461.707L834 460H836.414H854Z" fill="white"/>
<g id="Frame 102_3">
<path d="M853 460H1618C1626.84 460 1634 467.163 1634 476V548C1634 556.837 1626.84 564 1618 564H869C860.163 564 853 556.837 853 548V460Z" fill="white"/>
<text fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="898" y="511.977">У тебя есть два варианта.</tspan></text>
</g>
</g>
<g id="further-btn">
<rect x="617" y="921" width="685" height="69" rx="20" fill="white"/>
<text fill="#010101" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="854.969" y="962.977">&#x41f;&#x440;&#x43e;&#x434;&#x43e;&#x43b;&#x436;&#x438;&#x442;&#x44c;</tspan></text>
<g id="Group 528">
<rect id="Rectangle 197" x="1014.97" y="954.5" width="42" height="2" fill="#010101"/>
<path id="Polygon 2" d="M1064.03 955.5L1049.78 962.428L1054.47 955.5L1049.78 948.572L1064.03 955.5Z" fill="#010101"/>
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