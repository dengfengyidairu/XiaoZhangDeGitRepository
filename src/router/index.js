import Vue from "vue";
import VueRouter from "vue-router";
import Discover from "@/views/discover/Discover.vue";
import Fm from "../views/Fm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "discover",
    component: Discover,
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
