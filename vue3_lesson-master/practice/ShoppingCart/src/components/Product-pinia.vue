<script setup>
import { useFruitStore } from "../store/fruit_Stores";
const fruitStore = useFruitStore();
const fruitList = fruitStore.fruits;
</script>

<template>
  <div
    class="d-flex justify-content-between align-items-center gap-3 my-2 mx-3"
    v-for="item in fruitList"
  >
    <h3 class="m-0">{{ item.name }}</h3>
    <p class="m-0">
      一斤
      <span class="text-danger">{{ item.price }}</span>
      元
    </p>
    <button
      type="button"
      class="btn btn-danger"
      @click="fruitStore.addToCart(item.price)"
    >
      加入購物車
    </button>
  </div>
</template>

<style scoped></style>
