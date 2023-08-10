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
    case 1:
      return [
        '«Привет!»',
        '«Добрый день.»',
        '«Здравствуйте.»'
      ]
    case 5:
      return [
        '«Да»',
      ]
    case 6:
      return [
        '«Добрый день Виталий, пойдемте»',
        '«Да! Мне не терпится начать!»'
      ]
    case 7:
      return [
        '«Да, я программировал на 1С»',
        '«Да, я программировал на других языках, не на 1С»',
        '«Нет, у меня нет опыта в программировании»',
      ]
    case 9:
      return [
        '«Удивительно!»',
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

    &:hover {
      color: #0075EB;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.30);
    }
  }
}
</style>