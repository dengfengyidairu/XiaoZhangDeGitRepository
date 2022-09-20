<template>
    <div class="outermost_layer">
        <ul>
            <li v-for="item in $store.state.recommendVideo" :key="item.id">
                <img :src="item.data.coverUrl">
                <span :title="item.data.title">{{item.data.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name,
        data () {
            return {
            }
        },
        methods : {
            // 映射
            ...mapActions(['getRmdVideo']),
        },
        mounted () {
            setTimeout(() => {
                this.getRmdVideo()
            }, 0);
        } 
    }
</script>

<style lang="less" scoped> 
    * {
        padding: 0;
        margin: 0;
    }
    .outermost_layer {
        margin: 0 0 50px 0;
    }
    ul {
        list-style: none;
        li {
            width: 300px;
            height: 200px;
            display: block;
            margin: 10px 20px 10px 0;
            float: left;
            img {
                width: 300px;
                border-radius: 8px;
            }
            span {
                display: inline-block;
                width: 300px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>