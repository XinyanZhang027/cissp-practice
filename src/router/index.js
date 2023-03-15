import { createRouter, createWebHistory } from "vue-router";
import RegisterPanel from "../views/RegisterPanel.vue";
import LoginPanel from "../views/LoginPanel.vue";

const routes = [
  {
    path: "/register",
    name: "Register",
    component: RegisterPanel,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPanel,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
