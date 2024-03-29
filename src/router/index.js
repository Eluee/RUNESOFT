import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/project",
    name: "project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ProjectView.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () => import("../views/InfoView.vue"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("../views/CommunityView.vue"),
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("../views/NoticeView.vue"),
  },
  {
    path: "/totalsearch",
    name: "totalsearch",
    component: () => import("../views/TotalSearchView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
