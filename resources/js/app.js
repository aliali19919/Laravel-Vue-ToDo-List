import "./bootstrap";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import router from "./router"; // import your router configuration
import App from "./App.vue";
const app = createApp(App);
app.use(router); // Tell Vue to use the router
app.mount("#app");
