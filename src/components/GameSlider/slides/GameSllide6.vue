<!-- eslint-disable vue/no-parsing-error -->
<template>
    <Transition name="fade">
        <firstStep v-show="step >= 0" style="z-index='10'" :user-name="userName" />
    </Transition>

    <Transition name="fade">
        <secondStep v-show="step >= 1" style="z-index='20'" :user-name="userName" />
    </Transition>

    <Transition name="fade">
        <thirdStep v-show="step >= 2" style="z-index='30'" :user-name="userName" />
    </Transition>

    <Transition name="fade">
        <fourthStep v-show="step >= 3" style="z-index='40'" :user-name="userName"/>
    </Transition>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import firstStep from '@/components/slide6steps/firstStep.vue'
import secondStep from '@/components/slide6steps/secondStep.vue'
import thirdStep from '@/components/slide6steps/thirdStep.vue'
import fourthStep from '@/components/slide6steps/fourthStep.vue'
const step = ref(0)

const user = useUserStore()
const { userName } = storeToRefs(user)
// eslint-disable-next-line no-undef
// const emit = defineEmits(['nextSlide'])


onMounted(async () => {
    await nextTick()

    const text1 = document.querySelector('#text-1')
    const text2 = document.querySelector('#text-2')
    const text3 = document.querySelector('#text-3')
    const text4 = document.querySelector('#text-4')
    const text5 = document.querySelector('#text-5')
    
    setTimeout(() => { // первый текст
        text1.classList.add('visible')
    }, 1500)

    setTimeout(() => { // Мужик появился
        step.value++
    }, 3500)

    setTimeout(() => { // Мужик реплика
        text2.classList.add('visible')
    }, 4500)

    setTimeout(() => { // Мужик назад
        step.value++
    }, 9000)

    setTimeout(() => { // Представила Яну
        text3.classList.add('visible')
    }, 10500)

    setTimeout(() => { // Подсветили Яну
        step.value++
    }, 14000)

    setTimeout(() => { // Яна
        text4.classList.add('visible')
    }, 15000)

    setTimeout(() => { // Пошли работать
        text5.classList.add('visible')
    }, 17000)
    
})
</script>

<style lang="scss" scoped>
[id|=text] {
    opacity: 0;
}
</style>