<template>
<!-- controls -->
<video ref="video" >
    <source src="https://dl.dropbox.com/s/sho9ksrlzq2uj0wjfi40o/1.mp4?rlkey=m6ld6qkrkv44rjye6pk13lf5z&raw=1" type="video/mp4">
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
video {
    // height: 100%;
}
</style>