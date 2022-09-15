import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/iconfont.css'
import moment from "moment"
import store from '@/store/index.js'

// 定义时间格式化全局过滤器
Vue.filter('dateFormat',(dateStr,pattern = 'YYYY-MM-DD ') =>{
  return moment(dateStr).format(pattern)
})

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
		Vue.prototype.$bus = this	//安装全局事件总线
	}
}).$mount('#app')

