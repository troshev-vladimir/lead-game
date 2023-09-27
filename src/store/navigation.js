import { defineStore } from "pinia";
import { ref } from "vue";
import game from "@/api/game";

export const useNavigationStore = defineStore("navigation", () => {
  const currentStep = ref(14);
  const totalSteps = 18;

  async function stepForward() {
    if (currentStep.value === totalSteps) return;
    currentStep.value++;
    try {
      await game.sendCurrentStep(currentStep.value);
    } catch (error) {
      console.log(error);
    }
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
