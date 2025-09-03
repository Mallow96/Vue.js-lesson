<template>
  <div class="container border p-3 m-3 rounded">
    <h2>商品資料</h2>

    <div><label for="price">單價：</label><input type="text" v-model="price" /></div>
    <div><label for="count">數量：</label> <input type="text" v-model="count" /></div>

    <p>總金額:{{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

// 商品數量
const count = ref(0);
// 每個商品的單價
const price = ref(100);
// 總價
const totalPrice = ref(0);

// watch 範例
// 偵探模式：明確告訴它，只要 count 改變，就重新計算總價。
// watch(count, (newCount, oldCount) => {
//   console.log(`watch: count 從 ${oldCount} 變成 ${newCount}`);
//   totalPrice.value = newCount * price.value;
// });

// watchEffect 範例
// 自動感應器模式：只要這個函數裡任何響應式資料（count）改變，就重新執行。
watchEffect(() => {
  totalPrice.value = count.value * price.value;
  console.log(`watchEffect: 目前的總價是 ${totalPrice.value}`);
});
</script>

<style scoped></style>
