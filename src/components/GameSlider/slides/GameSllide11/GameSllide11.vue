<!-- eslint-disable vue/no-parsing-error -->
<template>
  <img :src="bg13" alt="slide" />

  <svg
    width="1920"
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g id="text-131">
        <g id="Frame 102">
          <path
            d="M134 398C134 389.163 141.163 382 150 382H915V499C915 507.837 907.837 515 899 515H150C141.163 515 134 507.837 134 499V398Z"
            fill="white"
          />
          <text
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Gogh"
            font-size="22"
            font-weight="500"
            letter-spacing="0em"
          >
            <tspan x="179" y="433.977">
              {{ userName }}, &#x430; &#x441;&#x435;&#x439;&#x447;&#x430;&#x441;
              &#x44f; &#x43f;&#x440;&#x43e;&#x432;&#x435;&#x434;&#x443;
              &#x442;&#x435;&#x431;&#x435;
              &#x438;&#x43d;&#x441;&#x442;&#x440;&#x443;&#x43a;&#x442;&#x430;&#x436;
              &#x438;&#xa0;&#x434;&#x430;&#x43c;
            </tspan>
            <tspan x="179" y="462.977">
              &#x43f;&#x435;&#x440;&#x432;&#x443;&#x44e;
              &#x437;&#x430;&#x434;&#x430;&#x447;&#x443;!
            </tspan>
          </text>
        </g>
        <path
          id="Vector 17"
          d="M914 382H934L915.707 400.293L914 402V399.586V382Z"
          fill="white"
        />
      </g>
    </g>
  </svg>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import bg13 from "@/assets/slides-images/therteen/bg.webp";
import vitaly from "./assets/vitaly.mp3";

// eslint-disable-next-line no-undef
const emit = defineEmits(["continue"]);

const user = useUserStore();
const { userName } = storeToRefs(user);
let text1;
const audioVitaly1 = new Audio(vitaly);
const replicStep = ref(0);

watch(replicStep, (value) => {
  switch (value) {
    case 1:
      break;

    default:
      break;
  }
});

onMounted(async () => {
  await nextTick();

  document.addEventListener("nextReplic", () => {
    replicStep.value += 1;
  });

  text1 = document.querySelector("#text-131");

  setTimeout(() => {
    text1.classList.add("visible");
    audioVitaly1.play();
  }, 500);

  setTimeout(() => {
    emit("continue");
  }, 1500);
});

onBeforeUnmount(() => {
  audioVitaly1.pause();
});
</script>

<style lang="scss"></style>
