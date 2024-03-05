import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            alias: "/",
            component: ()=> import('../views/Home.vue'),
        },
        {
            path: "/poke",
            component: ()=> import('../views/PokeApi.vue')
        },
        {
            path: "/meteo",
            component: ()=> import('../views/MeteoApi.vue')
        },
        {
            path:"/:pathMatch(.*)",
            name: "NotFound",
            component: ()=> import('../views/NotFound.vue')
        }
    ]
});
export default router;