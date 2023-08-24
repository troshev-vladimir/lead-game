<template>
  <router-view/>
</template>

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
