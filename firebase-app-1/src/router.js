import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/userStore";

const requiAuth = async (to, from, next) => {
  const use = useUserStore();

  const user = await use.currentUser();
  user.loadingSession = true;
  if (user) {
    next();
  } else {
    next("/login");
  }
  user.loadingSession = false;
};

const routes = [
  {
    path: "/",
    component: () => import("./views/HomeView.vue"),
    beforeEnter: requiAuth,
  },
  { path: "/login", component: () => import("./views/LoginView.vue") },
  { path: "/register", component: () => import("./views/RegisterView.vue") },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
