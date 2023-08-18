<template>
  <div
    class="next-button"
    :class="{'next-button--prev': props.prev}"
    v-if="currentStepButton"
    @click="emit('next')"
  >
    <img class="image" :src="imageName" alt="next-slide">
    <div class="text">
      <div class="arrow" v-if="props.prev">
        <svg width="50" height="14" viewBox="0 0 50 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6.0083" width="42" height="2" fill="black"/>
          <path d="M49.0586 7.00877L34.8086 13.937L39.5 7.0083L34.8086 0.0805664L49.0586 7.00877Z" fill="black"/>
        </svg>
      </div>
      <span>{{currentText}}</span>
      <div class="arrow" v-if="!props.prev">
        <svg width="50" height="14" viewBox="0 0 50 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6.0083" width="42" height="2" fill="black"/>
          <path d="M49.0586 7.00877L34.8086 13.937L39.5 7.0083L34.8086 0.0805664L49.0586 7.00877Z" fill="black"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { computed } from 'vue';
import imageUrl2 from '@/assets/next-btn-img/2-slide.jpg'
import imageUrl6 from '@/assets/next-btn-img/6-slide.jpg'
import imageUrl10 from '@/assets/next-btn-img/10-slide.jpg'
import imageUrl13 from '@/assets/next-btn-img/13-slide.jpg'
import imageUrl14 from '@/assets/next-btn-img/14-slide.jpg'

// eslint-disable-next-line no-undef
const emit = defineEmits(['next'])

// eslint-disable-next-line no-undef
const props = defineProps({
  prev: {
    type: Boolean,
    default: false
  }
})

const currentText = computed(() => !props.prev ? currentStepButton.value.text : currentStepButton.value.prev.text)

const navigation = useNavigationStore()

const currentStepButton = computed(() => {
  switch (navigation.currentStep) {
    case 2:
      return {
        image: imageUrl2,
        text: 'Супер! Давай скорее начнем'
      }
    case 6:
      return {
        image: imageUrl6,
        text: 'В комнату переговоров'
      } 
    case 9:
      return {
        image: imageUrl6,
        text: 'Следовать за наставником'
      }  
      
    case 10:
      return {
        image: imageUrl10,
        text: 'Следовать за наставником'
      }   
      
    case 13:
      return {
        image: imageUrl13,
        text: 'Следовать за наставником'
      }   
      
    case 14:
      return {
        image: imageUrl14,
        text: 'Следовать за наставником'
      }
    
    case 19:
      return {
        image: imageUrl14,
        text: 'Учебный центр',
        prev: {
          text: "Бухгалтерия"
        }
      }
      
    case 20:
      return {
        image: imageUrl14,
        text: 'Учебный центр',
      }

    case 21:
      return {
        image: imageUrl14,
        text: 'Учебный центр',
      }
    default:
      return null;
  }
})

const imageName = computed(() => {
  return currentStepButton.value.image
})


</script>

<style lang='scss'>
.next-button {
  width: 340px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .text {
      color: #0075EB;
    }
  }

  &--prev {

    .arrow {
      transform: rotate(180deg);
      margin-right: 25px;
      margin-left: 0;
    }

    span {
    }
  }

  &:not(.next-button--prev) {
    .arrow {
      margin-left: 25px;
    }
  }

  .arrow {
      & svg > *{
        fill: currentColor;
      }
  }

  .image {
    width: 100%;
    height: 250px;
    background-size: contain;
  }

  .text {
    padding: 30px 35px;
    color: #000;
    font-family: Gogh;
    font-size: 22px;
    font-weight: 500;
    line-height: 130%; 
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>