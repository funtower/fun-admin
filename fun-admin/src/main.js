// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入iview 开始
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// 使用iview
Vue.use(iView);
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
import HomeCart from '@/components/home/HomeCart'
Vue.component(HomeCart.name, HomeCart);
import FunCartLi from '@/components/community/FunCartLi'
Vue.component(FunCartLi.name, FunCartLi);
// 注册全局组件 结束

// 引入全局样式
import '../static/css/global.css'

// axios 开始
// 引入 Axios
import Axios from 'axios';
// 给 Vue 的原型挂载 $axios属性
Vue.prototype.$axios = Axios;
// Axios.defaults.baseURL = 'http://192.168.0.113:8081/ocl/cms/';
Axios.defaults.baseURL = 'http://192.168.0.120:8081/ocl/';
// 定义拦截器
// 1.定义请求发起前显示loading open();
Axios.interceptors.request.use(function (config) {
  // 可以模仿mintui做请求中处理
  // MintUI.Indicator.open({
  //   text: '玩儿命加载中...',
  //   spinnerType: 'fading-circle'
  // });
  console.log('玩命加载中...')
  return config;
});
// 2.响应回来后关闭loading close();
Axios.interceptors.response.use(function (response) {
  // MintUI.Indicator.close();
  console.log('加载完毕');
  return response;
});
// axios 结束


// 相对时间过滤器 开始
import Moment from 'moment'
Moment.locale('zh-cn');
Vue.filter('fromNowTime', function (time) {
  // 处理需要转换的时间
  return Moment(time).fromNow();
});
// 相对时间过滤器 结束

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
