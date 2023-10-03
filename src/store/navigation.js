import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigationStore = defineStore("navigation", () => {
  const currentStep = ref(-1);
  const totalSteps = 18;

  async function stepForward() {
    if (currentStep.value === totalSteps) return;
    currentStep.value++;
  }

  function stepBackward() {
    if (currentStep.value === 0) return;
    currentStep.value--;
  }

  return {
    currentStep,
    stepForward,
    stepBackward,
  };
});
