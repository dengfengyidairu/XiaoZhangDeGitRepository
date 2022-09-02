<!-- eslint-disable vue/multi-word-component-names -->
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
      <li v-for="item in list" :key='item.id'>
        <div class="playlist" @click="songDetailsFn">
          <span class="playAmount"><img src="@/assets/Headset-2.png">{{ parseInt(item.playCount / 10000) }}万</span>
          <img :src="item.coverImgUrl">
          <span class="title">{{ item.name }}</span>
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
    <p>推荐MV</p>
    <hr>
    <ul class="rmdmv">
      <li v-for="item in mvdata" :key='item.id'>
        <div>
          <img :src="item.picUrl">
          <span>{{ item.name }}</span>
        </div>
      </li>
    </ul>
    <p>推荐电台</p>
    <hr>
    <ul class="rmdradio">
      <li v-for="item in rmdRadio" :key='item.id'>
        <div>
          <img :src="item.picUrl" :alt="item.name">
          <span>{{ item.name }}</span>
        </div>
      </li>
    </ul>
    <p>最新专辑</p>
    <hr>
    <ul class="album">
      <li v-for="item in album" :key='item.id'>
        <div class="album_box">
          <img :src="item.blurPicUrl">
          <div class="album_boxs">
            <span class="album_name">{{ item.name }}</span><br>
            <span class="album_pname">{{ item.artist.name }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
  
  <script>
import { songListAPI, slideshowAPI, exclusiveAPI, radioAPI, mvAPI, albumAPI } from '@/api/SongList/song'
export default {
  data() {
    return {
      list: [],
      slideshow: [],
      getRelease: [],
      rmdRadio: [],
      mvdata: [],
      album: []
    }
  },
  //生命周期函数---在实例创建完成后被立即同步调用，实例已在内存中创建好，data和methods已初始化好，此时还没开始编译模板。
  created() {
    this.listFn()
    this.imgFn()
    this.releaseFn()
    this.getRadio()
    this.getMV()
    this.getAlbum()
  },
  methods: {
    // 获取推荐歌单
    async listFn() {
      const res = await songListAPI()
      this.list = res.playlists
    },
    // 获取轮播图
    async imgFn() {
      const res = await slideshowAPI()
      this.slideshow = res.banners
    },
    // 获取独家放送
    async releaseFn() {
      const res = await exclusiveAPI()
      this.getRelease = res.result
    },
    // 获取推荐视频
    async getRadio() {
      const res = await radioAPI()
      this.rmdRadio = res.result
    },
    // 获取推荐MV
    async getMV() {
      const res = await mvAPI()
      this.mvdata = res.result
    },
    // 获取专辑数据
    async getAlbum() {
      const res = await albumAPI()
      this.album = res.albums
    },
    // 点击获取歌单详情
    songDetailsFn () {

    }
  },
}
</script>
  <style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  
  .home {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
  
  ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
  
  .playListUl li {
    display: inline-block;
    width: 140px;
    height: 190px;
    list-style: none;
    margin: 10px 0 0 5%;
  }
  
  .playListUl li div img {
    width: 140px;
    height: 140px;
  }
  
  p {
    margin: 10px 0 8px 10px;
    font-weight: 800;
    font-size: 20px;
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
    /* position: absolute; */
    float: left;
    background-color: #000000;
    background-position: 0px -537px;
    opacity: 0.5;
    color: rgb(255, 255, 255)
  }
  
  .sole {
    margin-top: 10px;
  }
  
  .sole span img {
    width: 290px;
    height: 180px;
    border-radius: 5px;
  }
  
  .sole li {
    list-style: none;
    display: inline-block;
    margin: 0 0 0 3.5%;
  }
  
  .soleTitle {
    display: inline-block;
    width: 290px;
  }
  
  .rmdradio li {
    display: inline-block;
    width: 120px;
    height: 140px;
    list-style: none;
    margin: 10px 0 10px 40px;
  }
  
  .rmdradio li img {
    width: 120px;
    height: 120px;
    border-radius: 5px;
  }
  
  .rmdradio li span {
    display: inline-block;
    width: 120px;
    height: 39px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  
  .rmdmv li {
    display: inline-block;
    width: 220px;
    height: 180px;
    list-style: none;
    margin: 10px 0 10px 24px;
  }
  
  .rmdmv li img {
    width: 220px;
    height: 160px;
    border-radius: 5px;
  }
  
  .rmdmv li span {
    display: inline-block;
    width: 220px;
    height: 39px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  
  .album {
    margin-left: 30px;
  }
  
  .album li {
    display: inline-block;
    width: 225px;
    height: 100px;
    list-style: none;
    margin: 10px 0 10px 10px;
  }
  
  .album li img {
    width: 100px;
    height: 100px;
    border-radius: 20px;
  }
  
  .album_boxs {
    width: 120px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 5px;
  }
  
  .album .album_box {
    display: flex;
  }
  
  .album_name {
    font-size: 14px;
    font-weight: 600;
  }
  
  .album_pname {
    font-size: 12px;
    color: #767474;
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