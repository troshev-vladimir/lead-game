<template>
    <div class="user-quiz">
        <CustomerCall v-if="false"></CustomerCall>
        <CustomerModalTask v-if="false"></CustomerModalTask>

        <div class="content">
            <TimerComponent class="timer"></TimerComponent>
            <div class="progress-bar">
                <ProgressBar ></ProgressBar>
            </div>
            <div class="question">
                <p>Выбери, как должна выглядеть верная маска для ввода стандартного мобильного номера телефона.</p>
                <p>Выбери, как должна выглядеть верная маска для ввода стандартного мобильного номера телефона.</p>
                <p>Выбери, как должна выглядеть верная маска для ввода стандартного мобильного номера телефона.</p>
                <p>Выбери, как должна выглядеть верная маска для ввода стандартного мобильного номера телефона.</p>
                <p>Выбери, как должна выглядеть верная маска для ввода стандартного мобильного номера телефона.</p>
                <p>Выбери, как должна выглядеть верная маска для ввода стандартного мобильного номера телефона.</p>
                <p>Выбери, как должна выглядеть верная маска для ввода стандартного мобильного номера телефона.</p>
            </div>

            <div class="answers">
                <div class="answer answer--wrong">+7(999) 999 99 99</div>
                <div class="answer answer--right">+7(999) 999 99 99</div>
                <div class="answer">+7(999) 999 99 99</div>
                <div class="answer">+7(999) 999 99 99</div>
            </div> 
        </div>    

        <div class="user-quiz__tips">
            <img src="@/assets/task/customer-task.jpg">
            <div class="user-quiz__tip-text">
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
    import TimerComponent from '../TimerComponent'
    import ProgressBar from '../ProgressBar'
</script>

<style lang="scss" scoped>
.user-quiz {
    display: flex;
    
    .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
        margin: 0 90px;

        .timer {
            position: absolute;
            right: 0;
            top: 90px;
        }

        .progress-bar {
            position: absolute;
            left: 50%;
            top: 90px;
            transform: translate(-50%, 0);
            width: 293px;
        }
            
        .question {
            margin-top: 220px;
            background-color: #fff;
            border-radius: 16px;
            padding: 30px 45px;
            margin-bottom: 70px;
            min-height: 200px;
            overflow: auto;
            flex: 0 1 auto;

            p {
                color: #000;
                font-size: 22px;
                font-weight: 500;
                line-height: 130%; 
                margin-bottom: 20px;
                text-align: left;
            }   
        }

        .answers {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 10px;
            .answer {
                cursor: pointer;
                border-radius: 16px;
                border: 1px solid #CCC;
                background: #FFF;
                padding: 30px 50px;

                color: #000;
                font-size: 22px;
                font-weight: 500;
                line-height: 130%; 

                &:hover {
                    background-color: #eee;
                    transition: all ease .2s;
                    color: #0075EB;
                    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.30);
                }

                &--right {
                    color: #26A669
                }

                &--wrong {
                    color: #EB0000
                }
            }
        }
    }

    &__tips {
        overflow: hidden;
        height: 100vh;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 0;
        flex: 1 0 35%;

        img {
            width: 100%;
            position: static;
            transform: none;
            height: 30vh;
            object-fit: cover;
            height: 523px;
        }
    }

    &__tip-text {
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