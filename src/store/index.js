import Vue from 'vue'
import Vuex from 'vuex'
import {
  slideshowAPI,
  songListAPI,
  exclusiveAPI,
  radioAPI,
  mvAPI,
  albumAPI,
  songDetail,
  allSongAPI,
  // songUrlAPI
} from '@/api/SongList/song'

Vue.use(Vuex)

// 准备state对象——保存具体的数据
const state = {
  // 首页轮播图
  slideshow: [],
  // 推荐歌单数据
  list: [],
  // 独家放送
  release: [],
  // 推荐视频/电台
  rmdRadio: [],
  // 推荐MV
  mvdata: [],
  // 专辑视频
  album: [],
  // 歌单详情
  songDetaData: [],
  // 歌单详情头部数据
  createMsg: [],
  // 歌单所有音乐
  songMsg: [],
  // 有多少歌曲（数组的长度）
  len:0,
}

// 准备mutations对象——修改state中的数据
const mutations = {
  // 首页轮播图
  alterImg(state, val) {
    state.slideshow = val
  },
  // 推荐歌单
  alterList(state, val) {
    state.list = val
  },
  // 获取独家放送
  alterRelease(state, val) {
    state.release = val
  },
  // 获取推荐视频
  alterRadio(state, val) {
    state.rmdRadio = val
  },
  // 获取推荐MV
  alterMvdata(state, val) {
    state.mvdata = val
  },
  // 获取专辑数据
  alterAlbum(state, val) {
    state.album = val
  },
  // 获取歌单详情数据
  alterSongDetail(state, val) {
    state.songDetaData = val
  },
  // 歌单详情头部数据
  alterCreateMsg(state, val) {
    state.createMsg = val
  },
  // 歌单所有音乐
  alterSongMsg(state, val) {
    state.songMsg = val
  },
  // 歌单拥有多少音乐
  alterLen(state, val) {
    state.len = val
  }
}

// 准备actions对象——响应组件中用户的动作
const actions = {
  // 获取首页轮播图
  async imgFn(store) {
    const res = await slideshowAPI()
    store.commit('alterImg', res.banners)
  },
  // 获取推荐歌单
  async listFn(store) {
    const res = await songListAPI()
    store.commit('alterList', res.playlists)
  },
  // 获取独家放送
  async releaseFn(store) {
    const res = await exclusiveAPI()
    store.commit('alterRelease', res.result)
  },
  // 获取推荐视频
  async getRadio(store) {
    const res = await radioAPI()
    store.commit('alterRadio', res.result)
  },
  // 获取推荐MV
  async getMV(store) {
    const res = await mvAPI()
    store.commit('alterMvdata', res.result)
  },
  // 获取专辑数据
  async getAlbum(store) {
    const res = await albumAPI()
    store.commit('alterAlbum', res.albums)
  },
  // 获取歌单详情
  async getSongDetailss (store, id) {
    const res = await songDetail(id)
    store.commit('alterSongDetail', res.playlist)
    // 歌单头部数据
    store.commit('alterCreateMsg', res.playlist.creator)
    store.commit('alterLen', res.playlist.trackIds.length)
  },
  // 歌单所有歌曲
  async getSongMsg(store,id) {
    const res = await allSongAPI(id)
    store.commit('alterSongMsg', res.songs)
  },
}


// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
