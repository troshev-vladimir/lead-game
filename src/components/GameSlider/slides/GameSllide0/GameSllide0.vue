<!-- eslint-disable vue/no-parsing-error -->
<template>
    <img :src="bg" alt="slide">
    <svg width="1920" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
        <g id="text-1">
        <g id="Frame 102">
        <path d="M792 529C792 520.163 799.163 513 808 513H1108V615C1108 623.837 1100.84 631 1092 631H808C799.163 631 792 623.837 792 615V529Z" fill="white"/>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Gogh" font-size="22" font-weight="500" letter-spacing="0em"><tspan x="822" y="564.977">&#x41f;&#x440;&#x438;&#x432;&#x435;&#x442;, &#x43a;&#x430;&#x43a; &#x442;&#x435;&#x431;&#x44f; &#x437;&#x43e;&#x432;&#x443;&#x442;? </tspan><tspan x="822" y="593.977">&#x42f; &#x410;&#x43d;&#x43d;&#x430;.</tspan></text>
        </g>
        <path id="Vector 17" d="M1107 513H1127L1108.71 531.293L1107 533V530.586V513Z" fill="white"/>
        </g>
        </g>
    </svg>

    <transition name="fade">
        <UserInput 
            v-show="isInput"
            v-model="userNameInput" 
            @further="goFurther"
            button-text="Продолжить"
            :error-text="userNameInputError"
            class="name-input"
            placeholder="Ваше имя"
        ></UserInput>
    </transition>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { onMounted, nextTick, ref, onBeforeUnmount } from 'vue'
import bg from "@/assets/slides-images/first/bg.webp"
import { useNavigationStore } from '@/store/navigation'
import ann from './assets/ann.mp3'
import UserInput from '@/components/UserInput'

const user = useUserStore()
const { userName } = storeToRefs(user)
const navigation = useNavigationStore()
// eslint-disable-next-line no-undef
const emit = defineEmits(['question'])
const userNameInput = ref('')
const userNameInputError = ref('')
const isInput = ref(false)
const audioAnn1 = new Audio(ann)

const goFurther = () => {
    if (userNameInput.value.length > 10 || userNameInput.value.length < 3) {
        userNameInputError.value = 
        'Имя должно быть меньше 10 символов и больше 3. Cейчас ' +
            userNameInput.value.length
    } else {
        userName.value = userNameInput.value
        localStorage.setItem('userName', userNameInput.value)
        audioAnn1.pause()
        navigation.stepForward()
    }
}

const callback = () => {
    (e) => {
        if (e.key === 'Enter') {
            goFurther()
        }
    }
}

onMounted(async () => {
    await nextTick()
    const text1 = document.querySelector('#text-1')

    setTimeout(() => {
        isInput.value = true

        document.addEventListener('keypress', callback)
    }, 1000)
    
    setTimeout(() => {
        text1.classList.add('visible')
        audioAnn1.play()
    }, 500)

    // setTimeout(() => {
    //     emit('question')
    // }, 1000)
})

onBeforeUnmount(() => {
    document.removeEventListener('keypress', callback)
}) 
</script>

<style lang="scss" scoped>
.name-input {
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%);
}
</style>