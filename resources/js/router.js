import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AddTask from "./views/AddTask.vue";
import Tasks from "./views/Tasks.vue";
// import HomeView from "../views/HomeView.vue";
// import AddTask from "@/views/AddTask.vue";
// import Tasks from "@/views/Tasks.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },

    { path: "/addtask", name: "addTask", component: AddTask },

    {
        path: "/viewtasks",
        name: "viewTasks",
        component: Tasks,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
