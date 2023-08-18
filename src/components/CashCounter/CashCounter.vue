<template>
  <div class="cash-counter">
    <div class="image">
        <img :src="CoinImage" alt="coin">
    </div>

    <div class="count">
        <span>30 000</span>
    </div>
  </div>
</template>

<script setup>
import CoinImage from '@/assets/coin.png'

</script>

<style lang="scss">
.cash-counter {
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #fff;

    .image {
        padding: 5px 15px;
        transform: rotate(-6.24deg);
        flex-shrink: 0;
        display: flex;
        align-items: center;

        img {
            width: 45px;
            height: 45px;
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
    }
}
</style>