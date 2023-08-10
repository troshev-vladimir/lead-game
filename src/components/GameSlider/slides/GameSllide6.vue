<!-- eslint-disable vue/no-parsing-error -->
<template>
    <Transition name="fade" mode="out-in">
        <firstStep v-show="step >= 0" :user-name="userName" />
    </Transition>

    <Transition name="fade" mode="out-in">
        <secondStep v-show="step >= 1" :user-name="userName" />
    </Transition>

    <Transition name="fade" mode="out-in">
        <thirdStep v-show="step >= 2" :user-name="userName" />
    </Transition>

    <fourthStep v-show="step >= 3" :user-name="userName"/>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import firstStep from '@/components/slide6steps/firstStep.vue'
import secondStep from '@/components/slide6steps/secondStep.vue'
import thirdStep from '@/components/slide6steps/thirdStep.vue'
import fourthStep from '@/components/slide6steps/fourthStep.vue'

// eslint-disable-next-line no-undef
const emit = defineEmits(['continue']) 

const step = ref(0)
const user = useUserStore()
const { userName } = storeToRefs(user)

const nextStep = () => {
    const text3 = document.querySelector('#text-3')
    const text4 = document.querySelector('#text-4')
    const text5 = document.querySelector('#text-5')

    setTimeout(() => { // Мужик назад
        step.value++
    }, 1000)  
    
    setTimeout(() => { // Представила Яну
        text3.classList.add('visible')
    }, 2000)

    setTimeout(() => { // Подсветили Яну
        step.value++
    }, 3000)

    setTimeout(() => { // Яна
        text4.classList.add('visible')
    }, 4000)

    setTimeout(() => { // Пошли работать
        text5.classList.add('visible')
        emit('continue')
    }, 5000)
}

onMounted(async () => {
    await nextTick()

    const text1 = document.querySelector('#text-1')
    const text2 = document.querySelector('#text-2')
    
    
    setTimeout(() => { // первый текст
        text1.classList.add('visible')
    }, 1500)

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