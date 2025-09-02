<template>
    <div class="container border">
        <h2>Component載入後計時開始</h2>
        <h3>自載入起已過{{ seconds}}秒</h3>
        <div class="d-flex justify-content-center gap-3">
            <button class="btn btn-danger" @click="stopTimer()">停止計時</button>
            <button class="btn btn-success" @click="startTimer()">開始計時</button>
        </div>
    </div>
</template>

<script setup>
import{ref, onBeforeMount, onMounted, onUnmounted, onBeforeUpdate, onUpdated} from "vue";
    
//my functions
const startTimer = ()=>{
 timer = setInterval(() => {
       seconds.value++;
    }, 1000);
}
const stopTimer = ()=>{
    clearInterval(timer);
}

//variables
const seconds = ref(0);
let timer;

//life circle
onBeforeMount(() => {
    console.log("this is onBeforeMount");
    });

onMounted(() => {
    console.log("this is onMounted");
    startTimer();
    });

onBeforeUpdate(() => {
    console.log("this is onBeforeUpdate");
    });

onUpdated(() => {
    console.log("this is onUpdated");
    });

onUnmounted(() => {
    console.log("this is onUnmounted");
    });

</script>

<style scoped></style>