import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "discover",
    component: () => import('@/views/discover/Discover.vue')
  },
  {
    path: "/fm",
    name: "fm",
    component: () => import('@/views/Fm.vue'),
  },
  {
    path: '/songDetail',
    name: 'songDetail',
    component: () => import('@/views/songDetail/SongDetail.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
