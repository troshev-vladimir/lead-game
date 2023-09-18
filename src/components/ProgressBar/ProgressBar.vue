<template>
  <p class="title">Прогресс прохождения</p>
  <div class="progress-bar">
    <div 
      class="progress-bar__segment" 
      :class="{'progress-bar__segment--filled': isFilled(i)}" 
      v-for="i in total" 
      :key="i"
    ></div>
  </div>
  <button class="go-to-configuretor" @click="emit('skip')">
    Завершить досрочно
  </button>
</template>

<script setup>
import {defineEmits, defineProps} from 'vue'
const emit = defineEmits(['skip']);
const props = defineProps({
  completed: {
    type: Number,
  },
  total: {
    type: Number,
  }
})
  const isFilled = (current) => {
    return props.completed >= current
  }
</script>

<style lang="scss" scoped>

.title {
  color: #000;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 16px;
}

.progress-bar {
  margin-bottom: 14px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  height: 32px;
  width: 100%;

  &__segment {
    border: 0.5px solid rgba(204, 204, 204, 0.80);
    background: #F2F2F2;
    flex-grow: 1;
    height: 100%;

    &--filled {
      background-color: #0075EB;
    }
  }
}

.go-to-configuretor {
    color: #808080;
    whitespace: nowrap;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-decoration-line: underline;
    cursor: pointer;
    background-color:transparent;
    border: none;

    &:hover {
      text-decoration: none;
    }
}
</style>