<template>
<div class="slider" :class="{'phone-slider': isPhone}">
  <transition name="fade" :mode="mode">
    <component
      ref="slide"
      :is="currentSlide"
      @next-slide="navigation.stepForward"
      @continue="emit('continue')"
      @show-cash-counter="emit('showCashCounter')"
      @question="emit('question')"
      @skip="skipSlide"
    />
  </transition>
</div>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from "vue";
const navigation = useNavigationStore()
const { currentStep } = storeToRefs(navigation)
// eslint-disable-next-line no-undef
const emit = defineEmits(['continue', 'showCashCounter']) 

const slide = ref(null)

const mode = computed(() => {
  const fukingSlides = [4, 7, 17]
  if (fukingSlides.includes(currentStep.value) ) {
    return ''
  }
  return ''
})

// eslint-disable-next-line no-undef
defineExpose({
  slide
})

const currentSlide = computed(() => {
    if (currentStep.value === -1 ) {
      return 'initialSlide'
    }

    console.log('GameSllide' + ' ' + currentStep.value);
    return 'GameSllide' + currentStep.value
})

const skipSlide = () => {
  navigation.stepForward()
}

const isPhone = ref(false)


onMounted(() => {

})
</script>
<script>
import initialSlide from './slides/initialSlide.vue'
import GameSllide0 from './slides/GameSllide0'
import GameSllide1 from './slides/GameSllide1'
import GameSllide2 from './slides/GameSllide2'
import GameSllide3 from './slides/GameSllide3.vue'
import GameSllide4 from './slides/GameSllide4'
import GameSllide5 from './slides/GameSllide5'
import GameSllide6 from './slides/GameSllide6'
import GameSllide7 from './slides/GameSllide7'
import GameSllide8 from './slides/GameSllide8'
import GameSllide9 from './slides/GameSllide9'
import GameSllide10 from './slides/GameSllide10'
import GameSllide11 from './slides/GameSllide11'
import GameSllide12 from './slides/GameSllide12'
import GameSllide13 from './slides/GameSllide13.vue'
import GameSllide14 from './slides/GameSllide14.vue' // 1с
// const GameSllide14 = () => import('./slides/GameSllide14.vue')
import GameSllide15 from './slides/GameSllide15'
import GameSllide16 from './slides/GameSllide16'
import GameSllide17 from './slides/GameSllide17'
import GameSllide18 from './slides/GameSllide18'

export default {
    components: { 
      initialSlide,
      GameSllide0,
      GameSllide1,
      GameSllide2,
      GameSllide3,
      GameSllide4,
      GameSllide5,
      GameSllide6,
      GameSllide7,
      GameSllide8,
      GameSllide9,
      GameSllide10,
      GameSllide11,
      GameSllide12,
      GameSllide13,
      GameSllide14,
      GameSllide15,
      GameSllide16,
      GameSllide17,
      GameSllide18,
    }
}
</script>

<style lang="scss">
#further-btn {
  cursor: pointer;
}

.slider{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #000;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }

  svg, video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }
}

.fade-enter-active {
  transition: opacity 0.6s linear;
}
.fade-leave-active {
  transition: opacity 0.2s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>