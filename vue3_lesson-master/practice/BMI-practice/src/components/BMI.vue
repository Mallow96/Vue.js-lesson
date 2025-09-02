<template>
  <div class="container">
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
      <button type="button" class="btn btn-primary" @click="bmiCalc()">Submit</button>
    </form>

    <div class="result alert alert-primary my-3">BMI計算結果：{{ bmiResult }}</div>
    <div>{{ heightInp }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const heightInp = ref(0);
const weightInp = ref(0);
const height = heightInp.value / 100;
const weight = weightInp.value;
let bmiResult;

const bmiCalc = () => {
  bmiResult = weight / (height * height);
  console.log(height);
  console.log(weight);
  console.log(bmiResult);

  return bmiResult;
};
</script>

<style scoped></style>
