import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fm from "../views/Fm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/fm",
    name: "fm",
    component: Fm,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
