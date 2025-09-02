<script setup>
import {ref} from "vue";

const fontSizeBox = ref("36px");
const textColorBox = ref("white");
let isClicked = ref(false);

const emailInp = ref("");
const pwInp = ref("");

const boxOnClick = ()=>{
// textColorBox.value = "red";
// fontSizeBox.value= "48px";
isClicked.value = !isClicked.value;
}

const logInfo = () =>{
    console.log(`email: ${emailInp.value}`);
    console.log(`password: ${pwInp.value}`);
}

const bgColor = ref("pink");
const boxColorChange = (color)=>{
    bgColor.value = color
}

let i=0;
const btnClickOnce = ()=>{
    i++;
    let msg = "default";
    if (i>1){
        msg = "超過點擊上限";
        alert(msg);
    }
}

</script>

<template>
    <div class="border">
            <div class="box mx-auto my-3" @click="boxOnClick()" :style="{fontSize: fontSizeBox, color:textColorBox, backgroundColor: bgColor}" :class="{'boxOnClick': isClicked}">Box 1</div>

        <div class="container d-flex justify-content-center gap-3 my-3">
            <button class="btn btn-secondary" @click="boxColorChange('red')">紅 click</button>
            <button class="btn btn-secondary" @click.right="boxColorChange('orange')">橙 click right</button>
            <button class="btn btn-secondary" @click.self="boxColorChange('yellow')">黃 click self</button>
            <button class="btn btn-secondary" @click.middle="boxColorChange('green')">綠 click middle</button>
            <button class="btn btn-secondary"@click="btnClickOnce()" @click.once="boxColorChange('blue')">藍 click once</button>
        </div>
    </div>


<div class="container text-start">
    <form @submit.prevent="logInfo()">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" name="userEmail" aria-describedby="emailHelp" v-model="emailInp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name="userPassword" v-model="pwInp">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" name="userCheck" >
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>

</template>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    /* background-color: pink; */
}

.boxOnClick{
    /* background-color: blueviolet; */
    /* color: coral;
    font-size: 48px; */
    text-decoration: underline;
}
</style>
