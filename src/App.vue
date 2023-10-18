<template>
  <router-view/>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from '@/store/user'
import { useNavigationStore } from '@/store/navigation'
import { storeToRefs } from 'pinia';

const user = useUserStore()
const navigation = useNavigationStore()
const savedUserName = localStorage.getItem("userName")
const { userName, many } = storeToRefs(user)
const { currentStep} = storeToRefs(navigation)

userName.value = savedUserName

onMounted( async () => {
    await user.restoreProgress()
    currentStep.value = +localStorage.step || -1
    userName.value = localStorage.userName || ''
    many.value = localStorage.userMany || 0

    const id = localStorage.getItem("userPhone") || "";
    const token = localStorage.getItem("userToken") || "";

    //if (!id || !token) {
   //   window.location.href = '/configurator/auth';
   // }
}) 

</script>

<style lang='scss'>
@font-face {
    font-family: "Gogh";
    src: url("/src/assets/fonts/Gogh-Medium.ttf");
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Gogh', sans-serif;
  font-weight: 800;
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
</style>
