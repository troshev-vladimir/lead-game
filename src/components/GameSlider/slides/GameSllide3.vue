<template>
<!-- controls -->
<video ref="video" >
    <source src="https://dl.dropboxusercontent.com/s/t6w9pil8yhkkc9i32atjv/22.mp4?rlkey=5r6uh0ge3m7vmy82g2943jydm&dl=0" type="video/mp4">
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
        console.log('adsasd');
        emit('nextSlide')
    });
}) 
</script>

<style lang="scss">
video {
    // height: 100%;
}
</style>