<template>
  <div class="container border p-3 m-3 rounded">
    <h2>Watch</h2>

    <div>
      <input
        type="text"
        name=""
        id="inputVal"
        class="bg-white text-black"
        v-model="inputVal"
      />
    </div>
    <label for="inputVal">輸入的文字長度為：{{ inputLength }}</label>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const inputVal = ref("");
const inputLength = ref(0);

watch(inputVal, (newVal) => {
  inputLength.value = newVal.length;
});
</script>
<style scoped></style>
