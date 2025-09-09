// 在 Setup Store 中：
// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
import { defineStore } from 'pinia';
import { ref, computed, reactive } from "vue";

//setup 語法
export const useNoteStore = defineStore('notes', () => {
    // ref() 就是 state 属性
    // const noteStore = useNoteStore();

    const notes = reactive([
        {
            id: 1,
            title: '完成作業',
            content: "完成歷史作業第11章",
            pinned: true
        },
        {
            id: 2,
            title: '學習計畫',
            content: "每天晚上花一小時學習新技術，提升自己的能力。",
            pinned: false
        },
        {
            id: 3,
            title: '運動',
            content: "每週三慢跑30分鐘，保持健康。",
            pinned: false
        },
        {
            id: 4,
            title: '閱讀書籍',
            content: "本月閱讀完《深度工作》一書。",
            pinned: false
        },
        {
            id: 5,
            title: '購物清單',
            content: "牛奶、麵包、雞蛋、蔬菜。",
            pinned: false
        },
        {
            id: 6,
            title: '聯絡朋友',
            content: "週末約小明一起吃飯聊天。",
            pinned: true
        },
    ])

    // computed() 就是 getters

    const pinnedNotes = computed(() => {
        return notes.filter(note => note.pinned);
    });

    const allNotes = computed(() => {
        return notes.filter(note => !note.pinned);
    });

    // function() 就是 actions

    const markPinned = (id) => {
        const note = notes.find(note => note.id === id);
        note.pinned = !note.pinned;
        console.log(note);
    }

    const deleteItem = (id) => {
        const index = notes.findIndex(note => note.id === id);
        notes.splice(index, 1);
    }

    return { notes, allNotes, pinnedNotes, markPinned, deleteItem };
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