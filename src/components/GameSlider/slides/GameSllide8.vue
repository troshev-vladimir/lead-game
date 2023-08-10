<template>
<video ref="video" controls >
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
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