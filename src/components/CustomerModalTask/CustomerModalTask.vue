<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="customer-modal-task">
        <div class="video-container">
            <video ref="video" preload autoplay :poster="customer ? customer2 : customer1">
                <source :src="videoLink" type="video/mp4">
            </video>
        </div>
        <div class="customer-modal-task__text styled-scrollbars" v-html="text"></div>
        <button :disabled="!isAwailablebutton" @click="goFurther">
            {{isCongrates ? "Перейти к следующему заданию" : "Приступить к выполнению"}}
        </button>
    </div>
</template>

<script setup>
import customer1 from '@/assets/video-posters/customer1.jpg'
import customer2 from '@/assets/video-posters/customer2.jpg'
import { defineEmits,defineProps, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
const emit = defineEmits(['further'])
const video = ref(null)
const isAwailablebutton = ref(false)
const props = defineProps({
    isCongrates: {
        type: Boolean,
        required: true
    },
    customer: {
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

    if (process.env.NODE_ENV === 'development') {
        isAwailablebutton.value = true
    } 
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
    max-width: 650px;
    max-height: 85vh;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        max-width: 400px;
        width: 90vw;
    }
    
    .video-container {
        width: 100%;
        height: 0;
        background-color: #000000;
        padding-bottom: 56.25%;
    }

    video {
        position: static;
        transform: none;
    }

    &__text {
        padding: 32px 48px;
        overflow: auto;
        flex-grow: 1;
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
        font-family: inherit;

        &:disabled {
            pointer-events: none;
            color: #999;
        }

        &:hover {
            color: #0075EB;
        }

        @media screen and (max-width: 1200px) {
            font-size: 16px;
            padding: 16px;
        }
    }
}
</style>

НачальнаяПозиция = СтрНайти(ШапкаДокумента, «ИНН:»);