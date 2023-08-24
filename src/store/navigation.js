import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigationStore = defineStore("navigation", () => {
	const currentStep = ref(7);
	const totalSteps = 21;

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
