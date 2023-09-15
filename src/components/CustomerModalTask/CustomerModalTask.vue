<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="customer-modal-task">
        <video ref="video" >
            <source src="https://dl.dropboxusercontent.com/s/t6w9pil8yhkkc9i32atjv/22.mp4?rlkey=5r6uh0ge3m7vmy82g2943jydm&dl=0" type="video/mp4">
        </video>
        <div class="customer-modal-task__text">
            <slot/>
        </div>
        <button :disabled="!isAwailablebutton" @click="goFurther">
            Погнали
        </button>
    </div>
</template>

<script setup>
import { defineEmits, onBeforeUnmount, onMounted, onUnmounted, ref } from 'vue';
const emit = defineEmits(['further'])
const video = ref(null)
const isAwailablebutton = ref(true)

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
    z-index: 10;
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
    }
}
</style>