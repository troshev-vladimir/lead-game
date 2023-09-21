import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userName = ref("Инокентий");
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

  return {
    userName,
    many,
    addMany,
  };
});
