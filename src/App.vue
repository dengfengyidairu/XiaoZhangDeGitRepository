<template>
  <div id="app">
    <div class="top">
      <input placeholder="搜索音乐，视频，歌词，电台">
      <div class="topContent">
        <span>未登录</span>
        <span>开通VIP</span>
        <span><img src="../src/assets/皮肤.png"></span>
        <span><img src="../src/assets/信封.png"></span>
        <span><img src="../src/assets/设置.png"></span>
      </div>
    </div>
    <nav>
      <router-link to="/">发现音乐</router-link>
      <router-link to="/fm">私人FM</router-link>
    </nav>
    <div class="view">
      <router-view />
    </div>
    <div class="footer">
      <span class="bofangqi">
        <img src="./assets/上一首.png">
        <img ref="zantin" src="./assets/暂停.jpg">
        <img src="./assets/下一首.png"></span>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
#app {
  width: 1200px;
  height: 1200px;
  margin: 0 auto;
}

a {
  display: block;
  width: 200px;
  height: 40px;
  /* background-color: pink; */
  line-height: 40px;
  text-decoration: none;
  color: #0f0f0f;
}

a:hover {
  border-left: 5px solid #cc4e4e;
  background-color: rgb(134, 133, 134);
}

.view {
  position: relative;
  float: right;
  width: 1000px;
  height: 1100px;
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
  margin-left: 20%;
  display: inline-block;
}

.topContent span {
  font-size: 13px;
  color: rgb(243, 239, 239);
  margin-left: 20px;
  line-height: 60px;
}

.topContent span img {
  position: relative;
  top: 5px;
  width: 20px;
  margin-left: 10px;
}

.topContent span:hover {
  cursor: pointer;
}

nav {
  position: absolute;
  border-left: 1px solid #706e6e;
}

.footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  background-color: #ffffff;
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
