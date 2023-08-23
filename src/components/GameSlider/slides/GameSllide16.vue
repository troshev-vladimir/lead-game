<template>
    <iframe class="iframe" src="http://max43.ru:9444/IntroProduct?N=Задачи&C=Задача1" width="100%" height="100%" scrolling="auto"> </iframe>


    <div class="tips" @click="emit('nextSlide')">
        <iframe class="iframe" src="http://127.0.0.1:5500/src/index.html" width="100%" height="100%" scrolling="auto"> </iframe>
    </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const emit = defineEmits(['nextSlide'])

</script>

<style>
.iframe {
    width: 70vw;
    height: 100%;
}

.tips {
    width: 30vw;
    height: 100%;
    padding: 0;
}
</style>