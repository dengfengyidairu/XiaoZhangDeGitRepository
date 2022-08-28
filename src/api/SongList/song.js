// 引入封装好的axios
import myMusicRequest from '@/utils/api/index'
export default {
  //获取推荐歌单
  getSongSheet() {
    return myMusicRequest.get("/top/playlist?limit=10");
  },
  //获取轮播图图片
  getRotationImg() {
    return myMusicRequest.get("/banner");
  },
  //获取独家放送
  getSole() {
    return myMusicRequest.get("/personalized/privatecontent");
  },
};
// 获取推荐歌单
export const songListAPI = () => {
  return myMusicRequest({
    url: '/top/playlist?limit=10',
    method: 'GET'
  })
}

// 获取轮播图图片
export const slideshowAPI = () => {
  return myMusicRequest({
    url: '/banner',
    method: 'GET'
  })
}

// 获取独家放送
export const exclusiveAPI = () => {
  return myMusicRequest({
    url: '/personalized/privatecontent',
    method: 'GET'
  })
}
