<template>
    <div class="user-quiz">
        <CustomerCall v-if="false"></CustomerCall>
        <CustomerModalTask v-if="false"></CustomerModalTask>

        <div class="question">
            
        </div>    

        <div class="tips">
            <img src="@/assets/task/customer-task.jpg">
            <div class="tips__text">
                <p>Добрый день! У меня есть задача для тебя.</p>
                <p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p>
                <p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p>
                <p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p>
                <p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p>
            </div>
        </div>


    </div>
</template>

<script setup>
    import CustomerCall from '../CustomerCall'
    import CustomerModalTask from '../CustomerModalTask'
</script>

<style lang="scss" scoped>

.question {

}
.tips {
    overflow: hidden;
    max-width: 850px;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 33vw;

    img {
        width: 100%;
        position: static;
        transform: none;
        height: 30vh;
        object-fit: cover;
        height: 523px;
    }

    &__text {
        padding: 32px 48px;
        overflow: auto;

        color: #010101;
        font-size: 22px;
        font-weight: 500;
        line-height: 130%;
        text-align: left;

        p:not(:last-child) {
            padding-bottom: 20px;
        }
    }
}
</style>