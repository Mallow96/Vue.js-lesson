<template>
  <div class="container border p-3 m-3 rounded">
    <h1 class="text-center">BMI計算</h1>
    <form action="get">
      <div class="mb-3">
        <label for="height" class="form-label p-0">Your Height (cm):</label>
        <input
          type="number"
          class="form-control"
          id="heightInput"
          name="height"
          v-model="heightInp"
        />
      </div>
      <div class="mb-3">
        <label for="weight" class="form-label p-0">Your Weight (kg): </label>
        <input
          type="number"
          class="form-control"
          id="weightInput"
          name="weight"
          v-model="weightInp"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="bmiCalc">Submit</button>
    </form>

    <div class="result alert my-3" :class="alertColor">
      <h3>計算結果：</h3>
      <div class="">BMI：{{ bmiResult }}</div>
      <div class="">
        判斷為：<span :style="{ color: textColor }">{{ bmiMsg }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const heightInp = ref(0);
const weightInp = ref(0);
let bmiResult = ref(0);
let bmiMsg = ref("");
const textColor = ref("green");
const alertColor = ref("alert-primary");

const bmiCalc = computed(() => {
  const height = heightInp.value / 100;
  const weight = weightInp.value;

  bmiResult.value = (weight / (height * height)).toFixed(2);

  if (
    bmiResult.value === "NaN" ||
    bmiResult.value < 1 ||
    bmiResult.value === "Infinity"
  ) {
    bmiMsg.value = "輸入有誤，請重新輸入";
    textColor.value = "red";
    alertColor.value = "alert-danger";
  } else if (bmiResult.value < 18.5) {
    bmiMsg.value = "體重過輕";
    textColor.value = "orchid";
    alertColor.value = "alert-warning";
  } else if (bmiResult.value < 24) {
    bmiMsg.value = "體重正常";
    textColor.value = "green";
    alertColor.value = "alert-primary";
  } else if (bmiResult.value < 27) {
    bmiMsg.value = "體重過重";
    textColor.value = "red";
    alertColor.value = "alert-danger";
  }
});
</script>

<style scoped>
.box {
  background-color: or;
}
</style>
