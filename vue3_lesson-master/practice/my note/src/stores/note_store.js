// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
import { defineStore } from 'pinia';
import { ref, computed, reactive } from "vue";

//setup 語法
export const useNotesStore = defineStore('notes', () => {
    // ref() 就是 state 属性

    const notes = [
        {
            id: 1,
            text: '完成作業',
            content: "完成歷史作業第11章",
            isFinished: false
        }
    ]

    // computed() 就是 getters

    // function() 就是 actions


    return { notes };
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