<script setup>
import { ref } from "vue";

let nameInput = ref("");
let nameDisplay = ref("");

let nameIsInput = ref(true);

const greet = () => {
  const nameLength = ref(nameInput.value.length);
  if (nameLength.value > 0) {
    nameDisplay.value = nameInput.value;
    nameIsInput.value = false;
  }
  console.log(nameLength.value);
};

const clear = () => {
  nameInput.value = "";
  nameDisplay.value = "";
  nameIsInput = ref(true);
};
</script>

<template>
  <div class="container border rounded my-3 p-3">
    <h2>Greeting</h2>

    <div>
      <label for="name">請輸入姓名：</label
      ><input
        type="text"
        class="bg-white text-black mt-3"
        v-model="nameInput"
        @input="greet()"
      />
      <button class="btn btn-danger mx-3" @click="clear()">清除</button>
    </div>
    <p class="my-3 text-secondary" :class="{ display: !nameIsInput }">我會向你打招呼！</p>
    <p class="my-3" :class="{ display: nameIsInput }">
      {{ nameDisplay }}，你好！今天是美好的一天！
    </p>
  </div>
</template>

<style scoped>
.display {
  display: none;
  color: black;
}
</style>
