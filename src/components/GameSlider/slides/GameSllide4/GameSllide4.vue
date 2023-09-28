<!-- eslint-disable vue/no-parsing-error -->
<template>
    <transition-group name="fade" mode="">
        <firstStep v-if="imageStep === 0" />
        <secondStep v-if="imageStep === 1" />
        <thirdStep v-if="imageStep === 2" />
        <fourthStep v-if="imageStep === 3"/>
    </transition-group>
    <TextsComponent :user-name="userName"></TextsComponent>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import firstStep from '@/components/slide6steps/firstStep.vue'
import secondStep from '@/components/slide6steps/secondStep.vue'
import thirdStep from '@/components/slide6steps/thirdStep.vue'
import fourthStep from '@/components/slide6steps/fourthStep.vue'
import TextsComponent from '@/components/slide6steps/TextsComponent.vue'
import useFurtherButton from '../../composables/useFurtherButton'

import sound1 from './assets/test.mp3'
import vitaly1 from './assets/vitaly1.mp3'
import sound3 from './assets/test3.mp3'
import sound4 from './assets/test4.mp3'
// eslint-disable-next-line no-undef
const emit = defineEmits(['continue']) 

const imageStep = ref(0)
const replicStep = ref(0)
const replicStepAskWaiting = ref(false)
const user = useUserStore()
const { userName } = storeToRefs(user)
const audio = new Audio(sound1)
const audioVitaly1 = new Audio(vitaly1)
const audio3 = new Audio(sound3)
const audio4 = new Audio(sound4)

useFurtherButton()
let text1 
let text2 
let text3 
let text4 

// const currentSound = computed(() => {
//     switch (replicStep.value) {
//         case 1:
//             return sound2
//         default:
//             return sound
//     }
// })

const nextStep = () => {
    replicStepAskWaiting.value = false
    replicStep.value += 1
}

watch(replicStep, (value) => {
    switch (value) {
        case 1:
            audio.pause()
            text1.classList.remove('visible')
            imageStep.value++
            text2.classList.add('visible')
            
            audioVitaly1.play()

            replicStepAskWaiting.value = true
            setTimeout(() => {
                emit('question')
                
            }, 1500)
            
            break;
        case 2:
            audioVitaly1.pause()

            text2.classList.remove('visible')
            text3.classList.add('visible')
            audio3.play()

            imageStep.value++
            break;

        case 3:
            audio3.pause()

            text3.classList.remove('visible')
            imageStep.value++
            
            setTimeout(() => {
                text4.classList.add('visible')
                audio4.play()
            }, 500)

            setTimeout(() => {
                emit('continue')
            }, 1500)
            break;

        default:
            break;
    }
})



onMounted(async () => {
    await nextTick()

    document.addEventListener('nextReplic', () => {
        if (!replicStepAskWaiting.value) {
            replicStep.value += 1
        }
    })

    text1 = document.querySelector('#text-61')
    text2 = document.querySelector('#text-62')
    text3 = document.querySelector('#text-63')
    text4 = document.querySelector('#text-64')
    
    setTimeout(() => { // первый текст
        text1.classList.add('visible')
        audio.play()
    }, 1500)
})

onBeforeUnmount(() => {
    audio4.pause()
})

// eslint-disable-next-line no-undef
defineExpose({
  nextStep
})

</script>

<style lang="scss">

</style>