import { defineStore } from "pinia";
import { ref } from "vue";
import game from "@/api/game";
export const useUserStore = defineStore("user", () => {
  const userName = ref("");
  const many = ref(0);

  function addMany(amount) {
    let i = 0;
    const iterations = 10;

    let interval = window.setInterval(() => {
      i++;
      if (i === iterations) clearInterval(interval);
      let change = amount / iterations;
      change = change >= 0 ? Math.ceil(change) : Math.floor(change);
      many.value += change;
    }, 50);
  }

  async function restoreProgress() {
    try {
      const currentProgress = await game.restoreProgress();
      localStorage.setItem(
        "userMany",
        currentProgress[0].sum || localStorage.userMany || 0
      );
      localStorage.setItem(
        "step",
        currentProgress[0].step + 1 || String(localStorage.step) || -1
      );
      localStorage.setItem(
        "quizeStep",
        currentProgress[0].quizeStep + 1 || localStorage.quizeStep || 0
      );
      localStorage.setItem(
        "taskStep",
        currentProgress[0].taskStep + 1 || localStorage.taskStep || 0
      );
      return currentProgress[0];
    } catch (error) {
      console.log(error);
    }
  }

  return {
    userName,
    many,
    addMany,
    restoreProgress,
  };
});
