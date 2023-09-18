<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="customer-modal-task">
        <video ref="video" preload autoplay>
            <source :src="videoLink" type="video/mp4">
        </video>
        <div class="customer-modal-task__text" v-html="text"></div>
        <button :disabled="!isAwailablebutton" @click="goFurther">
            {{isCongrates ? "Спасибо, я старался" : "Приступить к выполнению"}}
        </button>
    </div>
</template>

<script setup>
import { defineEmits,defineProps, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
const emit = defineEmits(['further'])
const video = ref(null)
const isAwailablebutton = ref(true) // false
const props = defineProps({
    isCongrates: {
        type: Boolean,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
})
const goFurther = () => {
    emit('further')
}

const videoEndHandler = () => {
    isAwailablebutton.value = true
}

onMounted(() => {
    video.value.play()
    video.value.addEventListener('ended', videoEndHandler);
})

onBeforeUnmount(() => {
    video.value.pause()
    video.value.removeEventListener('ended', videoEndHandler);
})

</script>
<style lang="scss" scoped>
.customer-modal-task {
    z-index: 1000;
    overflow: hidden;
    border-radius: 16px;
    max-width: 850px;
    max-height: 850px;
    height: 80vh;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    video {
        width: 100%;
        position: static;
        transform: none;
        height: 30vh;
        object-fit: cover;
        background-color: #333;
        height: 851px;
    }

    &__text {
        padding: 32px 48px;
        overflow: auto;

        color: #010101;
        font-size: 22px;
        font-weight: 500;
        line-height: 130%;
        text-align: left;

        p:not(:last-child) {
            padding-bottom: 20px;
        }

        @media screen and (max-width: 1200px) {
            p:not(:last-child) {
                padding-bottom: 8px;
            }
            
            font-size: 16px;
            padding: 16px;
        }
    }

    button {
        width: 100%;
        background-color: #fff;
        padding: 20px 30px;
        color: #010101;
        font-size: 22px;
        font-weight: 500;
        line-height: 130%; 
        border: none;
        border-top: 1px solid #CCC;
        cursor: pointer;
        transition: all ease .2s;

        &:disabled {
            pointer-events: none;
        }

        &:hover {
            background-color: #bbb5b5;
        }

        @media screen and (max-width: 1200px) {
            font-size: 16px;
            padding: 16px;
        }
    }
}
</style>