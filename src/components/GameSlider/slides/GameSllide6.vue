<!-- eslint-disable vue/no-parsing-error -->
<template>
    <transition-group name="fade" mode="out-in">
        <firstStep v-if="step === 0" />
        <secondStep v-if="step === 1" />
        <thirdStep v-if="step === 2" />
        <fourthStep v-if="step === 3"/>
    </transition-group>

    <TextsComponent :user-name="userName"></TextsComponent>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import firstStep from '@/components/slide6steps/firstStep.vue'
import secondStep from '@/components/slide6steps/secondStep.vue'
import thirdStep from '@/components/slide6steps/thirdStep.vue'
import fourthStep from '@/components/slide6steps/fourthStep.vue'
import TextsComponent from '@/components/slide6steps/TextsComponent.vue'

// eslint-disable-next-line no-undef
const emit = defineEmits(['continue']) 

const step = ref(0)
const user = useUserStore()
const { userName } = storeToRefs(user)

let text1 
let text2 
let text3 
let text4 
let text5 

const nextStep = () => {
    
    text2.classList.remove('visible')

    setTimeout(() => { // Мужик назад
        step.value++
    }, 1000)  
    
    setTimeout(() => { // Представила Яну
        text3.classList.add('visible')
    }, 2000)

    setTimeout(() => { // Представила Яну
        text3.classList.remove('visible')
    }, 2500)

    setTimeout(() => { // Подсветили Яну
        step.value++
    }, 3000)

    setTimeout(() => { // Яна
        text5.classList.add('visible')
    }, 4000)

    setTimeout(() => { // Яна
        text5.classList.remove('visible')
    }, 4500)

    setTimeout(() => { // Пошли работать
        text4.classList.add('visible')
        emit('continue')
    }, 5000)
}

onMounted(async () => {
    await nextTick()

    text1 = document.querySelector('#text-1')
    text2 = document.querySelector('#text-2')
    text3 = document.querySelector('#text-3')
    text4 = document.querySelector('#text-4')
    text5 = document.querySelector('#text-5')
    
    setTimeout(() => { // первый текст
        text1.classList.add('visible')
    }, 1500)

    setTimeout(() => { // первый текст
        text1.classList.remove('visible')
    }, 3000)

    setTimeout(() => { // Мужик появился
        step.value++
    }, 3500)

    setTimeout(() => { // Мужик реплика
        text2.classList.add('visible')
    }, 4500)

    // Ждём выбора
})

// eslint-disable-next-line no-undef
defineExpose({
  nextStep
})

</script>

<style lang="scss">

</style>