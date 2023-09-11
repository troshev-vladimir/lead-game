<template>
    <div class="task">
        <UserQuiz></UserQuiz>
    </div>
</template>

<script setup>
import UserQuiz from '../../UserQuiz'
</script>

<style>
.screen {
    width: 50vw;
    height: 100%;
}

.editor {
    width: 50vw;
    height: 100%;
    padding: 0;
}

.task {
    background-color: #ccc;
    width: 100vw;
    height: 100vh;
}
</style>