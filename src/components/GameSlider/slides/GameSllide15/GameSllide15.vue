<!-- eslint-disable vue/no-parsing-error -->
<template>
  <img :src="bg17" alt="slide" />

  <svg
    width="1920"
    height="1080"
    viewBox="0 0 1920 1080"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <g id="text-1">
        <path
          id="Vector 17"
          d="M854 406H834L852.293 387.707L854 386V388.414V406Z"
          fill="white"
        />
        <g id="Frame 102">
          <path
            d="M853 318C853 309.163 860.163 302 869 302H1618C1626.84 302 1634 309.163 1634 318V390C1634 398.837 1626.84 406 1618 406H853V318Z"
            fill="white"
          />
          <text
            id="value"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Gogh"
            font-size="22"
            font-weight="500"
            letter-spacing="0em"
          >
            <tspan x="898" y="353.977">
              {{ userName }},
              &#x43e;&#x442;&#x43b;&#x438;&#x447;&#x43d;&#x430;&#x44f;
              &#x440;&#x430;&#x431;&#x43e;&#x442;&#x430;, &#x432;&#x441;&#x435;
              &#x437;&#x430;&#x434;&#x430;&#x43d;&#x438;&#x44f;
              &#x432;&#x44b;&#x43f;&#x43e;&#x43b;&#x43d;&#x435;&#x43d;&#x44b;!
            </tspan>
          </text>
        </g>
      </g>
      <g id="text-2">
        <path
          id="Vector 17_2"
          d="M853 454H833L851.293 435.707L853 434V436.414V454Z"
          fill="white"
        />
        <g id="Frame 102_2">
          <path
            d="M852 366C852 357.163 859.163 350 868 350H1617C1625.84 350 1633 357.163 1633 366V438C1633 446.837 1625.84 454 1617 454H852V366Z"
            fill="white"
          />
          <text
            id="value_2"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Gogh"
            font-size="22"
            font-weight="500"
            letter-spacing="0em"
          >
            <tspan x="897" y="401.977">
              &#x423;&#x437;&#x43d;&#x430;&#x439;, &#x43a;&#x430;&#x43a;
              &#x43f;&#x43e;&#x43b;&#x443;&#x447;&#x438;&#x442;&#x44c;
              &#x441;&#x432;&#x43e;&#x438;
              &#x43f;&#x435;&#x440;&#x432;&#x44b;&#x435;
              &#x437;&#x430;&#x440;&#x430;&#x431;&#x43e;&#x442;&#x430;&#x43d;&#x43d;&#x44b;&#x435;
              &#x434;&#x435;&#x43d;&#x44c;&#x433;&#x438;!
            </tspan>
          </text>
        </g>
      </g>
      <g id="text-3">
        <path
          id="Vector 17_3"
          d="M853 466V486L834.707 467.707L833 466H835.414H853Z"
          fill="white"
        />
        <g id="Frame 102_3">
          <path
            d="M852 466H1617C1625.84 466 1633 473.163 1633 482V554C1633 562.837 1625.84 570 1617 570H868C859.163 570 852 562.837 852 554V466Z"
            fill="white"
          />
          <text
            id="value_3"
            fill="black"
            xml:space="preserve"
            style="white-space: pre"
            font-family="Gogh"
            font-size="22"
            font-weight="500"
            letter-spacing="0em"
          >
            <tspan x="897" y="517.977">
              &#x423; &#x442;&#x435;&#x431;&#x44f; &#x435;&#x441;&#x442;&#x44c;
              &#x434;&#x432;&#x430;
              &#x432;&#x430;&#x440;&#x438;&#x430;&#x43d;&#x442;&#x430;.
            </tspan>
          </text>
        </g>
      </g>
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
          <tspan x="855.969" y="962.977">
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
    </g>
  </svg>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import bg17 from "@/assets/slides-images/seventeen/bg.webp";
import useFurtherButton from "../../composables/useFurtherButton";
import vitaly from "./assets/vitaly.mp3";
import vitaly2 from "./assets/vitaly2.mp3";
import vitaly3 from "./assets/vitaly3.mp3";
// eslint-disable-next-line no-undef
const emit = defineEmits(["nextSlide", "question"]);

const user = useUserStore();
const { userName } = storeToRefs(user);
const replicStepAskWaiting = ref(false);
useFurtherButton();
const nextStep = () => {
  replicStepAskWaiting.value = false;
  replicStep.value += 1;
};
const audioVitaly1 = new Audio(vitaly);
const audioVitaly2 = new Audio(vitaly2);
const audioVitaly3 = new Audio(vitaly3);
let text1, text2, text3;

const replicStep = ref(0);

watch(replicStep, (value) => {
  switch (value) {
    case 1:
      audioVitaly1.pause();
      text1.classList.remove("visible");
      setTimeout(() => {
        audioVitaly2.play();
        text2.classList.add("visible");
      }, 500);
      break;

    case 2:
      audioVitaly2.pause();
      audioVitaly3.play();
      text3.classList.add("visible");
      break;

    case 3:
      emit("nextSlide");

      break;

    default:
      break;
  }
});

onMounted(async () => {
  await nextTick();

  document.addEventListener("nextReplic", () => {
    if (replicStepAskWaiting.value === true) return;
    replicStep.value += 1;
  });

  text1 = document.querySelector("#text-1");
  text2 = document.querySelector("#text-2");
  text3 = document.querySelector("#text-3");

  replicStepAskWaiting.value = true;

  setTimeout(() => {
    text1.classList.add("visible");
    audioVitaly1.play();
  }, 500);

  setTimeout(() => {
    emit("question");
  }, 1500);
});

onBeforeUnmount(() => {
  audioVitaly3.pause();
});

// eslint-disable-next-line no-undef
defineExpose({
  nextStep,
});
</script>

<style lang="scss"></style>
