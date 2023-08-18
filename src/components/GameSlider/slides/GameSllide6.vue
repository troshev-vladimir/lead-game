<!-- eslint-disable vue/no-parsing-error -->
<template>
    <transition-group class="trancition" name="fade" mode="out-in">
        <firstStep v-if="imageStep === 0" />
        <secondStep v-if="imageStep === 1" />
        <thirdStep v-if="imageStep === 2" />
        <fourthStep v-if="imageStep === 3"/>
    </transition-group>

    <TextsComponent :user-name="userName"></TextsComponent>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import firstStep from '@/components/slide6steps/firstStep.vue'
import secondStep from '@/components/slide6steps/secondStep.vue'
import thirdStep from '@/components/slide6steps/thirdStep.vue'
import fourthStep from '@/components/slide6steps/fourthStep.vue'
import TextsComponent from '@/components/slide6steps/TextsComponent.vue'

// eslint-disable-next-line no-undef
const emit = defineEmits(['continue']) 

const imageStep = ref(0)
const replicStep = ref(0)
const replicStepAskWaiting = ref(false)
const user = useUserStore()
const { userName } = storeToRefs(user)

let text1 
let text2 
let text3 
let text4 
let text5 

const nextStep = () => {
    replicStepAskWaiting.value = false
    replicStep.value += 1
}

watch(replicStep, (value) => {
    switch (value) {
        case 1:
            text1.classList.remove('visible')
            imageStep.value++
            break;
        case 2:
            text2.classList.add('visible')
            break;

        case 3:
            emit('question')
            replicStepAskWaiting.value = true
            break;

        case 4:
            text2.classList.remove('visible')
            text3.classList.add('visible')
            imageStep.value++
            break;

        case 5:
            text3.classList.remove('visible')
            text5.classList.add('visible')
            imageStep.value++

            break;

        case 6:
            text5.classList.remove('visible')
            text4.classList.add('visible')
            break;

        case 7:
            emit('continue')
            break;

        case 8:
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
    text4 = document.querySelector('#text-65')
    text5 = document.querySelector('#text-64')
    
    setTimeout(() => { // первый текст
        text1.classList.add('visible')
    }, 500)
})

// eslint-disable-next-line no-undef
defineExpose({
  nextStep
})

</script>

<style lang="scss">

</style>