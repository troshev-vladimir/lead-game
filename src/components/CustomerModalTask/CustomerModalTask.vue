<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="customer-modal-task">
        <img src="@/assets/task/customer-task.jpg" alt="task">
        <div class="customer-modal-task__text">
            <p>Добрый день! У меня есть задача для тебя.</p>
            <p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p>
            <p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p>
            <p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p>
            <p>Мои менеджеры заполняют карточки клиентов вручную и часто делают ошибки в номерах телефонов и электронных почтах. Возникает путаница: сотрудники вносят данные в разных форматах, делают опечатки, вводят много символов или мало!</p>
        </div>
        <button>
            Погнали
        </button>
    </div>
</template>

<script>

</script>
<style lang="scss" scoped>
.customer-modal-task {
    overflow: hidden;
    border-radius: 16px;
    max-width: 850px;
    max-height: 850px;
    height: 80vh;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;


    img {
        width: 100%;
        position: static;
        transform: none;
        height: 30vh;
        object-fit: cover;
        height: 851px;
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

    button {
        width: 100%;
        background-color: #fff;
        padding: 20px 30px;
        color: #010101;
        font-size: 22px;
        font-weight: 500;
        line-height: 130%; 
        border: none;
        border-top: 1px solid #CCC;
        cursor: pointer;
        transition: all ease .2s;

        &:hover {
            background-color: #bbb5b5;
        }
    }
}
</style>