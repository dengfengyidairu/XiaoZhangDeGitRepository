<template>
    <div class="outermost_layer">
        <div class="top_title">
            <span  @click="flag = true" :class="flag ? 'pitch_on' : '' ">视频</span>
            <span @click="flag = false" :class="flag === false  ? 'pitch_on' : '' ">MV</span>
        </div>
        <Video v-show="flag"></Video>
        <MV v-show="!flag"></MV>
    </div>
</template>

<script>
import Video from '@/components/video/Video.vue'
import MV from '@/components/mv/Mv.vue'
export default {
    name,
    data () {
        return {
            flag: true
        }
    },
    components: {
        Video,
        MV
    }
}
</script>

<style lang="less" scoped>
    .outermost_layer {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    .top_title {
        span {
            display: inline-block;
            font-size: 20px;
            margin: 10px 10px 20px 20px;
            color: rgb(121, 114, 114);
        }
        span:hover {
            cursor: pointer;
            color: #000000;
        }
        .pitch_on {
            color: #1a1919;
            border-bottom: 3px solid rgb(195, 53, 53);
            font-weight: 800;
            font-size: 24px;
            border-radius: 2px;
        }
    }
    ::-webkit-scrollbar {
        display: none;
}
</style>