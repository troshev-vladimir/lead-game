<template>
<!-- controls -->
<video ref="video" >
    <source src="https://dl.dropboxusercontent.com/s/ufu1ofthqk5pjpusijup3/5.mp4?rlkey=tekcxjjuwuqsdg8oll6xm4b5k&dl=0" type="video/mp4">
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