<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="wrapper">
        <div class="customer-call">
            <div class="customer-call__img">
                <picture>
                    <source srcset="./img/1.webp" />
                    <img src="./img/1.png" alt="Заказчик">
                </picture>
            </div>

            <div class="customer-call__text">
                <h1 class="customer-call__name">{{currentData.name}}</h1>
                <p class="customer-call__position">{{currentData.position}}</p>
                <p class="customer-call__company">{{currentData.conmpany}}</p>
            </div>
            <button class="customer-call__button" @click="emit('further')">
                <img width="50" height="50" src="./img/phone.svg" alt="phone">
            </button>
            <audio ref="ringingRef" :src="ringing" loop>
            </audio>
        </div>
    </div>
    
</template>

<script setup>
import { onMounted, defineEmits, defineProps, ref, computed } from 'vue';
import ringing from '@/assets/audio/ringing.mp3';
const emit = defineEmits(['further']);
const ringingRef = ref(null)
const props = defineProps({
    customer: {
        type: Number,
        default: 0
    }
})

const currentData = computed(() => {
    return data[props.customer]
}) 

const data = {
    1: {
        name: 'Аркадий Николаевич',
        conmpany: 'Компания «Сантехмир»',
        position: 'Руководитель'
    },
    0: {
        name: 'Антон Юрьевич',
        position: 'Руководитель',
        conmpany: 'Компания «СпортОпт»'
    }
}

onMounted(() => {
    const promise = ringingRef.value.play();
        if (promise !== undefined) {
            promise.then(_ => {
                console.log(_);
            }).catch(error => {
                console.log(error);
            });
        }
}) 
</script>
<style lang="scss" scoped>
.wrapper {
    max-width: 650px;
    z-index: 1000;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1200px) {
        max-width: 400px;
        width: 90vw;
    }
}
.customer-call {
    border-radius: 16px;
    object-fit: contain;
    background-color: #000;
    object-fit: contain;
    display: flex;
    flex-direction: column;
    padding: 30px 60px ;
    height: 100%;

    &__img {
        height: 0;
        padding-bottom: 100%;
        margin-bottom: 40px;
        position: relative;
        width: 100%;

        picture {
            img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 100%;
                overflow: hidden;
                transform: none;
            }
        }

        @media screen and (max-width: 1200px) {
            padding-bottom: 70%;
            width: 70%;
            margin: 0 auto 20px;
        }
    }

    &__text {
        margin-bottom: 40px;
        @media screen and (max-width: 1200px) {
            margin-bottom: 20px;
        }
        p {
            text-align: center;
            width: 100%;
            color: #CCC;
            text-align: center;
            font-size: 20px;
            font-weight: 400;
            line-height: 130%; 
        }
    }

    .customer-call__name {
        font-size: 30px;
        color: #CCC;
        font-weight: 600;
        line-height: 130%; 
    }

    &__button {
        display: flex;
        padding: 20px 20px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 16px;
        background: #26A669;
        animation: ringing ease 1s infinite;
        border: none;
        cursor: pointer;

        img {
            position: static;
            transform: none;
        }
    }

    @keyframes ringing {
        0% {
            outline: 8px double rgba(38, 166, 105, 1);
        }

        100% {
            outline: 20px double rgba(38, 166, 105, 0);
        }
    }
}
</style>