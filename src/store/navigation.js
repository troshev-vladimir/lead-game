import { defineStore } from "pinia";
import { ref } from "vue";
import { useUserStore } from "@/store/user";
const user = useUserStore();

export const useNavigationStore = defineStore("navigation", () => {
  const currentStep = ref(-1);
  const totalSteps = 18;

  async function stepForward() {
    if (currentStep.value === totalSteps) return;
    currentStep.value++;
    user.saveProgress();
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
