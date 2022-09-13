<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="app">
    <div class="top">
      <input placeholder="搜索音乐，视频，歌词，电台">
      <div class="topContent">
        <span @click="loginClickFn">未登录</span>
      </div>
    </div>
    <!-- @click="getyuansu($event)" -->
    <nav ref="navref">
      <!-- :class="aaa == '#/' ? 'choice' : ''"  :class="aaa == '#/fm' ? 'choice' : ''"  -->
      <router-link to="/">发现音乐</router-link>
      <router-link to="/fm">私人FM</router-link>
    </nav>
    <div class="view">
      <router-view />
    </div>
    <!-- 登录组件 -->
    <Login ref="loginBtnFn"></Login>
    <!-- 底部播放栏 -->
    <div class="playHurdle">
      <span class="playHurdle_left">
        <img src="https://p1.music.126.net/mn87wsSRthixX1js26p6aQ==/109951167796790770.jpg" alt="">  
        <div class="playHurdle_left_right">
          <span>歌名歌名歌名<i class="iconfont icon-xihuan"></i></span>
          <div>房东的猫</div>
        </div>
      </span>
      <div class="playHurdle_centre">
        <div>
          <i class="iconfont icon-shuzishunxu"></i>
          <i class="iconfont icon-shangyishou"></i>
          <span class="yuan"><i class="iconfont icon-bofang"></i></span>
          <i class="iconfont icon-xiayishou"></i>
        </div>
      </div>
    </div>
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
    // getyuansu(e) {
    //   this.aaa = e.target.hash
    // },
    // 点击未登录登录显示登录组件
    loginClickFn () {
      this.$refs.loginBtnFn.flag = true
    }
  },
  components: {
    Login
  }
}
</script>

<style lang="less" scoped>
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
  width: 185px;
  height: 40px;
  /* background-color: pink; */
  line-height: 40px;
  text-decoration: none;
  color: #0f0f0f;
  margin: 5px 0;
  padding-left: 15px;
}

/* .choice {
  background-color: rgb(199, 195, 199);
} */

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
  background-color: #ec4141;
}

.top input {
  width: 260px;
  height: 30px;
  border: none;
  border-radius: 30px;
  background-color: #e82929;
  -webkit-text-fill-color: rgb(180, 177, 177);
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

.playHurdle {
  position: fixed;
  width: 1260px;
  height: 54px;
  background-color: #ffffff;
  bottom: 0px;
  border-top: 1px solid #f6f1f1;
  display: flex;
}

.playHurdle_left {
  display: flex;
    img {
      width: 50px;
      height: 50px;
      border-radius: 3px;
      margin: 0 6px 0 0;
  }
  .playHurdle_left_right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
  }
  i {
    margin: 0 0 0 6px;
  }
}

.playHurdle_centre {
  position: relative;
  left: 50%;
  width: 200px;
  height: 500px;
  .yuan {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #a75858;
    border-radius: 50%;
  }
  i {
    font-size: 22px;
    margin: 0 10px;
  }
}

</style>
