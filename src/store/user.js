import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userName = ref("Инокентий");
  const many = ref(0);
  function addMany(amount) {
    console.log(amount, "amount");
    many.value += amount;
  }

  return {
    userName,
    many,
    addMany,
  };
});
