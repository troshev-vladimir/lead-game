<template>
  <GameSlider></GameSlider>
  <NavigationMap class="navigation"></NavigationMap>
</template>

<script setup>
import GameSlider from '@/components/GameSlider'
import NavigationMap from '@/components/NavigationMap'

</script>

<style>
.navigation {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>