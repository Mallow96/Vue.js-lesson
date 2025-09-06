<script setup>
import { ref, watch } from "vue";

let nameInput = ref("");
let nameDisplay = ref("");

let nameIsInput = ref(true);
let msgColor = ref("gray");

const clear = () => {
  nameInput.value = "";
  nameDisplay.value = "";
};

watch(nameInput, (inputChange) => {
  const newInputLength = inputChange.length;
  if (newInputLength == 0) {
    nameIsInput = ref(true);
    msgColor.value = "gray";
  } else if (inputChange <= 0 || inputChange > 24) {
    nameIsInput = ref(true);
    msgColor.value = "red";
  } else if (inputChange < 8) {
    nameDisplay.value = nameInput.value;
    nameIsInput.value = false;
    nameDisplay.value = "早起的鬧鐘已設定！";
    msgColor.value = "gray";
  } else if (inputChange <= 24) {
    nameDisplay.value = nameInput.value;
    nameIsInput.value = false;
    nameDisplay.value = "晚起的鬧鐘已設定！請確保有足夠睡眠。";
    msgColor.value = "gray";
  }
});
</script>

<template>
  <div class="container border rounded my-3 p-3">
    <h2>Wake-up Alert</h2>

    <div>
      <label for="name">起床時間：</label
      ><input type="number" class="bg-white text-black mt-3" v-model="nameInput" />
      <button class="btn btn-danger mx-3" @click="clear()">清除</button>
    </div>
    <p class="my-3" :class="{ display: !nameIsInput }" :style="{ color: msgColor }">
      告訴我你的起床時間！
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
