// 引入封装好的axios
import myMusicRequest from '@/utils/api/index'

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

// 获取推荐电台
export const radioAPI = () => {
  return myMusicRequest({
    url: '/personalized/djprogram',
    method: 'GET',
  })
}

// 获取推荐MV
export const mvAPI = () => {
  return myMusicRequest({
    url: '/personalized/mv',
    method: 'GET'
  })
}

// 获取最新专辑
export const albumAPI = () => {
  return myMusicRequest({
    url: '/album/newest',
    method: 'GET'
  })
}

