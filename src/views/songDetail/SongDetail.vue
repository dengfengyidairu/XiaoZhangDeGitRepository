<template>
    <div class="maxbox">
        <!-- 歌单详情上半部分 -->
        <div class="top">
            <img class="cover" :src="$store.state.songDetaData.coverImgUrl">
            <div class="title">
                <span class="title_bar">{{ $store.state.songDetaData.name }}</span>
                <div class="creator">
                    <img class="head_portrait" :src="$store.state.createMsg.avatarUrl">
                    <span class="nickname">{{$store.state.createMsg.nickname}}</span>
                    <span class="creator_time">{{$store.state.songDetaData.trackNumberUpdateTime | dateFormat}}创建</span>
                </div>
                <div class="song_operate">
                    <span class="operate_left" @click="playAll"><i class="iconfont icon-bofang"></i>播放全部</span>
                    <span class="operate_right"><i class="iconfont icon-jiahao"></i></span>
                </div>
                <div class="tags">
                    <span class="left_color">标签:</span>
                    <span class="tags_item" v-for="(item, index) in $store.state.songDetaData.tags" :key="index">{{item}}</span>
                </div>
                <div class="song_quantity">
                    <span class="left_color">歌曲:</span>
                    <span class="right_color">{{$store.state.len}}</span>
                    <span class="left_color">播放:</span>
                    <span class="right_color">{{$store.state.songDetaData.playCount}}</span>
                </div>
                <div class="synopsis">
                    <span class="left_color jianjie">简介:</span>
                    <span :class="flag?'synopsis_datails':'synopsis_datailsEr'">{{$store.state.songDetaData.description}}</span>
                    <span class="clickUnfoldFn" @click="flag = !flag "
                        :class="flag?'iconfont icon-xiajiantou':'iconfont icon-shangjiantou'"></span>
                </div>
            </div>
        </div>
        <!-- 歌单详情下半部分 -->
        <div class="songMsg">
            <div class="choose_opt">
                <span class="song_list">歌曲列表</span>
            </div>
            <table class="operate_title">
                <tr>
                    <th class="tab_opt">操作</th>
                    <th class="tab_title">标题</th>
                    <th class="tab_singer">歌手</th>
                    <th class="tab_album">专辑</th>
                    <th class="tab_time">时间</th>
                </tr>
                <tr class="datail_msg" v-for="(item, index) in $store.state.songMsg" :key="item.id" @dblclick="playSongFn(item.id,index)">
                    <td class="tab_optl">{{index+1}}<i class="iconfont icon-xiazai"></i><i class="iconfont icon-xihuan"></i></td>
                    <td class="tab_titlel"><span>{{item.name}}</span></td>
                    <td class="tab_singerl"><span v-for="singer in item.ar.slice(0,3)" :key="singer.id" :title="singer.name">{{singer.name}}</span></td>
                    <td class="tab_albuml"><span :title="item.al.name">{{item.al.name}}</span></td>
                    <td class="tab_timel" >暂无数据</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    data() {
        return {
            flag: true
        }
    },
    methods: {
        // 映射
        ...mapMutations(['alterMusicMsg']),
        ...mapActions(['getSongDetailss', 'getSongMsg','getSongUrl']),
        // 点击播放全部
        playAll () {

        },
        // 双击播放歌曲
        playSongFn (id, index) {
            // 获取歌曲的url
            this.getSongUrl(id)
            // 全局事件总线，调用兄弟组件的函数
            this.$bus.$emit('playBus',index)
            // 改变左下角的歌曲，歌手名字，歌曲图片
            this.alterMusicMsg(this.$store.state.songMsg[index])
        }
    },
    created() {
        // 调用映射过来的store actions函数，传入路由传递过来的query参数
        this.getSongDetailss(this.$route.query.id)
        this.getSongMsg(this.$route.query.id)
    }
}
</script>

<style lang="less" scoped>

.maxbox {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    margin: 30px 0 0 0;
}

::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
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

