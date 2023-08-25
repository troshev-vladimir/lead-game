<template>
  <GameSlider 
    id='slider' 
    ref="slider" 
    @continue="nextBtnControl = true, prevBtnControl = true" 
    @click="dispatchEvent"
    @question="showNavigationMap"
    @show-cash-counter="showCashCounter"
    :class="{'no-continue-button': navigationMapControl || nextBtnControl}"
  ></GameSlider>
  <NavigationMap
    class="navigation"
    :class="{hidden: !navigationMapControl}"
    @click="navigationCallback"
  ></NavigationMap>
  <NextButton
    class="next-btn"
    :class="{hidden: !nextBtnControl}"
    @click="nextButtonCallback"
  ></NextButton>
  <NextButton
    prev
    class="prev-btn"
    :class="{hidden: !prevBtnControl}"
    @click="prevButtonCallback"
    v-if="[16].includes(currentStep)"
  ></NextButton>
  <CashCounter v-if="isCashCounter" class="cash-counter"></CashCounter>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';
import { onMounted, ref, watch } from "vue";

import GameSlider from '@/components/GameSlider'
import CashCounter from '@/components/CashCounter'
import NavigationMap from '@/components/NavigationMap'
import NextButton from '@/components/NextButton'

const navigation = useNavigationStore()
const { currentStep } = storeToRefs(navigation)

const navigationMapControl = ref(false)
const nextBtnControl = ref(false)
const prevBtnControl = ref(false)
const slider = ref(null)
const isCashCounter = ref(false)
let navigationCallback = () => {
  navigation.stepForward()
}

let nextButtonCallback = () => {
  navigation.stepForward()
}

let prevButtonCallback = () => {
  navigation.stepForward()
}

let eventTimeout = true

const dispatchEvent = () => {
  if (eventTimeout) {
    eventTimeout = false
    let event = new Event("nextReplic");
    document.dispatchEvent(event);

    setTimeout(() => {
      eventTimeout = true
    }, 500)
  }
}

const showCashCounter = () => {
  isCashCounter.value = true
}

const showNavigationMap = () => {
  navigationMapControl.value = true
}
watch(currentStep, (value) => {
  nextBtnControl.value = false
  prevBtnControl.value = false

  switch (value) {
    case 2:
      break;
    case 16:
      nextButtonCallback = () => {
        console.log("Пошли в Учебку");
      }

      prevButtonCallback = () => {
        navigation.stepForward()
      }
      break;

    case 18:
      nextButtonCallback = () => {
        console.log("Пошли в Учебку");
      }
    
      break;
    default:
      break;
  }
}, {immediate: true})

watch(currentStep, () => {
  navigationMapControl.value = false

  switch (currentStep.value) {
    case 4:
      // setTimeout(() => {
      //   nextBtnControl.value = true
      //   navigationMapControl.value = true
      // }, 2000)
      // navigationCallback = () => {
      //   navigationMapControl.value = false
      //   navigation.stepForward()
      // }

      break;
    case 5:
      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }

      break;

    case 6:
      setTimeout(() => {
        navigationMapControl.value = true
      }, 3000)
      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }
    
      break;

    case 9:
      break;
    case 10:
      break;

    case 11:
      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }
    
      break;
    
    case 12:
      
    
      break;

    case 14:
      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }
    
      break;

    case 15:
      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }
      break;
    case 16:
       
      break;

    case 17:
      navigationCallback = () => {
        slider.value.slide.nextStep()
        navigationMapControl.value = false
      }
    
      break;

    case 18:
      break;

    default:
      setTimeout(() => {
        nextBtnControl.value = true
        navigationMapControl.value = true
      }, 3000)
      break;
  }
}, {immediate: true})

onMounted(() => { //для дева
  document.addEventListener('keydown', (event) => {
    if (event.code == 'ArrowRight') {
      navigation.stepForward()
    } else if (event.code == 'ArrowLeft') {
      navigation.stepBackward()
    }
  })
})
</script>

<style>
.no-continue-button #further-btn{
  display: none;
}
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

.prev-btn {
  position: absolute;
  bottom: 20px;
  left: 90px;
  transition: all ease .4s;
}


.hidden {
  opacity: 0;
  visibility: hidden;
}

.cash-counter {
  position: absolute;
  top: 90px;
  left: 90px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
}
</style>