<template>
  <div class="rotate-mobile">
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9816 2.00002C9.30951 2.00481 6.88334 3.0578 5.09213 4.76957L3.65206 3.32949C3.04238 2.71981 2 3.15159 2 4.01376V9.41937C2 9.95384 2.43327 10.3871 2.96774 10.3871H8.37334C9.23552 10.3871 9.66729 9.34473 9.05766 8.73505L7.37419 7.05159C8.6187 5.8863 10.2291 5.24082 11.9399 5.22606C15.6656 5.19388 18.8062 8.209 18.7739 12.0584C18.7434 15.71 15.7829 18.7742 12 18.7742C10.3416 18.7742 8.77431 18.1823 7.53911 17.0986C7.34786 16.9308 7.05903 16.941 6.87911 17.1209L5.27984 18.7201C5.08338 18.9166 5.0931 19.2369 5.29927 19.4231C7.0725 21.0247 9.42233 22 12 22C17.5228 22 21.9999 17.5229 22 12.0001C22 6.4836 17.4981 1.99014 11.9816 2.00002Z"
        fill="white"
      />
    </svg>
    <p>Переверните устройство</p>
  </div>
  <router-view />
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useUserStore } from "@/store/user";
import { useNavigationStore } from "@/store/navigation";
import { storeToRefs } from "pinia";
import { useMeta } from "vue-meta";

const user = useUserStore();
const navigation = useNavigationStore();
const savedUserName = localStorage.getItem("userName");
const { userName, many } = storeToRefs(user);
const { currentStep, taskStep } = storeToRefs(navigation);

userName.value = savedUserName
useMeta({
  title: "ITS GAME ",
});

const unauthorisedHandler = (e) => {
  if (currentStep.value <= 15)  return
  localStorage.removeItem("userToken");

  if (process.env.FOR_PAGES === "true") {
    window.location.replace("/test/configurator/auth?unauthorised=true");
  } else if (process.env.NODE_ENV === "production") {
    window.location.replace("/configurator/auth?unauthorised=true");
  } else {
    console.log("to auth 401");
  }
};

const goToConfigurator = () => {
  if (process.env.FOR_PAGES === "true") {
    window.location.replace("/test/configurator/");
  } else if (process.env.NODE_ENV === "production") {
    window.location.replace("/configurator/");
  } else {
    console.log("go to configurator");
  }
};

onMounted(async () => {
  window.addEventListener("unauthorized", unauthorisedHandler);
  try {
    await user.restoreProgress();

    if (localStorage.gameComleted === "true") {
      goToConfigurator();
    }


    currentStep.value = +localStorage.step || -1;
    taskStep.value = +localStorage.taskStep || 0;
    userName.value = localStorage.userName || "";
    many.value = +localStorage.userMany || 0;

    const id = localStorage.getItem("userPhone") || "";
    const token = localStorage.getItem("userToken") || "";

    if (!id || !token) {
      if (currentStep.value <= 15) return
      if (process.env.NODE_ENV === "production") {
        window.location.replace("/configurator/auth?unauthorised=true");
      } else if (process.env.FOR_PAGES === "true") {
        window.location.replace("/test/configurator/auth?unauthorised=true");
      } else {
        console.log("go to auth");
      }
    }

    if (+localStorage.step === 18) {
      goToConfigurator();
    }
  } catch (error) {
    console.log(error);
  }
}),
  onBeforeUnmount(() => {
    window.removeEventListener("unauthorized", unauthorisedHandler);
  });
</script>

<style lang='scss'>
@font-face {
  font-family: "Gogh";
  src: url("/src/assets/fonts/Gogh-Medium.ttf"),
    url("/src/assets/fonts/Gogh-Medium.ttf");
}

.rotate-mobile {
  display: none;
  pointer-events: none;
}

@media screen and (orientation: portrait) and (hover: none) and (pointer: coarse),
  screen and (max-width: 1024px) and (hover: none) and (pointer: coarse) {
  .rotate-mobile {
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background: #000;
    text-align: center;
    color: #fff;
    font-size: 32px;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: "Gogh", sans-serif;
  font-weight: inherit;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}

#app {
  position: relative;
}

#app {
  position: relative;
}

[id|=text] {
    opacity: 0;
}

.visible {
    transition: all ease .5s;
    opacity: 1 !important;
}

[id|=interactive] {
    cursor: pointer;
    position: relative;
    z-index: 2;
    animation: 3s blinker ease infinite;

    &:hover {
        animation: none;
        opacity: 1;
    }
}

.styled-scrollbars {
  /* плашка-бегунок и фон */
  scrollbar-color: #cccccc #f2f2f2;
}
.styled-scrollbars::-webkit-scrollbar {
  width: 16px; /* в основном для вертикальных полос прокрутки */
  height: 10px; /* в основном для горизонтальных полос прокрутки */
  border-radius: 10px;
}
.styled-scrollbars::-webkit-scrollbar-thumb { /* плашка-бегунок */
  border-radius: 10px;
  background: #cccccc;
}
.styled-scrollbars::-webkit-scrollbar-track { /* фон */
  background: #f2f2f2;
}

@keyframes blinker {
    from {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

#text-field:hover {
    cursor: pointer;

    #hover {
        opacity: 1;
    }
}

.border-animation {
  animation: 1s border-animation ease infinite alternate;
}

@keyframes border-animation {
  from {
    box-shadow: 0px 0px 30px #fff;
  }

  to {
    box-shadow: 0px 0px 0px #fff;
  }
}

</style>
