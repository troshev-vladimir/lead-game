<template>
<!-- controls -->
<q-circular-progress
      indeterminate
      rounded
      size="50px"
      color="while"
      class="q-ma-md"
      v-if="isLoadding"
    />
<video ref="video" v-if="!isLoadding">
    <source src="https://dl.dropbox.com/s/tlcs552gbci26m4823v9s/_-_-_-_-_-_.mp4?rlkey=fgxdklc67tunpx6wmnvex2yu9&raw=1" type="video/mp4">
</video>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// eslint-disable-next-line no-undef
const emit = defineEmits(['nextSlide'])

const video = ref(null)

const loadding = ref(true)

onMounted(() => {   
    video.value.play()
    video.value.addEventListener('ended', () => {
        emit('nextSlide')
    });
})

</script>

<style lang="scss">

</style>