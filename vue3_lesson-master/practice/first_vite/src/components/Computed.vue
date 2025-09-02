<script setup>
import {ref, computed} from "vue";

const num = ref(0);
const numDoubled = computed( () => {
    let doubled = num.value *2;
    return doubled;
})
</script>

<template>
<div class="container border">
    <form action="">
    <label for="">
        輸入數字：
        <input type="number" class="bg-white text-black" v-model="num">
    </label>

    <div class="">計算數值的兩倍為：{{numDoubled}}</div>
    </form>
</div>
</template>

<style scoped>

</style>