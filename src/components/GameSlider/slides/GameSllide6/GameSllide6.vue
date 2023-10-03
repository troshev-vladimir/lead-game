<template>
<!-- controls -->
<video ref="video" >
    <source src="https://dl.dropbox.com/s/ageqjjm7s7yey7mcah38d/2.mp4?rlkey=sb2f7sxyf8z6yi9qst06ljt3z&dl=0" type="video/mp4">
</video>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// eslint-disable-next-line no-undef
const emit = defineEmits(['nextSlide'])

const video = ref(null)

onMounted(() => {
    video.value.play()

    video.value.addEventListener('ended', () => {
        emit('nextSlide')
    });
}) 
</script>

<style lang="scss">

</style>