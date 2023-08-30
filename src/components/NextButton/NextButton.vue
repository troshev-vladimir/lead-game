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
import imageUrl5 from '@/assets/next-btn-img/5-slide.jpg'
import imageUrl7 from '@/assets/next-btn-img/6-slide.jpg'
import imageUrl8 from '@/assets/next-btn-img/8-slide.jpg'
import imageUrl10 from '@/assets/next-btn-img/10-slide.jpg'
import imageUrl12 from '@/assets/next-btn-img/12-slide.jpg'


import imageAccounter from '@/assets/next-btn-img/accounter.jpg'
import imageUrlLearning from '@/assets/next-btn-img/learning.jpg'

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
    case 1:
      return {
        image: imageUrl2,
        text: 'Супер! Давай скорее начнем'
      }
    case 4:
      return {
        image: imageUrl5,
        text: 'В комнату переговоров'
      } 
    case 7:
      return {
        image: imageUrl7,
        text: 'Следовать за наставником'
      }  
    case 8:
      return {
        image: imageUrl8,
        text: 'Поговорить с разработчиками'
      }  
      
    case 10:
      return {
        image: imageUrl10,
        text: 'Пройти на инструктаж'
      } 
      
    case 11:
      return {
        image: imageUrl10,
        text: 'Пройти на инструктаж '
      } 
      
    case 12:
      return {
        image: imageUrl12,
        text: 'Приступить к  заданиям'
      }
    
    case 16:
      return {
        image: imageAccounter,
        text: "Бухгалтерия",
        prev: {
          image: imageUrlLearning,
          text: 'Учебный центр',
        }
      }
      
    case 18:
      return {
        image: imageUrlLearning,
        text: 'Учебный центр',
      }
    default:
      return null;
  }
})

const imageName = computed(() => {
  return props.prev ? currentStepButton.value.prev.image : currentStepButton.value.image
})


</script>

<style lang='scss'>
.next-button {
  width: 340px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    border-radius: 5px;
    width: 140px;
  }

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

      @media screen and (max-width: 900px) {
        margin-right: 10px;
      }
    }
    span {
    }
  }

  .arrow {
    svg {
      @media screen and (max-width: 900px) {
        width: 30px;
      }
    }
  }

  &:not(.next-button--prev) {
    .arrow {
      margin-left: 25px;

      @media screen and (max-width: 900px) {
        margin-left: 10px;
      }
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

    @media screen and (max-width: 900px) {
      object-fit: cover;
      height: 80px;
    }
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

    @media screen and (max-width: 900px) {
      padding: 5px 10px;
      font-size: 12px;
    }
  }
}
</style>