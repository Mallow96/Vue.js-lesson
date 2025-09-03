import { createRouter, createWebHashHistory } from 'vue-router';
import BMI from "./components/BMI.vue";
import WatchTest from "./components/WatchTest.vue";
import WatchEffectTest from './components/WatchEffectTest.vue';

const routes = [
    { path: "/", name: "home", component: BMI },
    { path: "/watch", name: "watch-test", component: WatchTest },
    { path: "/watch-effect", name: "watch-effect", component: WatchEffectTest },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;