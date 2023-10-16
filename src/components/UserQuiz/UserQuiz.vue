<template>
    <div class="user-quiz">
        <audio ref="manySoundRef" :src="manySound"> </audio>
        <audio ref="failSoundRef" :src="failSound"> </audio>
        <audio ref="rightSoundRef" :src="rightSound"> </audio>
        <div class="content-wrapper">
            <div class="content" :class="{'content--hidden': !isShowedQuestion && isUserCanBegin}">
                <button 
                    v-if="!isShowedQuestion && isUserCanBegin" 
                    class="start-task-btn" 
                    @click="startTask"
                >
                    Начать выполнение
                </button>
                <TimerComponent class="timer" :time="time"></TimerComponent>
                <CashCounter class="cash-counter"></CashCounter>
                <div class="progress-bar">
                    <!-- {{ completedPersentage }} % -->
                    <ProgressBar 
                        :completed="completedPersentage" 
                        :total="totalQuizeStep" 
                        @skip="isSkipModal = true"
                    ></ProgressBar>
                </div>
                <div class="question" v-if="isShowedQuestion" v-html="currentTaskStep.question"></div>

                <div 
                    class="answers" 
                    :class="{
                        'single': currentTaskStep.usersAnswer,
                        'answers--wider': currentTaskStep.wider
                    }" 
                    v-if="isShowedQuestion"
                >
                    <UserInput 
                        v-if="currentTaskStep.usersAnswer"
                        v-model="usersAnswerValue"
                        @further="checkUsersCustomAnswer()"
                        :button-text="currentTaskStep.usersAnswer.buttonText"
                        :placeholder="currentTaskStep.usersAnswer.placeholder"
                        :error-text="usersAnswerError"
                    ></UserInput>
                    <template v-else>
                        <div 
                            class="answer"
                            v-for="(answer, idx) in currentTaskStep.answers"
                            @click="checkAnswer(answer)"
                            :key="idx"
                            :class="[
                                getAnswerStyle(answer), 
                                {
                                    'disabled': isButtonDisabled
                                }
                            ]"
                            v-html="answer.text"
                        ></div>
                    </template>
                </div>  

                <div 
                    class="explanation" 
                    v-if="currentExplanation" 
                    v-html="currentExplanation"
                >
                </div>
            </div>
        </div>    

        <div class="user-quiz__tips">
            <div class="video-wrapper">
                <video 
                    ref="video" 
                    :src="currentTipVideo" 
                    controls 
                    preload 
                    poster="@/assets/video-posters/vitaly.jpg"
                    controlslist="nodownload noremoteplayback noplaybackrate"
                ></video>
            </div>
            
            <div class="user-quiz__tip-text styled-scrollbars" v-html="currentDescription"></div>
        </div>

        <transition-group name="fade" mode="out-in">
            <div class="overlay" v-if="isCustomerCall || isCustomerTask || isSkipModal"></div>
            <CustomerCall :customer="quizeStep%2" v-if="isCustomerCall" @further="showTask" />
            <CustomerModalTask 
                :customer="quizeStep%2"
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
    import { computed, ref, reactive, onMounted, nextTick } from 'vue';
    import { quize } from './quize'
    import { useNavigationStore } from '@/store/navigation';
    import { useUserStore } from '@/store/user';
    import { useMeta } from 'vue-meta';
    import manySound from '@/assets/audio/many.mp3';
    import failSound from '@/assets/audio/fail.mp3';
    import rightSound from '@/assets/audio/right.mp3';
    import CashCounter from '@/components/CashCounter'
    import UserInput from '@/components/UserInput'
    import {validateEmail} from '@/utils/validators'
    import saveProgressOnServer from '@/utils/saveProgress'

    useMeta({
      title: 'Тестовое задание',
    })
    
    const navigation = useNavigationStore()
    const user = useUserStore()
    const penalty = 30

    const quizeReactive = reactive(quize)
    const quizeStep = ref(0)
    let currentMistakes = 0

    const taskStep = ref(0)
    const time = ref(0)
    let timer
    const currentExplanation = ref('')

    const currentQuizeStep = computed(() => {
        const step = quizeStep.value
        return quizeReactive[step]
    })

    const totalCurrentQuizeStep = computed(() => {
        if (currentQuizeStep.value) {
            return currentQuizeStep.value.content.quest.length
        } else {
            return 0
        }
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

        if(currentQuizeStep.value) {
            return currentQuizeStep.value.content.quest[step]
        } else {
            return {}
        }
    })

    const currentDescription = computed(() => {
        if(currentTaskStep.value.questionDescription?.text) {
            return currentTaskStep.value.questionDescription?.text
        }
        return currentQuizeStep.value.content.taskDescription.text
    })

    const currentTipVideo = computed(() => {
        if(currentTaskStep.value.questionDescription?.video) {
            return currentTaskStep.value.questionDescription?.video
        }
        return currentQuizeStep.value?.content.taskDescription.video
    }) 

    const isCustomerCall = ref(false)
    const isCustomerTask = ref(false)
    const isShowedQuestion = ref(false)
    const isCongrates = ref(false)
    const isUserCanBegin = ref(false)
    const isSkipModal = ref(false)
    const isButtonDisabled = ref(false)
    const video = ref(false)
    const manySoundRef = ref(null)
    const failSoundRef = ref(null)
    const rightSoundRef = ref(null)
    const usersAnswerValue = ref('')
    const usersAnswerError = ref('')
    
    const showTask = () => {
        isCustomerCall.value = false
        isCustomerTask.value = true
    }

    const saveCurrentQuizeStep = () => {
        localStorage.setItem('quizeStep', quizeStep.value) 
        localStorage.setItem('taskStep', taskStep.value) 
        localStorage.setItem('userMany', user.many)
        saveProgressOnServer()
    }

    const showQuizeDescription = () => {
        isCustomerTask.value = false

        if (quizeStep.value + 1 === quizeReactive.length && isCongrates.value) { 
            // последний таск после позравлений
            navigation.stepForward()
        }

        if (isCongrates.value) {
            // после поздравлений
            quizeStep.value++
            isUserCanBegin.value = false
            isShowedQuestion.value = false

            setTimeout(() => {
                isCongrates.value = false
                isCustomerCall.value = true
            }, 2000)
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
        // let manyAmount

        // if (time.value < 60 * currentQuizeStep.value.content.quest.length) {
        //     manyAmount = currentQuizeStep.value.summ
        // } else if (time.value < 60 * 2 * currentQuizeStep.value.content.quest.length) {
        //     manyAmount = currentQuizeStep.value.summ * 0.75
        // } else {
        //     manyAmount = currentQuizeStep.value.summ * 0.5
        // }

        // user.addMany(manyAmount)
        time.value = 0
        clearInterval(timer)
    }

    const addMany = () => {
        const summPerAnswer = currentQuizeStep.value.summ / totalCurrentQuizeStep.value
        const many = summPerAnswer - (currentMistakes * 0.25 * summPerAnswer)
        user.addMany(many)
        manySoundRef.value.play()
        rightSoundRef.value.play()
        currentMistakes = 0
    }

    const videoPlay = (event) => {
        event.target.play()
    }

    const increaseTaskStep = () => {
        if(taskStep.value + 1 < currentQuizeStep.value.content.quest.length) {
            // Закончили вопрос 
            setTimeout(() => {
                currentExplanation.value = ''
                taskStep.value++
                saveCurrentQuizeStep()
                isButtonDisabled.value = false
                video.value.addEventListener("canplaythrough", videoPlay)

                
            }, 500)
            
        } else {
            // Закончили задание 
            video.value.removeEventListener("canplaythrough", videoPlay)
            setTimeout(() => {
                taskStep.value = 0
                stopTimer()
                increaseQuizeStep()
                isButtonDisabled.value = false
            }, 2000)
        }
    }

    const explanationIntoView = () => {
        nextTick(() => {
            const explanation = document.querySelector('.explanation')
            explanation.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }) 
    }

    const checkAnswer = (answer) => {
        answer.isChecked = true
        currentExplanation.value = answer.explanation
        if (answer.isRight) {
            addMany()
            isButtonDisabled.value = true
            setTimeout(() => {
                increaseTaskStep()
            }, 500)
        } else {
            // time.value += penalty
            explanationIntoView()
            currentMistakes += 1
            failSoundRef.value.play()
        }
    }

    const checkUsersCustomAnswer = () => {
        const isCorrect = validateEmail(usersAnswerValue.value)

        if (isCorrect) {
            isButtonDisabled.value = true
            usersAnswerError.value = ''
            addMany()
            setTimeout(() => {
                saveCurrentQuizeStep()
                increaseTaskStep()
            }, 500)
        } else {
            usersAnswerError.value = 'Введите корректный email'
        }
        
    }

    const getAnswerStyle = (answer) => {
        if (!answer.isChecked) return ''
        return answer.isRight ? 'answer--right' : 'answer--wrong'
    }

    onMounted(() => {
        setTimeout(() => {
            isCustomerCall.value = true
        }, 1000)

        quizeStep.value = +localStorage.getItem('quizeStep') || 0
        taskStep.value = +localStorage.getItem('taskStep') || 0
        user.addMany(+localStorage.getItem('userMany') || 0)

        if (quizeStep.value >= totalQuizeStep) navigation.stepForward()
    }) 
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
        background-color: #c5d0e4;
        backdrop-filter: blur(100px);
        opacity: 0.7;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block;
    }

    .content-wrapper {
        width: 100%;
        height: 100vh;
        overflow: auto;
        display: flex;
    }
    
    .content {
        display: flex;
        flex-direction: column;
        position: relative;
        padding: 0 90px;
        flex: 1 1 100%;
        padding-top: 180px;

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

        .cash-counter {
            position: absolute;
            left: 90px;
            top: 90px;
        }

        .progress-bar {
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
            font-size: 16px;
            font-weight: 500;
            line-height: 130%; 
            // margin-bottom: 20px;
            text-align: left;

            @media screen and (max-width: 1200px) {
                padding: 16px;
            }
        }

        .answers {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            white-space: break-spaces;
            margin-bottom: 10px;

            :deep(.user-input) {
                input {
                    width: 100%;
                }
            }

            &--wider {
                grid-template-columns: 1fr;
            }

            &.single {
                grid-template-columns: 1fr;
            }

            .answer.disabled {
                pointer-events: none;   
            }

            .answer {
                cursor: pointer;
                border-radius: 16px;
                border: 1px solid #CCC;
                background: #FFF;
                padding: 30px 50px;

                color: #000;
                font-size: 16px;
                font-weight: 500;
                line-height: 130%; 

                @media screen and (max-width: 1200px) {
                    padding: 16px;
                }

                
                @media (hover: hover) and (pointer: fine) {
                    &:hover {
                        background-color: #eee;
                        transition: all ease .2s;
                        color: #0075EB;
                        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.30);
                    }
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
            font-size: 16px;
            font-weight: 500;
            line-height: 130%; 
            // margin-bottom: 20px;
            text-align: left;

            @media screen and (max-width: 1200px) {
                font-size: 16px;
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
        flex: 0 0 35%;

        .video-wrapper {
            width: 100%;
            position: relative;
            height: 0;
            padding-bottom: 56.25%;
            margin-bottom: 32px;

            @media screen and (max-width: 1200px) {
                margin-bottom: 16px;
            }
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
        padding-top: 0;
        overflow: auto;

        color: #010101;
        font-weight: 500;
        line-height: 130%;
        text-align: left;

        @media screen and (max-width: 1200px) {
            padding: 16px;
        }
    }
}


</style>

<style>
.user-quiz__tip-text > p, .customer-modal-task__text > p {
    margin-bottom: 20px;
}
</style>