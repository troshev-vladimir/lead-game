<template>
  <div class="select-answers" v-if="currentStepAnswers">
    <div
      class="ansver"
      v-for="ansver in currentStepAnswers"
      :key="ansver"
    >
      <span>{{ansver}}</span>
    </div>
  </div>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { computed } from 'vue';
const navigation = useNavigationStore()

const currentStepAnswers = computed(() => {
  switch (navigation.currentStep) {
    case 0:
      return [
        'Привет!',
      ]
    case 4:
      return [
        'Да! Мне не терпится начать!'
      ]
    case 5:
      return [
        'Да, есть опыт в программировании 1С',
        'Да, есть опыт в программировании на других языках ',
        'Нет, у меня нет опыта в программировании',
      ]
      
    case 12:
      return [
        'Да, я уже за ПК',
        'Cкоро вернусь',
        'Я с телефона, но я справлюсь',
      ]

    case 15:
      return [
        'Спасибо! Теперь я знаю, что такое программирование на 1С',
      ]

    case 17:
      return [
        'Привет, Ирина!',
      ]

    default:
      return null;
  }

})


</script>

<style lang='scss'>
.select-answers {
  width: 685px;
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    border-radius: 10px;
    width: 400px;
  }

  .ansver {
    padding: 30px 50px;
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    color: #000;
    transition: all ease .4s;
    text-align: center;
    border: 1px solid #CCC;
    border-bottom: none;
    cursor: pointer;

    @media screen and (max-width: 1200px) {
      padding: 16px;
      font-size: 14px;
    }

    &:hover {
      color: #0075EB;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.30);
    }
  }
}
</style>