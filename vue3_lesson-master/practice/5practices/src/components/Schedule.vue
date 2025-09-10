<script setup>
import { reactive, ref, watch } from "vue";

let nameInput = ref("");
let nameDisplay = ref("");

let nameIsInput = ref(true);
let msgColor = ref("gray");

let toDoList = reactive([]);

const clear = () => {
  nameInput.value = "";
  nameDisplay.value = "";
  toDoList = reactive([]);
};

watch(nameInput, (inputChange) => {
  const newInputLength = inputChange.length;
  const l = toDoList.length + 1;
  console.log(toDoList.length);

  if (l == 0) {
    nameIsInput.value = true;
    msgColor.value = "gray";
  } else {
    nameIsInput.value = false;
  }
});

const fnPush = () => {
  const newInputLength = nameInput.value.length;
  const l = toDoList.length;

  if (newInputLength !== 0 && l <= 2) {
    toDoList.push(nameInput.value);
    console.log(toDoList);
  } else if (newInputLength !== 0 && l > 2) {
    const limitConfirm = confirm(
      "清單長度限制為3，若要繼續新增，將刪除清單第一項，是否要繼續？"
    );
    if (limitConfirm) {
      toDoList.splice(0, 1);
      toDoList.push(nameInput.value);
    } else {
      nameInput.value = "";
    }
  } else {
    nameIsInput.value = true;
    msgColor.value = "red";
  }
};
</script>

<template>
  <div class="container border rounded my-3 p-3">
    <h2>To Do List</h2>

    <div>
      <label for="name">今日行程：</label
      ><input type="number" class="bg-white text-black mt-3" v-model="nameInput" />
      <button type="button" class="btn btn-success mx-3" @click="fnPush()">送出</button>
      <button type="button" class="btn btn-danger" @click="clear()">清除所有行程</button>
    </div>

    <!-- 輸入前提醒 -->
    <p class="my-3" :class="{ display: !nameIsInput }" :style="{ color: msgColor }">
      告訴我你的行程！
    </p>

    <!-- 輸入後顯示 -->
    <ol class="my-3 text-start">
      <p class="text-start" :class="{ display: nameIsInput }">今天的行程：</p>
      <li
        :class="{ display: nameIsInput }"
        :style="{ color: msgColor }"
        v-for="item in toDoList"
      >
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<style scoped>
.display {
  display: none;
}
</style>
