<!-- eslint-disable vue/no-parsing-error -->
<template>
  <img :src="bg10" alt="slide" />

  <svg
    width="1920"
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g id="further-btn">
        <rect x="618" y="921" width="685" height="69" rx="20" fill="white" />
        <text
          fill="#010101"
          xml:space="preserve"
          style="white-space: pre"
          font-family="Gogh"
          font-size="22"
          font-weight="500"
          letter-spacing="0em"
        >
          <tspan x="855.971" y="962.977">
            &#x41f;&#x440;&#x43e;&#x434;&#x43e;&#x43b;&#x436;&#x438;&#x442;&#x44c;
          </tspan>
        </text>
        <g id="Group 528">
          <rect
            id="Rectangle 197"
            x="1015.97"
            y="954.5"
            width="42"
            height="2"
            fill="#010101"
          />
          <path
            id="Polygon 2"
            d="M1065.03 955.5L1050.78 962.428L1055.47 955.5L1050.78 948.572L1065.03 955.5Z"
            fill="#010101"
          />
        </g>
      </g>
      <g id="text-3">
        <g id="Frame 102">
          <path
            d="M586 447C586 438.163 593.163 431 602 431H1091C1099.84 431 1107 438.163 1107 447V540H602C593.163 540 586 532.837 586 524V447Z"
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
            <tspan x="631" y="485.477">
              &#x420;&#x435;&#x430;&#x43b;&#x44c;&#x43d;&#x44b;&#x435;
              &#x434;&#x435;&#x43d;&#x44c;&#x433;&#x438; &#x437;&#x430;
              &#x440;&#x435;&#x430;&#x43b;&#x44c;&#x43d;&#x44b;&#x435;
              &#x437;&#x430;&#x434;&#x430;&#x447;&#x438;!
            </tspan>
          </text>
        </g>
        <path
          id="Vector 17"
          d="M1106 540V520L1124.29 538.293L1126 540H1123.59H1106Z"
          fill="white"
        />
      </g>
    </g>
  </svg>
</template>

<script setup>
import bg10 from "@/assets/slides-images/twalve/bg.webp";
import { nextTick, onMounted } from "vue";
import useFurtherButton from "../../composables/useFurtherButton";
import programmer from "./assets/programmer.mp3";

const audioProgrammer = new Audio(programmer);

// eslint-disable-next-line no-undef
const emit = defineEmits(["nextSlide"]);
useFurtherButton();
onMounted(async () => {
  await nextTick();

  const text1 = document.querySelector("#text-3");

  setTimeout(() => {
    audioProgrammer.play();
    text1.classList.add("visible");
  }, 500);

  setTimeout(() => {
    document.addEventListener("nextReplic", () => {
      audioProgrammer.pause();
      emit("nextSlide");
    });
  }, 1000);
});
</script>

<style lang="scss"></style>
