<template>
    <div class="user-quiz">
        <div class="content" :class="{'content--hidden': !isShowedQuestion}">
            <button v-if="!isShowedQuestion && isUserCanBegin" class="start-task-btn" @click="startTask">
                startTask
            </button>
            <TimerComponent class="timer"></TimerComponent>
            <div class="progress-bar">
                <ProgressBar :completed="taskStep" ></ProgressBar>
            </div>
            <div class="question" v-if="isShowedQuestion">
                {{currentTaskStep.question}}
            </div>

            <div class="answers" v-if="isShowedQuestion">
                <div 
                    class="answer" 
                    v-for="(answer, idx) in currentTaskStep.answers" 
                    @click="checkAnswer(answer)"
                    :key="idx"
                    :class="getAnswerStyle(answer)"
                >{{ answer.text }}</div>
            </div>  
        </div>    

        <div class="user-quiz__tips">
            <video ref="video" controls>
                <source src="https://dl.dropboxusercontent.com/s/t6w9pil8yhkkc9i32atjv/22.mp4?rlkey=5r6uh0ge3m7vmy82g2943jydm&dl=0" type="video/mp4">
            </video>
            <div class="user-quiz__tip-text">
                {{currentQuizeStep.content.taskDescription.text}}
            </div>
        </div>

        <transition-group name="fade" mode="out-in">
            <CustomerCall v-if="isCustomerCall" @further="showTask" />
            <CustomerModalTask 
                v-if="isCustomerTask" 
                @further="showQuizeDescription"
                :video="isCongrates ? currentQuizeStep.congrates.video : currentQuizeStep.task.video"
            >
             {{ isCongrates ? currentQuizeStep.congrates.text : currentQuizeStep.task.text }}
            </CustomerModalTask>
        </transition-group>
    </div>
</template>

<script setup>
    import CustomerCall from '../CustomerCall'
    import CustomerModalTask from '../CustomerModalTask'
    import TimerComponent from '../TimerComponent'
    import ProgressBar from '../ProgressBar'
    import { computed, ref, reactive } from 'vue';
    import { quize } from './quize'

    const quizeReactive = reactive(quize)
    const quizeStep = ref(0)
    const taskStep = ref(0)

    const currentQuizeStep = computed(() => {
        const step = quizeStep.value
        return quizeReactive[step]
    })

    const currentTaskStep = computed(() => {
        const step = taskStep.value
        return currentQuizeStep.value.content.quest[step]
    })

    const isCustomerCall = ref(true)
    const isCustomerTask = ref(false)
    const isShowedQuestion = ref(false)
    const isCongrates = ref(false)
    const isUserCanBegin = ref(false)
    const video = ref(false)

    const showTask = () => {
        isCustomerCall.value = false
        isCustomerTask.value = true
    }

    const showQuizeDescription = () => {
        isCustomerTask.value = false

        if (isCongrates.value) {
            isCongrates.value = false
            quizeStep.value++
            isUserCanBegin.value = false
            isShowedQuestion.value = false
            isCustomerCall.value = true
        } else {
            isUserCanBegin.value = true
            video.value.play()
        }
        
    }

    const startTask = () => {
        video.value.pause()
        isShowedQuestion.value = true
    }

    const increaseQuizeStep = () => {
        if(quizeStep.value + 1 < quizeReactive.length) {
            
            isCustomerCall.value = true
            isCongrates.value = true

        } else {
            console.log('Конец');
        }
    }

    const increaseTaskStep = () => {
        if(taskStep.value + 1 < currentQuizeStep.value.content.quest.length) {
            taskStep.value++
        } else {
            taskStep.value = 0
            increaseQuizeStep()
        }
    }

    const checkAnswer = (answer) => {
        answer.isChecked = true

        if (answer.isRight) {
            increaseTaskStep()
        }
    }

    const getAnswerStyle = (answer) => {
        if (!answer.isChecked) return ''
        return answer.isRight ? 'answer--right' : 'answer--wrong'
    }
</script>

<style lang="scss" scoped>
.user-quiz {
    display: flex;
    
    .start-task-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
    }
    .content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
        padding: 0 90px;

        &--hidden {
            &::after {
                display: block;
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 10;
                background-color: #000;
                opacity: 0.5;
            }
        }

        .timer {
            position: absolute;
            right: 90px;
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

                &--right, &--wrong {
                    pointer-events: none;
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

        video {
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