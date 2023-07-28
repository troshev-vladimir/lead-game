<template>
<div class="slider">
  <component :is="currentSlide" @next-slide="navigation.stepForward"></component>
</div>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';
import { computed } from "vue";

const navigation = useNavigationStore()
const {currentStep} = storeToRefs(navigation)

const currentSlide = computed(() => {
    return  'GameSllide' + currentStep.value
})
</script>
<script>
import GameSllide1 from './slides/GameSllide1.vue'
import GameSllide2 from './slides/GameSllide2.vue'
import GameSllide3 from './slides/GameSllide3.vue'
export default {
    components: { GameSllide1, GameSllide2, GameSllide3 }
}
</script>

<style lang="scss">

.slider{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: relative;

  svg, video {
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}


</style>