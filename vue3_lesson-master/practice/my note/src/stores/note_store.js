// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
import { defineStore } from 'pinia';
import { ref, computed, reactive } from "vue";

//setup 語法
export const useFruitStore = defineStore('fruits', () => {
    // ref() 就是 state 属性

    const fruits = reactive([
        { name: "水蜜桃", price: 80 },
        { name: "西瓜", price: 50 },
        { name: "水梨", price: 40 }
    ])

    let totalPrice = ref(0);

    // computed() 就是 getters

    // function() 就是 actions


    return { totalPrice, addToCart, fruits };
})

// option語法
// export const useFruitStore = defineStore('fruits', {
//     state: () => ({
//         name: "水蜜桃",
//         price: 100
//     }),

//     getters: {
//     },

//     actions: {

//     },
// })