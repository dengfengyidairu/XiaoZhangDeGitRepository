import axios from "axios";

//默认网络前缀
axios.defaults.baseURL = "http://localhost:3000/";
//响应时间
axios.defaults.timeout = 5000;
//响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (Error) => {
    console.log(Error);
    return Promise.reject(Error);
  }
);
export default axios;
