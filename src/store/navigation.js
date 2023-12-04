import { defineStore } from "pinia";
import { ref } from "vue";
import saveProgressOnServer from "@/utils/saveProgress";

export const useNavigationStore = defineStore("navigation", () => {
  const currentStep = ref(-1);
  const taskStep = ref(0);
  const totalSteps = 18;

  async function stepForward() {
    if (currentStep.value === totalSteps) return;
    currentStep.value++;
    localStorage.setItem("step", String(currentStep.value) || -1);
    saveProgressOnServer();
  }

  function stepBackward() {
    if (currentStep.value === 0) return;
    currentStep.value--;
  }

  return {
    currentStep,
    stepForward,
    stepBackward,
    taskStep,
  };
});