.title .creator .nickname {
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

.title .song_operate {
    display: inline-block;
    margin: 4px 0;
}

.song_operate .operate_left {
    display: inline-block;
    width: 100px;
    height: 32px;
    color: aliceblue;
    background-color: #ec4141;
    border-radius: 20px 0 0 20px;
    font-size: 14px;
    line-height: 30px;
}

.song_operate .operate_left i {
    margin: 0 5px 0 16px;
    font-size: 13px;
}

.song_operate .operate_right {
    display: inline-block;
    width: 36px;
    height: 32px;
    background-color: #ec4141;
    border-radius: 0 20px 20px 0;
    line-height: 28px;
    font-size: 14px;
    color: aliceblue;
    border-left: 1px solid #b5afaf;
}

.song_operate .operate_right i {
    display: inline-block;
    margin: 1.5px 0 0 7px;
    font-size: 13px;
}

.operate_left:hover {
    background-color: #c61616;
    cursor: pointer;
}

.operate_right:hover {
    background-color: #c61616;
    cursor: pointer;
}

.title .tags {
    margin: 10px 0 6px 0;
    font-size: 13px;
}

.title .tags .tags_item {
    color: rgb(55, 117, 183);
    margin: 0 2px 0 4px;
}

.title .tags .tags_item:hover {
    cursor: pointer;
    color: rgb(61, 55, 253);
}

.title .song_quantity span {
    font-size: 13px;
    margin: 0 5px 0 0;
}

.title .left_color {
    color: #504e4e;
}

.title .right_color {
    color: #767373;
}

.title .synopsis {
    font-size: 13px;
    margin-top: 6px;
    display: flex;
}

.synopsis_datails {
    width: 600px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #767373;
    letter-spacing: 1px;
}

.synopsis_datailsEr {
    width: 600px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: #767373;
    letter-spacing: 1px;
}

.clickUnfoldFn:hover {
    cursor: pointer;
}

.jianjie {
    display: inline-block;
    width: 30px;
    height: 17px;
}

.choose_opt {
    margin: 44px 0 0 0;
}

.choose_opt .song_list {
    display: inline-block;
    margin: 0 0 26px 10px;
    font-weight: 800;
    font-size: 20px;
    border-bottom: 3px solid #ec4141;

}

.songMsg .operate_title {
    display: inline-block;
    border-spacing: 0;
    margin-bottom: 110px;
}

.songMsg .operate_title td {
    color: #767373;
    font-size: 13px;
    text-align: center;
}

.songMsg .operate_title .tab_opt {
    width: 140px;
    height: 30px;
    background-color: #ec4141;
}

.songMsg .operate_title .tab_title {
    width: 340px;
    height: 30px;
    background-color: #54b5ee;
}

.songMsg .operate_title .tab_singer {
    width: 160px;
    height: 30px;
    background-color: #41b897;
}

.songMsg .operate_title .tab_album {
    width: 248px;
    height: 30px;
    background-color: #7f3996;
}

.songMsg .operate_title .tab_time {
    width: 110px;
    height: 30px;
    background-color: #fcea4d;
}

.songMsg .operate_title .tab_optl {
    width: 140px;
    height: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.songMsg .operate_title .tab_optl i:hover {
    cursor: pointer;
    color: rgb(0, 0, 0);
}

.songMsg .operate_title .tab_titlel {
    width: 280px;
    height: 30px;

    span {
        display: inline-block;
        width: 300px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.songMsg .operate_title .tab_singerl {
    width: 220px;
    height: 30px;
    span {
        width: 57px;
        display: inline-block;
        margin-left: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    span:hover {
        cursor: pointer;
        color: rgb(0, 0, 0);
    }
}

.songMsg .operate_title .tab_albuml:hover {
    cursor: pointer;
    color: rgb(0, 0, 0);
}

.songMsg .operate_title .tab_albuml {
    width: 248px;
    height: 30px;

    span {
        display: inline-block;
        width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.songMsg .operate_title .tab_timel {
    width: 110px;
    height: 30px;
}

.datail_msg:hover {
    background-color: #dcd6d6;
}
</style>