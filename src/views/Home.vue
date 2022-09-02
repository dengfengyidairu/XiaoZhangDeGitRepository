<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div class="top">
      <input placeholder="搜索音乐，视频，歌词，电台">
      <div class="topContent">
        <span @click="loginClickFn">未登录</span>
      </div>
    </div>
    <nav ref="navref" @click="getyuansu($event)">
      <router-link :class="aaa == '#/' ? 'choice' : ''" to="/">发现音乐</router-link>
      <router-link :class="aaa == '#/fm' ? 'choice' : ''" to="/fm">私人FM</router-link>
    </nav>
    <div class="view">
      <router-view />
    </div>
    <!-- <div class="footer"> -->
      <!-- <span class="bofangqi">
        <img src="@/assets/上一首.png">
        <img ref="zantin" src="@/assets/暂停.jpg">
        <img src="@/assets/下一首.png"></span> -->
    <!-- </div> -->
    <!-- 登录组件 -->
    <Login ref="loginBtnFn"></Login>
  </div>
</template>

<script>
  import Login from '@/views/login/Login.vue'
export default {
  data() {
    return {
      aaa: ''
    }
  },
  methods: {
    // 判定hash确实是否点击
    getyuansu(e) {
      this.aaa = e.target.hash
    },
    // 点击未登录登录显示登录组件
    loginClickFn () {
      this.$refs.loginBtnFn.flag = true
    }
  },
  // mounted () {
  //   this.fxClickFn()
  // }
  components: {
    Login
  }
}
</script>

<style scoped>
#app {
  width: 1260px;
  height: 640px;
  margin: 0 auto;
}

input:focus{
    outline: none;
}

nav a {
  display: block;
  width: 200px;
  height: 40px;
  /* background-color: pink; */
  line-height: 40px;
  text-decoration: none;
  color: #0f0f0f;
  margin: 5px 0;
  padding-left: 15px;
}

.choice {
  background-color: rgb(199, 195, 199);
}

.default {
  background-color: rgb(199, 195, 199);
}

a:hover {
  /* border-left: 5px solid #cc4e4e; */
  background-color: rgb(199, 195, 199);
}

.view {
  position: relative;
  float: right;
  width: 1000px;
  height: 100%;
  /* background-color: aqua; */
}

.top {
  width: 100%;
  height: 60px;
  background-color: #c62f2f;
}

.top input {
  width: 260px;
  height: 30px;
  border: none;
  border-radius: 30px;
  background-color: #a82828;
  color: #c67171;
  margin-left: 13%;
}

.topContent {
  margin-left: 50%;
  display: inline-block;
}

.topContent span {
  font-size: 13px;
  color: rgb(243, 239, 239);
  line-height: 60px;
  font-weight: 800;
}

.topContent span:hover {
  cursor: pointer;
}

nav {
  position: absolute;
  border-right: 0.5px solid #e0dfdf;
  height: 620px;
}

.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  background-color: #a75858;
  display: flex;
}

.footer {
  display: flex;
}

.footer img {
  margin: 8px 0 0 50px;
  width: 36px;
  height: 36px;
}

.el-slider {
  width: 300px;
  margin: 8px 0 0 20%;
}

.bofangqi {
  margin-left: 40%;
}
</style>
