<template>
  <GameSlider></GameSlider>
  <NavigationMap class="navigation" :class="{hidden: !controls}"></NavigationMap>
  <NextButton class="next-btn" :class="{hidden: !controls}"></NextButton>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';
import { ref, watch } from "vue";

import GameSlider from '@/components/GameSlider'
import NavigationMap from '@/components/NavigationMap'
import NextButton from '@/components/NextButton'

const controls = ref(false)
const navigation = useNavigationStore()
const { currentStep } = storeToRefs(navigation)

watch(currentStep, () => {
  controls.value = false

  setTimeout(() => {
    controls.value = true
  }, 2000)
}, {immediate: true})
</script>

<style>
.navigation {
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translate(-50%, 0);
  right: 0;
  transition: all ease .4s;
}

.next-btn {
  position: absolute;
  bottom: 20px;
  right: 90px;
  transition: all ease .4s;
}

.hidden {
  opacity: 0;
  visibility: hidden;
}
</style>