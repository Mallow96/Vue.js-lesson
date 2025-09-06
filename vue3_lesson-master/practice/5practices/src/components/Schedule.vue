<script setup>
import { ref, watch } from "vue";

let nameInput = ref("");
let nameDisplay = ref("");

let nameIsInput = ref(false);
let msgColor = ref("gray");

const clear = () => {
  nameInput.value = "";
  nameDisplay.value = "";
};

watch(nameInput, (inputChange) => {
  const newInputLength = inputChange.length;
  nameDisplay.value = inputChange;

  if (newInputLength == 0) {
    nameIsInput = ref(true);
    msgColor.value = "gray";
  }
});
</script>

<template>
  <div class="container border rounded my-3 p-3">
    <h2>To Do List</h2>

    <div>
      <label for="name">今日行程：</label
      ><input type="number" class="bg-white text-black mt-3" v-model="nameInput" />
      <button type="button" class="btn btn-success mx-3">送出</button>
      <button type="button" class="btn btn-danger" @click="clear()">清除</button>
    </div>
    <p class="my-3" :class="{ display: !nameIsInput }" :style="{ color: msgColor }">
      告訴我你的行程！
    </p>
    <p class="my-3" :class="{ display: nameIsInput }" :style="{ color: msgColor }">
      {{ nameDisplay }}
    </p>
  </div>
</template>

<style scoped>
.display {
  display: none;
}
</style>
