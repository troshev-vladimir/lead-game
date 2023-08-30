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
        'Добрый день Виталий, пойдемте',
        'Да! Мне не терпится начать!'
      ]
    case 5:
      return [
        'Да, я программировал на 1С',
        'Да, я программировал на других языках, не на 1С',
        'Нет, у меня нет опыта в программировании',
      ]
      
    case 12:
      return [
        'Да, я уже за ПК',
        'Понял, скоро вернусь',
      ]

    case 15:
      return [
        'Да! Я старался! Теперь я знаю что такое программирование на 1С! ',
      ]

    case 17:
      return [
        'Привет Альбина!',
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

  @media screen and (max-width: 900px) {
    border-radius: 10px;
    width: 300px;
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

    @media screen and (max-width: 900px) {
      padding: 8px;
      font-size: 12px;
    }

    &:hover {
      color: #0075EB;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.30);
    }
  }
}
</style>