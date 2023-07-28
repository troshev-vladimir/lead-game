<template>
  <nav>
    <button @click="navigation.stepBackward">Prev slide</button>
    <p>{{currentStep}}</p>
    <button @click="navigation.stepForward">Next slide</button>
  </nav>
</template>

<script setup>
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';
const {currentStep} = storeToRefs(useNavigationStore)
const navigation = useNavigationStore()
</script>

<style lang='scss'>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;

    button {
        cursor: pointer;
        background-color: #fff;
        border-radius: 10px;
        border: 1px solid #444;
        font-size: 20px;
    }
}
</style>