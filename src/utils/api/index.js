// 封装网易云接口
import axios from "axios";

const myMusicRequest = axios.create({
    // 请求地址前缀
    baseURL: 'http://localhost:3000',
    // baseURL: '/api',
    // 响应时间
    timeout: 4000, 
    /*headers: {
      // 'Content-Type': 'application/json; charset=utf-8'
    },*/
    withCredentials: true
})
// 响应拦截器
myMusicRequest.interceptors.response.use(
    response => {
      return response.data;
    },
    Error => {
      console.log(Error);
      return Promise.reject(Error);
    }
  );
  export default myMusicRequest;