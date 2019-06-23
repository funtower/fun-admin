// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入ElementUI 开始
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  //单独引入样式文件
Vue.use(ElementUI)
// 引入ElementUI 结束

// 注册全局组件 开始
import FunHeader from '@/components/common/FunHeader'
Vue.component(FunHeader.name, FunHeader);
import HomeCart from '@/components/common/HomeCart'
Vue.component(HomeCart.name, HomeCart);
// 注册全局组件 结束

// 引入全局样式
import '../static/css/global.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
