<template>
  <router-view/>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useUserStore } from '@/store/user'
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';
import { useMeta } from "vue-meta";

const user = useUserStore()
const navigation = useNavigationStore()
const savedUserName = localStorage.getItem("userName")
const { userName, many } = storeToRefs(user)
const { currentStep, quseStep, taskStep, } = storeToRefs(navigation)

userName.value = savedUserName
useMeta({
  title: 'ITS GAME ',
})

const unauthorisedHandler = (e) =>  {
  localStorage.removeItem("userToken");

  if (process.env.FOR_PAGES === "true") {
    window.location.replace("/test/configurator/auth?unauthorised=true")
  } else if (process.env.NODE_ENV === "production") {
    window.location.replace("/configurator/auth?unauthorised=true")
  } else {
    console.log("to auth 401");
  }
}

const goToConfigurator = () =>  {
  if (process.env.FOR_PAGES === 'true') {
    window.location.replace('/test/configurator/');
  } else if (process.env.NODE_ENV === 'production') {
    window.location.replace('/configurator/') 
  } else {
    console.log('go to configurator');
  }
}

onMounted( async () => {
  window.addEventListener("unauthorized", unauthorisedHandler);
  screen.orientation.lock(); 
  try {
    await user.restoreProgress()

    if (localStorage.gameComleted === 'true') {
      goToConfigurator()
    }
  
    currentStep.value = +localStorage.step || -1
    quseStep.value = +localStorage.quizeStep || 0
    taskStep.value = +localStorage.taskStep || 0
    userName.value = localStorage.userName || ''
    many.value = +localStorage.userMany || 0

    const id = localStorage.getItem("userPhone") || "";
    const token = localStorage.getItem("userToken") || "";

    if (!id || !token) {
      if (process.env.NODE_ENV === 'production') {
        window.location.replace('/configurator/auth?unauthorised=true');
      } else if (process.env.FOR_PAGES === 'true') {
        window.location.replace('/test/configurator/auth?unauthorised=true');
      } else {
        console.log('go to auth');
      }
    }

    if (+localStorage.step === 18) {
      goToConfigurator()
    }
  } catch (error) {
    console.log(error);
  }
}),
onBeforeUnmount(() => {
  window.removeEventListener("unauthorized", unauthorisedHandler);
}) 

</script>

<style lang='scss'>
@font-face {
  font-family: "Gogh";
  src:
    url("/src/assets/fonts/Gogh-Medium.ttf"),
    url("/src/assets/fonts/Gogh-Medium.svg"); 
}

@media only screen and (orientation:portrait) {
  body {
    height: 100vw;
    transform: rotate(90deg);
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Gogh', sans-serif;
  font-weight: inherit;

  @media only screen and (max-device-width: 480px) {      
    -webkit-text-size-adjust: 100%;
  }
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
