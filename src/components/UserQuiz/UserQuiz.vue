<template>
    <div class="user-quiz">
        <div class="content" :class="{'content--hidden': !isShowedQuestion}">
            <button v-if="!isShowedQuestion && isUserCanBegin" class="start-task-btn" @click="startTask">
                Начать выполнение
            </button>
            <TimerComponent class="timer" :time="time"></TimerComponent>
            <div class="progress-bar">
                <!-- {{ completedPersentage }} % -->
                <ProgressBar :completed="completedPersentage" :total="totalQuizeStep" @skip="isSkipModal = true"></ProgressBar>
            </div>
            <div class="question" v-if="isShowedQuestion" v-html="currentTaskStep.question"></div>

            <div class="answers" v-if="isShowedQuestion">
                <div 
                    class="answer" 
                    v-for="(answer, idx) in currentTaskStep.answers" 
                    @click="checkAnswer(answer)"
                    :key="idx"
                    :class="getAnswerStyle(answer)"
                >{{ answer.text }}</div>
            </div>  

            <div class="explanation" v-if="currentExplanation" v-html="currentExplanation">
            </div>
        </div>    

        <div class="user-quiz__tips">
            <div class="video-wrapper">
                <video ref="video" controls preload controlslist="nodownload noremoteplayback noplaybackrate">
                    <source :src="currentQuizeStep.content.taskDescription.video" type="video/mp4">
                </video>
            </div>
            
            <div class="user-quiz__tip-text" v-html="currentQuizeStep.content.taskDescription.text"></div>
        </div>

        <transition-group name="fade" mode="out-in">
            <div class="overlay" v-if="isCustomerCall || isCustomerTask || isSkipModal"></div>
            <CustomerCall :customer="quizeStep%2" v-if="isCustomerCall" @further="showTask" />
            <CustomerModalTask 
                v-if="isCustomerTask" 
                :is-congrates="isCongrates"
                @further="showQuizeDescription"
                :video-link="isCongrates ? currentQuizeStep.congrates.video : currentQuizeStep.task.video"
                :text="isCongrates ? currentQuizeStep.congrates.text : currentQuizeStep.task.text"
            >
            </CustomerModalTask>
            <SkipQuizeModal 
                v-if="isSkipModal" 
                @accept="navigation.stepForward"
                @cancle="isSkipModal = false"
            ></SkipQuizeModal>
        </transition-group>
    </div>
</template>

<script setup>
    import CustomerCall from '../CustomerCall'
    import CustomerModalTask from '../CustomerModalTask'
    import TimerComponent from '../TimerComponent'
    import ProgressBar from '../ProgressBar'
    import SkipQuizeModal from '../SkipQuizeModal'
    import { computed, ref, reactive } from 'vue';
    import { quize } from './quize'
    import { useNavigationStore } from '@/store/navigation';
    import { useUserStore } from '@/store/user';
    
    const navigation = useNavigationStore()
    const user = useUserStore()

    const penalty = 30

    const quizeReactive = reactive(quize)
    const quizeStep = ref(0)

    const taskStep = ref(0)
    const time = ref(0)
    let timer
    const currentExplanation = ref('')

    const currentQuizeStep = computed(() => {
        const step = quizeStep.value
        return quizeReactive[step]
    })

    const totalCurrentQuizeStep = computed(() => {
        return currentQuizeStep.value.content.quest.length
    })

    let totalQuizeStep = 0
    quize.forEach(step => {
        totalQuizeStep += step.content.quest.length
    })

    const completedQuizeSteps = computed(() => {
        const completedQuize = quize.slice(0, quizeStep.value)
        return completedQuize.reduce((acc, cur) => {
            return acc += cur.content.quest.length
        }, 0)
    }) 

    const completedPersentage = computed(() => {
        // return Math.round((completedQuizeSteps.value + taskStep.value) / totalQuizeStep * 100)
        return completedQuizeSteps.value + taskStep.value
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
    const isSkipModal = ref(false)
    const video = ref(false)

    const showTask = () => {
        isCustomerCall.value = false
        isCustomerTask.value = true
    }

    const showQuizeDescription = () => {
        isCustomerTask.value = false

        if (quizeStep.value + 1 === quizeReactive.length && isCongrates.value) { 
            // последний таск после позравлений
            navigation.stepForward()
        }

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
        startTimer()
    }

    const increaseQuizeStep = () => {
        if(quizeStep.value + 1 < quizeReactive.length) {
            isCustomerCall.value = true
            isCongrates.value = true

        } else {
            isCustomerCall.value = true
            isCongrates.value = true
            // navigation.stepForward()
        }
    }

    const startTimer = () => {
        timer = setInterval(() => {
            time.value++;
        }, 1000);
    }

    const stopTimer = () => {
        let manyAmount

        if (time.value < 60 * currentQuizeStep.value.content.quest.length) {
            manyAmount = currentQuizeStep.value.summ
        } else if (time.value < 60 * 2 * currentQuizeStep.value.content.quest.length) {
            manyAmount = currentQuizeStep.value.summ * 0.75
        } else {
            manyAmount = currentQuizeStep.value.summ * 0.5
        }

        user.addMany(manyAmount)
        time.value = 0
        clearInterval(timer)
    }

    const increaseTaskStep = () => {
        if(taskStep.value + 1 < currentQuizeStep.value.content.quest.length) {
            setTimeout(() => {
                currentExplanation.value = ''
                taskStep.value++
            }, 500)
        } else {
            taskStep.value = 0
            stopTimer()
            increaseQuizeStep()
        }
    }

    const checkAnswer = (answer) => {
        answer.isChecked = true
        currentExplanation.value = answer.explanation
        if (answer.isRight) {
            increaseTaskStep()
        } else {
            time.value += penalty
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
    width: 100%;
    
    .start-task-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 16px;
        background: #26A669;
        padding: 20px 20px;
        color: #FFF;
        font-size: 30px;
        font-weight: 700;
        line-height: 130%;
    }

    .overlay {
        z-index: 100;
        background-color: #fff;
        backdrop-filter: blur(100px);
        opacity: 0.7;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
    }
    .content {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
        padding: 0 90px;
        flex: 1 1 auto;

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
            margin-top: 220px;
            margin-bottom: 25px;
        }

            
        .question {
            background-color: #fff;
            border-radius: 16px;
            padding: 30px 45px;
            margin-bottom: 25px;
            min-height: 50px;
            overflow: auto;
            flex: 0 1 auto;

            color: #000;
            font-size: 22px;
            font-weight: 500;
            line-height: 130%; 
            // margin-bottom: 20px;
            text-align: left;
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
        .explanation {
            border-radius: 16px;
            padding: 30px 45px 45px 45px;
            margin-top: 50px;
            border: 1px solid #F00;
            background: #FFF1F1;

            color: #000;
            font-size: 22px;
            font-weight: 500;
            line-height: 130%; 
            // margin-bottom: 20px;
            text-align: left;
        }
    }

    &__tips {
        overflow: hidden;
        height: 100vh;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 0;
        flex: 0 0 35%;

        .video-wrapper {
            width: 100%;
            position: relative;
            height: 0;
            padding-bottom: 56.25%;
        }
        video {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            transform: none;
            object-fit: cover;
            background-color: #333;
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

        
    }

    
}


</style>

<style>
.user-quiz__tip-text > p, .customer-modal-task__text > p {
    margin-bottom: 20px;
}
</style>