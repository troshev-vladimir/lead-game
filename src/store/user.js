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

  async function saveProgress() {
    const userMany = +localStorage.getItem("userMany") || 0;
    const slide = +localStorage.getItem("step") || 0;
    const quizeStep = +localStorage.getItem("quizeStep") || 0;
    const taskStep = +localStorage.getItem("taskStep") || 0;
    const id = localStorage.getItem("userPhone") || "";
    const token = localStorage.getItem("userToken") || "";

    const progres = {
      quizestep: quizeStep,
      taskstep: taskStep,
      step: slide,
      sum: userMany,
      id,
      token,
    };

    try {
      await game.saveProgress(progres);
    } catch (error) {
      console.log(error);
    }
  }

  async function restoreProgress() {
    try {
      const currentProgress = await game.restoreProgress();
      localStorage.setItem(
        "userMany",
        currentProgress.sum || localStorage.userMany
      );
      localStorage.setItem("step", currentProgress.slide || localStorage.step);
      localStorage.setItem(
        "quizeStep",
        currentProgress.quizeStep || localStorage.quizeStep
      );
      localStorage.setItem(
        "taskStep",
        currentProgress.taskStep || localStorage.taskStep
      );
      return currentProgress;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    userName,
    many,
    addMany,
    saveProgress,
    restoreProgress,
  };
});
