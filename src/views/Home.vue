<template>
  <div class="home">
    <!-- 轮播图 -->
    <el-carousel :interval="5000" arrow="always" height="400px">
      <el-carousel-item v-for="item in slideshow" :key="item.id">
        <h3><img :src="item.imageUrl"></h3>
      </el-carousel-item>
    </el-carousel>
    <p>推荐歌单</p>
    <hr>
    <ul class="playListUl">
      <li v-for="list in list" :key='list.id'>
        <div class="playlist">
          <!-- @click="songDetails" -->
          <span class="playAmount"><img src="../assets/Headset-2.png">{{ parseInt(list.playCount / 10000) }}万</span>
          <img :src="list.coverImgUrl">
          <span class="title">{{ list.name }}</span>
        </div>
      </li>
    </ul>
    <p>独家放送</p>
    <hr>
    <ul class="sole">
      <li v-for="sole in getRelease" :key="sole.id">
        <div>
          <span><img :src="sole.picUrl"></span>
        </div>
        <span class="soleTitle">{{ sole.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { songListAPI, slideshowAPI, exclusiveAPI } from '@/api/SongList/song'
export default {
  data() {
    return {
     list: [],
      slideshow: [],
      getRelease: [],
    }
  },
  //生命周期函数---在实例创建完成后被立即同步调用，实例已在内存中创建好，data和methods已初始化好，此时还没开始编译模板。
  created() {
    this.listFn()
    this.imgFn()
    this.releaseFn()
  },
  methods: {
    // 获取推荐歌单
    async listFn () {
      const res = await songListAPI()
      this.list = res.playlists
    },
    // 获取轮播图
    async imgFn () {
      const res = await slideshowAPI()
      this.slideshow = res.banners
      console.log(res)
    },
    // 获取独家放送
    async releaseFn () {
      const res = await exclusiveAPI()
      this.getRelease = res.result
    }
  }
}
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.playListUl li {
  display: inline-block;
  width: 140px;
  height: 190px;
  /* background-color: aquamarine; */
  list-style: none;
  margin: 10px 0 0 5%;
}

.playListUl li div img {
  width: 140px;
  height: 140px;
}

p {
  margin: 10px 0 8px 10px;
  font-weight: 600;
  font-size: 18px;
}

.playlist .playAmount img {
  width: 14px;
  height: 13px;
}

.playlist .title {
  display: inline-block;
  width: 140px;
  height: 39px;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.playAmount {
  display: inline-block;
  width: 140px;
  height: 19px;
  position: absolute;
  background-color: #000000;
  background-position: 0px -537px;
  opacity: 0.5;
  color: rgb(255, 255, 255)
}

.sole span img {
  width: 290px;
  height: 180px;
}

.sole li {
  list-style: none;
  display: inline-block;
  margin: 10px 0 0 3.5%;
}

.soleTitle {
  display: inline-block;
  width: 290px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>