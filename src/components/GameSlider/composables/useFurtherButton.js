import { onMounted } from "vue";

export default function useFurtherButton() {
  onMounted(() => {
    const furtherBtn = document.querySelector("#further-btn");

    if (!furtherBtn) return;

    setTimeout(() => {
      furtherBtn.classList.add("visible");
    }, 2000);
  });
}
