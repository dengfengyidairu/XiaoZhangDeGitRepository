<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- <input type="text" v-model="phone">
        <br>
        <input type="password" v-model="password">
        <br>
        <button @click="loginFn">登录</button>
        <br>
        <button @click="storeFn">获取登录状态</button> -->
        
        <button @click="butClickFn">点击显示登录框</button>
    </div>
</template>

<script>
import { phoneLoginAPI, storeAPI } from '@/api/Login/index'
// import Login from '@/views/login/Login.vue'
export default {
    data() {
        return {
            phone:'',
            password:''
            
        }
    },
    methods: {
        butClickFn () { 
            this.$refs.loginBtnFn.flag = true
        },
        async loginFn () {
            const res = await phoneLoginAPI(this.phone, this.password)
            console.log(res)
        },
        async storeFn () {
            const res = await storeAPI()
            console.log(res)
        }
    },
    // components: {
    //     Login
    // }

}

</script>

<style>
    body {
        width: 100%;
        height: 100%;
    }
    .acc {
        width: 200px;
        height: 400px;
        background-color: aqua;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
    }
    .aaa {
        width: 200px;
        height: 200px;
        background-color: coral;
        margin: 20px 0;
    }
</style>