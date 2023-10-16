<template>
<!-- controls -->
<video ref="video" >
    <source src="https://dl.dropbox.com/s/0xu0mjncndflvlpsirgcd/2.mp4?rlkey=h83j5h1xildzkjion12irytgk&dl=0" type="video/mp4">
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