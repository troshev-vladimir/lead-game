<template>
  <div class="skip-quize">
    <div class="content">
      <p>
        Ты уже проделал такой путь, если завершишь игру сейчас, то не сможешь
        получить заработанное.
      </p>
    </div>
    <div class="buttons">
      <button @click="emit('accept')">Все равно завершить игру</button>
      <button @click="emit('cancle')">Продолжить игру</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["accept", "cancle"]);
</script>

<style lang="scss" scoped>
.skip-quize {
  z-index: 1000;
  width: 800px;
  border-radius: 16px;
  max-width: 850px;
  max-height: 850px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .content {
    color: #000;
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;
    padding: 32px 48px;
    text-align: left;
  }

  .buttons {
    display: flex;

    button {
      flex: 1 1 50%;
      padding: 20px 30px;
      border: 1px solid #ccc;
      background: #fff;
      cursor: pointer;

      color: #010101;
      font-size: 22px;
      font-weight: 500;
      line-height: 130%;

      &:first-child {
        border-radius: 0px 0px 0px 16px;
      }

      &:last-child {
        border-radius: 0px 0px 16px 0px;
      }
    }
  }
}
</style>
