<template>
<div class="slider" :class="{'phone-slider': isPhone}">
  <Transition name="fade" :mode="mode">
    <component
      ref="slide"
      :is="currentSlide"
      @next-slide="navigation.stepForward"
      @continue="emit('continue')"
    />
  </Transition>
</div>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref } from "vue";

// eslint-disable-next-line no-undef
const emit = defineEmits(['continue']) 

const slide = ref(null)

const mode = computed(() => {
  // const fukedSlides = [7, 9]
  // if (fukedSlides.includes(currentStep.value) ) {
  //   return ''
  // }
  // return 'out-in' // for prod
  return ''
})

// eslint-disable-next-line no-undef
defineExpose({
  slide
})

const navigation = useNavigationStore()
const { currentStep } = storeToRefs(navigation)

const currentSlide = computed(() => {
    console.log('GameSllide' + currentStep.value);
    return 'GameSllide' + currentStep.value
})

const isPhone = ref(false)

const setDevice = () => {
  let w = screen.width;
  let h = screen.height;
  console.log((w / h));
  isPhone.value = (w / h) < 0.6
} 

onMounted(() => {
  setDevice()

  window.addEventListener('resize', () => {
    setDevice()
  })
})
</script>
<script>
import GameSllide1 from './slides/GameSllide1.vue'
import GameSllide2 from './slides/GameSllide2.vue'
import GameSllide3 from './slides/GameSllide3.vue'
import GameSllide4 from './slides/GameSllide4.vue'
import GameSllide5 from './slides/GameSllide5.vue'
import GameSllide6 from './slides/GameSllide6.vue'
import GameSllide7 from './slides/GameSllide7.vue'
import GameSllide8 from './slides/GameSllide8.vue'
import GameSllide9 from './slides/GameSllide9.vue'
import GameSllide10 from './slides/GameSllide10.vue'
import GameSllide11 from './slides/GameSllide11.vue'
import GameSllide12 from './slides/GameSllide12.vue'

export default {
    components: { 
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
      GameSllide12
    }
}
</script>

<style lang="scss">

.slider{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #000;

  svg, video {
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>