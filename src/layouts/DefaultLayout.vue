<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} | ITS</template>
  </metainfo>
  <GameSlider
    id="slider"
    ref="slider"
    @continue="(nextBtnControl = true), (prevBtnControl = true)"
    @click="dispatchEvent"
    @question="showNavigationMap"
    @show-cash-counter="showCashCounter"
    :class="{ 'no-continue-button': navigationMapControl || nextBtnControl }"
  ></GameSlider>
  <NavigationMap
    class="navigation"
    :class="{ hidden: !navigationMapControl }"
    @click="navigationCallback"
  ></NavigationMap>
  <NextButton
    class="next-btn"
    :class="{ hidden: !nextBtnControl }"
    @click="nextButtonCallback"
  ></NextButton>
  <NextButton
    prev
    class="prev-btn"
    :class="{ hidden: !prevBtnControl }"
    @click="prevButtonCallback"
    v-if="[16].includes(currentStep)"
  ></NextButton>
  <transition name="fade">
    <CashCounter v-if="isCashCounter" class="cash-counter"></CashCounter>
  </transition>
</template>

<script setup>
  import { useNavigationStore } from "@/store/navigation";
  import { storeToRefs } from "pinia";
  import { onMounted, ref, watch } from "vue";

  import GameSlider from "@/components/GameSlider";
  import CashCounter from "@/components/CashCounter";
  import NavigationMap from "@/components/NavigationMap";
  import NextButton from "@/components/NextButton";

  const navigation = useNavigationStore();
  const { currentStep } = storeToRefs(navigation);

  const navigationMapControl = ref(false);
  const nextBtnControl = ref(false);
  const prevBtnControl = ref(false);
  const slider = ref(null);
  const isCashCounter = ref(false);
  let navigationCallback = () => {
    navigation.stepForward();
  };

  let nextButtonCallback = () => {
    navigation.stepForward();
  };

  let prevButtonCallback = () => {
    navigation.stepForward();
  };

  let eventTimeout = true;

  const dispatchEvent = () => {
    if (eventTimeout) {
      eventTimeout = false;
      let event = new Event("nextReplic");
      document.dispatchEvent(event);

      setTimeout(() => {
        eventTimeout = true;
      }, 500);
    }
  };

  const showCashCounter = () => {
    setTimeout(() => {
      isCashCounter.value = true;
    }, 1000);
    setTimeout(() => {
      isCashCounter.value = false;
    }, 1500);

    setTimeout(() => {
      isCashCounter.value = true;
    }, 2000);

    setTimeout(() => {
      isCashCounter.value = false;
    }, 2500);

    setTimeout(() => {
      isCashCounter.value = true;
    }, 3000);
  };

  const showNavigationMap = () => {
    navigationMapControl.value = true;
  };

  const goToConfigurator = () => {
    if (process.env.FOR_PAGES === "true") {
      window.location.replace("/test/configurator/");
    } else if (process.env.NODE_ENV === "production") {
      window.location.replace("/");
    } else {
      console.log("go to configurator");
    }
  };

  watch(
    currentStep,
    (value) => {
      nextBtnControl.value = false;
      prevBtnControl.value = false;

      switch (value) {
        case 2:
          break;
        case 16:
          nextButtonCallback = () => {
            navigation.stepForward();
          };

          prevButtonCallback = () => {
            goToConfigurator();
          };
          break;

        case 18:
          nextButtonCallback = () => {
            goToConfigurator();
          };

          break;
        default:
          break;
      }
    },
    { immediate: true }
  );

  watch(
    currentStep,
    () => {
      navigationMapControl.value = false;
      isCashCounter.value =
        (isCashCounter.value || navigation.currentStep > 14) &&
        navigation.currentStep !== 14;

      switch (currentStep.value) {
        case -1:
          break;
        case 0:
          break;
        case 1:
          break;
        case 4:
          navigationCallback = () => {
            slider.value.slide.nextStep();
            navigationMapControl.value = false;
          };

          break;

        case 5:
          setTimeout(() => {
            navigationMapControl.value = true;
          }, 3000);
          navigationCallback = () => {
            slider.value.slide.nextStep();
            navigationMapControl.value = false;
          };

          break;
        case 7:
          break;
        case 9:
          break;
        case 10:
          break;

        case 11:
          navigationCallback = () => {
            slider.value.slide.nextStep();
            navigationMapControl.value = false;
          };

          break;

        case 12:
          navigationCallback = () => {
            slider.value.slide.nextStep();
            navigationMapControl.value = false;
          };
          break;

        case 14:
          navigationCallback = () => {
            slider.value.slide.nextStep();
            navigationMapControl.value = false;
          };

          break;

        case 15:
          navigationCallback = () => {
            slider.value.slide.nextStep();
            navigationMapControl.value = false;
          };
          break;
        case 16:
          break;

        case 17:
          navigationCallback = () => {
            slider.value.slide.nextStep();
            navigationMapControl.value = false;
          };

          break;

        case 18:
          break;

        default:
          setTimeout(() => {
            nextBtnControl.value = true;
            navigationMapControl.value = true;
          }, 3000);
          break;
      }
    },
    { immediate: true }
  );

  onMounted(() => {
    if (process.env.NODE_ENV === "production") return;

    document.addEventListener("keydown", (event) => {
      if (event.code == "ArrowRight") {
        navigation.stepForward();
      } else if (event.code == "ArrowLeft") {
        navigation.stepBackward();
      }
      if (event.code == "Escape") {
        // esc
        navigation.currentStep = -1;
        localStorage.setItem("quizeStep", 0);
        localStorage.setItem("taskStep", 0);
        localStorage.setItem("userMany", 0);
        localStorage.setItem("userName", "");
      }
    });
  });
</script>

<style lang="scss">
  .no-continue-button #further-btn {
    display: none;
  }

  #further-btn {
    visibility: hidden;
    opacity: 0;
    transition: all ease 0.2s;
  }

  #further-btn.visible {
    opacity: 1;
    visibility: visible;
  }

  .navigation {
    position: absolute;
    bottom: 90px;
    left: 50%;
    transform: translate(-50%, 0);
    right: 0;
    transition: all ease 0.4s;

    @media screen and (max-width: 1200px) {
      bottom: 10px;
    }
  }

  .next-btn {
    position: absolute;
    bottom: 20px;
    right: 90px;
    transition: all ease 0.4s;

    @media screen and (max-width: 1200px) {
      bottom: 10px;
      right: 10px;
    }
  }

  .prev-btn {
    position: absolute;
    bottom: 20px;
    left: 90px;
    transition: all ease 0.4s;

    @media screen and (max-width: 1200px) {
      bottom: 10px;
      left: 10px;
    }
  }

  .hidden {
    opacity: 0;
    visibility: hidden;
  }

  .cash-counter {
    position: absolute;
    top: 90px;
    left: 90px;

    @media screen and (max-width: 1200px), screen and (max-height: 750px) {
      top: 10px;
      left: 10px;
    }
  }
</style>
