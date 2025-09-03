<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({ name: String, price: Number });
const emits = defineEmits(["updateCart"]);
const addToCart = () => {
  emits("updateCart", props.price);
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center gap-3 my-2 mx-3">
    <h3 class="m-0">{{ name }}</h3>
    <p class="m-0">
      一斤
      <span class="text-danger">{{ price }}</span>
      元
    </p>
    <button type="button" class="btn btn-danger" @click="addToCart()">加入購物車</button>
  </div>
</template>

<style scoped></style>
