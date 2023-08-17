<template>
  <GameSlider ref="slider" @continue="nextBtnControl = true"></GameSlider>
  <NavigationMap class="navigation" :class="{hidden: !navigationMapControl}" @click="navigationCallback"></NavigationMap>
  <NextButton class="next-btn" :class="{hidden: !nextBtnControl}"></NextButton>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';
import { ref, watch } from "vue";

import GameSlider from '@/components/GameSlider'
import NavigationMap from '@/components/NavigationMap'
import NextButton from '@/components/NextButton'

const navigation = useNavigationStore()
const { currentStep } = storeToRefs(navigation)

const navigationMapControl = ref(false)
const nextBtnControl = ref(false)
const slider = ref(null)
let navigationCallback = () => {
  navigation.stepForward()
}

watch(currentStep, () => {
  navigationMapControl.value = false
  nextBtnControl.value = false

  switch (currentStep.value) {
    case 5:
      setTimeout(() => {
        nextBtnControl.value = true
        navigationMapControl.value = true
      }, 3000)
      navigationCallback = () => {
        navigationMapControl.value = false
        navigation.stepForward()
      }

      break;
    case 6:
      setTimeout(() => {
        navigationMapControl.value = true
      }, 5000)
      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }

      break;

    case 7:
      setTimeout(() => {
        navigationMapControl.value = true
      }, 3000)
      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }
    
      break;

    case 9:
      setTimeout(() => {
        navigationMapControl.value = true
      }, 3000)

      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }
    
      break;
  
    default:
      setTimeout(() => {
        nextBtnControl.value = true
        navigationMapControl.value = true
      }, 3000)
      break;
  }
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