<template>
    <div class="maxbox">
        <div class="top">
            <img class="cover" :src="songDetaData.coverImgUrl">
            <div class="title">
                <span class="title_bar">{{ songDetaData.name }}</span>
                <div class="creator">
                    <img class="head_portrait" :src="createMsg.avatarUrl">
                    <span class="nickname">{{createMsg.nickname}}</span>
                    <span class="creator_time" >{{createMsg.trackUpdateTime | dateFormat}}创建</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { songDetail } from '@/api/SongList/song'
export default {
    data() {
        return {
            songDetaData: [],
            createMsg:[]
        }
    },
    methods: {
        // 获取路由传递过来的歌单详情数据
        async getSongDetail() {
            const res = await songDetail(this.$route.query.id)
            this.songDetaData = res.playlist
            this.createMsg = res.playlist.creator
            console.log(this.songDetaData)
        }
    },
    created() {
        this.getSongDetail()
    }
}
</script>

<style scoped>
.maxbox {
    margin: 30px 0 0 0;
}

.maxbox .top {
    display: flex;
}

.maxbox .top .cover {
    width: 180px;
    height: 184px;
    border-radius: 6px;
}

.maxbox .top .title {
    margin: 0 0 0 20px;
}

.maxbox .top .title .title_bar {
    font-size: 22px;
    font-weight: 900;
}

.title .creator {
    margin: 5px 0;
}

.title .creator .head_portrait {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}
.title .creator .nickname{
    font-size: 12px;
    color: rgb(68, 138, 208);
    margin: 0 0 0 5px;
    position: relative;
    bottom: 7px;
}
.title .creator .creator_time {
    font-size: 12px;
    margin: 0 0 0 5px;
    color: rgb(123, 125, 125);
    position: relative;
    bottom: 7px;
}
</style>