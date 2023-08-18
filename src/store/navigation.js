import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigationStore = defineStore("navigation", () => {
	const currentStep = ref(18);
	const totalSteps = 19;

	function stepForward() {
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
