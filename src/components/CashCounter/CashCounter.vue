<template>
  <div class="cash-counter">
    <div class="image">
        <img :src="CoinImage" alt="coin">
    </div>

    <div class="count">
        <span>{{user.many}}</span>
    </div>
  </div>
</template>

<script setup>
import CoinImage from '@/assets/coin.png'
import { useUserStore } from '@/store/user';
const user = useUserStore()
</script>

<style lang="scss" scoped>
.cash-counter {
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #fff;

    @media screen and (max-width: 900px) {
        border-radius: 5px;
    }

    .image {
        padding: 5px 15px;
        transform: rotate(-6.24deg);
        flex-shrink: 0;
        display: flex;
        align-items: center;

        @media screen and (max-width: 900px) {
            padding: 2px 6px;
        }

        img {
            width: 45px;
            height: 45px;

            @media screen and (max-width: 900px) {
                width: 25px;
                height: 25px;
            }
        }
    }

    .count {
        padding: 15px 60px 15px 45px;
        color: #000;
        font-family: Gogh;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        background: #F2F2F2;

        @media screen and (max-width: 900px) {
            font-size: 16px;
            padding: 5px;
        }
    }
}
</style>