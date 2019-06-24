// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入iview 开始
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 引入iview 结束

// 引入ElementUI 开始
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  //单独引入样式文件
Vue.use(ElementUI)
// 引入ElementUI 结束

// 注册全局组件 开始
// ---头部菜单栏
import FunHeader from '@/components/common/FunHeader'
Vue.component(FunHeader.name, FunHeader);
// ---首页轮播图
import HomeCart from '@/components/common/HomeCart'
Vue.component(HomeCart.name, HomeCart);
import FunCartLi from '@/components/common/FunCartLi'
Vue.component(FunCartLi.name, FunCartLi);
// 注册全局组件 结束

// 使用iview
Vue.use(iView);

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
