import myMusicRequest from "@/utils/api";

//获取获取视频分类列表
export const allVideoAPI = () => {
    return myMusicRequest ({
        url: '/video/timeline/all',
        method: 'GET'
    }) 
}

// 获取推荐视频
export const recommendVideoAPI = ( offset = 0 ) => {
    return myMusicRequest ({
        url: '/video/timeline/recommend',
        method: 'GET',
        data: {
            offset
        }
    }) 
}

// 获取最新MV
export const newestMvAPI = ( area = '内地') => {
    return myMusicRequest({
        url: '/mv/first',
        method: 'GET',
        data:{
            area
        }
    })
}