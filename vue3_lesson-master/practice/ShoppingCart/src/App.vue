<script setup>
import Product from "./components/Product.vue";
import { ref } from "vue";

import ProductPinia from "./components/Product-pinia.vue";
import { useFruitStore } from "./store/fruit_Stores";
const fruitStore = useFruitStore();

const cartPrice = ref(0);
const totalPrice = (price) => {
  cartPrice.value += price;
};
</script>

<template>
  <div
    class="container border rounded d-flex flex-column justify-content-center align-items-center"
  >
    <h2>商品清單</h2>
    <Product name="香蕉" :price="20" @updateCart="totalPrice" />
    <Product name="芭樂" :price="30" @updateCart="totalPrice" />
    <Product name="苦瓜" :price="40" @updateCart="totalPrice" />
    <Product name="蓮霧" :price="50" @updateCart="totalPrice" />
    <Product name="荔枝" :price="60" @updateCart="totalPrice" />
    <h2>總價：{{ cartPrice }}元</h2>
  </div>

  <div class="container border rounded">
    <ProductPinia />
    <h2>總價：{{ fruitStore.totalPrice }}元</h2>
  </div>
</template>

<style scoped></style>
