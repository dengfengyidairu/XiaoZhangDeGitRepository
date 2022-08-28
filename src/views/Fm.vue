<template>
    <div>
        <!-- <el-button @click="getMic">点击获取</el-button> -->
        施工中...
        <br>
        <button @click="clickFn">点击获取数据</button>
    </div>
</template>

<script>
import { songListAPI } from '@/api/SongList/song'
export default {
    name: 'Fm',
    data() {
        return {
            aaa: [],
        }
    },

    methods: {
        // getMic() {
        //     axios({
        //         url: '/song/url?id=33894312',
        //         method: 'GET'
        //     })
        //         .then(res => {
        //             console.log("我拿到的数据：", res.data)
        //             // this.aaa = res
        //             // console.log(aaa[0])
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // }
    async clickFn () {
        const {playlists: res} = await songListAPI()
        console.log(res)
    }
    }

}

</script>

<style>
</style>