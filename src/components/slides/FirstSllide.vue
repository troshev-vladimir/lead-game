<template>
    <slideOne></slideOne>
</template>

<script setup>
import slideOne from '@/assets/svg/Slide-1.vue'
import { onMounted } from 'vue'

onMounted(() => {
    // const btnTotext = document.querySelector('#to-text')
    const text = document.querySelector('#text-field')
    // btnTotext.addEventListener('click', () => {
    //     text.style.opacity = 1
    // })

    setTimeout(() => {
        text.classList.add('visible')
    }, 1500)
})
</script>

<style>
#text-field {
    opacity: 0;
}

#to-text {
    opacity: 0;
}

.visible {
    transition: all ease .5s;
    opacity: 1 !important;
}

#to-text:hover {
    opacity: 1;
    transition: all ease .2s;
    cursor: pointer;
}
</style>