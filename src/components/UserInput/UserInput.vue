<template>
  <div class="user-input">
        <input 
            :placeholder="placeholder" 
            type="text"
            v-model="input" 
        >
        <button @click="emit('further')">
            {{ buttonText }}
            <svg width="50" height="14" viewBox="0 0 50 14" xmlns="http://www.w3.org/2000/svg">
                <rect y="6.0083" width="42" height="2"/>
                <path d="M49.0586 7.00877L34.8086 13.937L39.5 7.0083L34.8086 0.0805664L49.0586 7.00877Z"/>
            </svg>
        </button>
        <div class="error">
            {{ errorText }}
        </div>
    </div>
</template>

<script setup>
import {computed, defineEmits, defineProps, ref} from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
    },
    buttonText: {
        type: String
    },
    errorText: {
        type: String
    },
    placeholder: {
        type: String
    }
    
})

const emit = defineEmits(['further', "update:modelValue"])
const input = computed({
    get() {
        return props.modelValue
    },
    set(newValue) {
        emit('update:modelValue', newValue)
    }
})


</script>

<style lang="scss" scoped>
.user-input {
    display: flex;
    position: relative;

    input {
        padding: 20px 24px;
        outline: none;
        border-radius: 20px 0px 0px 20px;
        border: 1px solid #CCC;
        background: #F2F2F2;
        width: 200px;

        color: #010101;
        font-size: 22px;
        font-weight: 500;
        line-height: 130%;
    }

    button  {
        border-radius: 0px 20px 20px 0px;
        border: 1px solid #CCC;
        background: #FFF;
        font-family: Gogh;
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%;
        padding: 20px;
        display: flex;
        align-items: center;

        svg {
            position: static;
            transform: none;
            fill: currentColor;
            display: inline-block;
            margin-left: 20px;
            width: 50px;
        }

        &:hover {
            transition: all ease .2s;
            cursor: pointer;
            color: #0075EB;
            box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.30);
        }
    }

    .error {
        color: #ff4848;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: 80px;
        white-space: nowrap
    }
}
</style>