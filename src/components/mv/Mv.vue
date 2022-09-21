<template>
  <div class="outermost_layer">
        <ul>
            <li v-for="item in $store.state.newestMv.data" :key="item.id">
                <img :src="item.cover">
                <span>{{item.name}}</span>
                <span @click="fnn(items)" class="singer_name" v-for="items in item.artists" :key="items.id">{{items.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name,
    methods: {
      ...mapActions(['getNewestMv']),
      fnn(i) {
        console.log(i)
      }
    },
    mounted () {
      this.getNewestMv()
    }
  }
</script>

<style lang="less" scoped> 
  * {
      padding: 0;
      margin: 0;
      list-style: none;
  }
  .outermost_layer {
  }
  ul {
      li {
          width: 300px;
          height: 200px;
          display: block;
          margin: 10px 20px 10px 10px;
          float: left;
          img {
              width: 300px;
              height: 169px;
              border-radius: 8px;
          }
          img:hover {
            cursor: pointer;
          }
          span {
              display: inline-block;
              width: 300px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 14px;
          }
          .singer_name {
            font-size: 12px;
            color: rgb(158, 160, 162);
          }
          .singer_name:hover {
            cursor: pointer;
            color: rgb(0, 0, 0);
          }
      }
  }
</style>