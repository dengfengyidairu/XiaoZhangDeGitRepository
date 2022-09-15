import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 使用了ES6中的import进行懒加载
  // 首页
  {
    path: "/",
    name: "discover",
    component: () => import('@/views/discover/Discover.vue')
  },
  // 私人FM
  {
    path: "/fm",
    name: "fm",
    component: () => import('@/views/fm/Fm.vue'),
  },
  // 歌单详情
  {
    path: '/songDetail',
    name: 'songDetail',
    component: () => import('@/views/songDetail/SongDetail.vue')
  },
  // 博客
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('@/views/blogs/Blogs.vue')
  },
  // 视频
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/video/Video.vue')
  },
  // 关注
  {
    path: '/attention',
    name: 'attention',
    component: () => import('@/views/attention/Attention.vue')
  },
  // 直播
  {
    path: '/liveStreaming',
    name: 'liveStreaming',
    component: () => import('@/views/liveStreaming/LiveStreaming.vue')
  },
  // 喜欢的音乐
  {
    path: '/loveMusic',
    name: 'loveMusic',
    component: () => import('@/views/loveMusic/LoveMusic.vue')
  },
  // 最近播放
  {
    path: '/recentPlay',
    name: 'recentPlay',
    component: () => import('@/views/recentPlay/RecentPlay.vue')
  },
  // 我的收藏
  {
    path: '/myCollect',
    name: 'myCollect',
    component: () => import('@/views/myCollect/MyCollect.vue')
  }
];

const router = new VueRouter({
  routes,
});

export default router;
