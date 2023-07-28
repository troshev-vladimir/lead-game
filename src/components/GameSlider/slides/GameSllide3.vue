<template>
<video ref="video" >
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
</video>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// eslint-disable-next-line no-undef
// const emit = defineEmits(['nextSlide'])
const video = ref(null)

onMounted(() => {
    video.value.play()
}) 
</script>

<style lang="scss">
video {
    height: 100%;
}
</style>