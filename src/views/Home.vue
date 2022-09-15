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
      <router-link to="/">发现音乐</router-link>
      <router-link to="/blogs">博客</router-link>
      <router-link to="/video">视频</router-link>
      <router-link to="/attention">关注</router-link>
      <router-link to="/liveStreaming">直播</router-link>
      <router-link to="/fm">私人FM</router-link>
      <span>我的音乐</span>
      <router-link to="/loveMusic" tag="div"> <i class="iconfont icon-xihuan"></i> 我喜欢的音乐</router-link>
      <router-link to="/recentPlay" tag="div"> <i class="iconfont icon-zuijinchangyong"></i> 最近播放</router-link>
      <router-link to="/myCollect" tag="div"> <i class="iconfont icon-wodeshoucang"></i> 我的收藏</router-link>
      <span>创建的歌单<i class="iconfont icon-jiahao"></i></span>
    </nav>
    <div class="view">
      <router-view />
    </div>
    <!-- 登录组件 -->
    <Login ref="loginBtnFn"></Login>
    <!-- 底部播放栏 -->
    <div class="playHurdle">
      <span class="playHurdle_left">
        <img :src="$store.state.musicMsg.al.picUrl">
        <div class="playHurdle_left_right">
          <span>{{ $store.state.musicMsg.name }}<i class="iconfont icon-xihuan"></i></span>
          <div :title="$store.state.musicMsg.ar[0].name">{{ $store.state.musicMsg.ar[0].name}}</div>
        </div>
      </span>
      <div class="playHurdle_centre">
        <div class="optIcon">
          <i class="iconfont icon-shuzishunxu"></i>
          <i class="iconfont icon-shangyishou"></i>
          <i @click="playCliclFn" :class=" flag ?  'iconfont icon-bofang' : 'iconfont icon-24gf-pause2' "></i>
          <i class="iconfont icon-xiayishou"></i>
        </div>
        <div class="progressBar"></div>
      </div>
      <!-- 进度条 -->
      <div class="playHurdle_right">
        <span><i class="iconfont icon-danlieliebiao"></i></span>
      </div>
    </div>
    <audio ref="audioRef" :src="this.$store.state.songUrl">
      <!-- <source src="http://music.163.com/song/media/outer/url?id=5274293.mp3"> -->
      所在浏览器暂不支持 audio !
    </audio>
  </div>
</template>

<script>
import Login from '@/views/login/Login.vue'
export default {
  data() {
    return {
      flag: true
    }
  },
  methods: {
    // 判定hash确实是否点击
    // getyuansu(e) {
    //   this.aaa = e.target.hash
    // },
    // 点击未登录登录显示登录组件
    loginClickFn() {
      this.$refs.loginBtnFn.flag = true
    },
    // 点击播放按钮触发事件  切换图标 播放/暂停音乐
    playCliclFn() {
      this.flag = !this.flag
      if ( this.flag) {
        this.$refs.audioRef.pause();
      } else {
        this.$refs.audioRef.play();
      } 
    },
    // 播放事件
    playFn () {
      this.flag = false;
      try {
        this.$refs.audioRef.play();
      } catch (error) {
        console.log(error)
      }
      
    }
  },
  components: {
    Login
  },
  mounted(){
          // 绑定事件
          this.$bus.$on('playBus', ()=>{
            setTimeout (()=>{
              this.playFn()
              console.log(this.$store.state.musicMsg)
            },500)
          })
        },
}
</script>

<style lang="less" scoped>
#app {
  width: 1260px;
  height: 705px;
  margin: 0 auto;
  overflow: hidden;
}

input:focus {
  outline: none;
}

.default {
  background-color: rgb(199, 195, 199);
}

a:hover {
  background-color: rgb(199, 195, 199);
}

.view {
  position: relative;
  float: right;
  width: 1000px;
  height: 100%;
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
  height: 638px;
    a {
    display: block;
    width: 185px;
    height: 50px;
    line-height: 50px;
    text-decoration: none;
    color: #565555;
    margin: 5px 0;
    padding-left: 15px;
    font-size: 18px;
  }
  span {
    margin: 10px 0;
    display: inline-block;
    width: 200px;
    height: 20px;
    font-size: 14px;
    color: #afacac;
    background-color: #fafafa;
    padding-left: 15px;
    i {
      margin: 0 0 0 100px;
    }
    i:hover {
      cursor: pointer;
    }
  }
  div {
    width: 185px;
    height: 50px;
    line-height: 50px;
    text-decoration: none;
    color: #565555;
    margin: 5px 0;
    padding-left: 15px;
    font-size: 18px;
  }
  i {
    font-size: 18px;
  }
  div:hover {
    cursor: pointer;
    background-color: rgb(199, 195, 199);
  }
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
  border-top: 1px solid #eee7e7;
  display: flex;
  justify-content: space-between;
}

.playHurdle_left {
  width: 200px;
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
    span {
      width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      i:hover {
        cursor: pointer;
      }
    }
  }

  i {
    margin: 0 0 0 6px;
  }
}

.playHurdle_centre {
  width: 400px;
  height: 100%;

  .optIcon {
    margin: 6px 0 0 0;

    i {
      font-size: 22px;
      margin: 0 39px;
    }

    i:hover {
      cursor: pointer;
    }
  }

  .progressBar {
    margin: 12px 0 0 0;
    display: block;
    width: 400px;
    height: 3px;
    background-color: #bab6b6;
    border-radius: 2px;
  }
}

.playHurdle_right {
  width: 200px;
  height: 55px;

  span {
    i {
      margin: 10px 0 0 0;
      float: right;
      font-size: 20px;
    }

    i:hover {
      cursor: pointer;
    }
  }
}
</style>
