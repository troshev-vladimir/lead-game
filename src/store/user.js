import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
	const userName = ref("Алексей");

	return {
		userName,
	};
});