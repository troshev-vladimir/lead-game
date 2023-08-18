<template>
    <iframe class="iframe" src="http://max43.ru:9444/IntroProduct?N=Задачи&C=Задача1" width="100%" height="100%" scrolling="auto"> </iframe>


    <div class="tips" @click="emit('nextSlide')">
        <div class="tip">
            Ткни что бы перейти дальше
        </div>
    </div>
</template>

<script setup>

// eslint-disable-next-line no-undef
const emit = defineEmits(['nextSlide'])

</script>

<style>

</style>