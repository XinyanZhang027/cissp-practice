import { createRouter, createWebHistory } from "vue-router";
import RegisterPanel from "../views/RegisterPanel.vue";
import LoginPanel from "../views/LoginPanel.vue";
import ExercisePanel from "../views/ExercisePanel.vue";

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
  {
    path: "/exercise",
    name: "Exercise",
    component: ExercisePanel,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
