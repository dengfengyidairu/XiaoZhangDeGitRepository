import myMusicRequest from "@/utils/api";
import axios from 'axios'

// 获取二维码登录需要的key值
export const loginKeyAPI = () => {
    return axios({
        url: 'api/login/qr/key',
        method: 'GET',
        params:{
            timerstamp: new Date().getTime(),
          }
    })
}
/**
 * 登录请求
 * @param {*} key 
 * @returns 返回一个Promise对象
 */
export const loginAPI = (key) =>{
    return axios({
        withCredentials: true,
        url: 'api/login/qr/create?qrimg=true',
        method: 'GET',
        params:{
            key,
            timerstamp: new Date().getTime(),
          }
    })
}
// 获取二维码状态码
export const gainStateAPI = (key) => {
    return axios({
        url: 'api/login/qr/check',
        method: 'GET',
        params:{
            key,
            timerstamp: new Date().getTime(),
          }
    })
}

// 手机密码登录
export const phoneLoginAPI = ({ phone, password }) => {
    return axios({
        url: 'api/login/cellphone',
        method: 'POST',
        data: {
            phone,
            password
        }
    })
}

export const storeAPI = () => {
    return myMusicRequest({
        url: '/login/status'
    })
}
