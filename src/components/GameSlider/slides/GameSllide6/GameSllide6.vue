<template>
<!-- controls -->
<video ref="video" >
    <source src="https://dl.dropbox.com/s/xurndnmx4kc72r17rx8p4/7.mp4?rlkey=6syyksnrnx4e0z3w9ck6vxfth&dl=0" type="video/mp4">
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