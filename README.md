## fun-admin

> A Vue.js project

## Build Setup

``` bash
> install dependencies  
$ npm install

> serve with hot reload at localhost:8080
npm run dev

>build for production with minification    
$ npm run build

>build for production and view the bundle analyzer report  
$ npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 项目搭建过程 20190623 start
安装vue  

>$ npm install vue  

安装vue-cli脚手架  

>$ npm install -g @vue/cli  

初始化项目  
>$ vue init webpack fun-admin  

>$ cd fun-admin  

修改config目录下的index.js配置选项  
1.autoOpenBrowser: true 自动打开浏览器  
2.prot: 9315设置项目端口  

安装elementUI  
>$ npm i element-ui -S

找到src下的main.js，引入elementUI并use  

```javascript
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  //单独引入样式文件
Vue.use(ElementUI)
```

运行项目
>$npm run dev  
自动打开浏览器，看到Vue的hello world页面证明项目搭建成功

### 项目搭建过程 20190623 end

### 注册全局组件 20190626 start
```javascript  

	// ---头部菜单栏
	import FunHeader from '@/components/common/FunHeader'  
	Vue.component(FunHeader.name, FunHeader);  
	// ---首页轮播图  
	import HomeCart from '@/components/home/HomeCart'  
	Vue.component(HomeCart.name, HomeCart);  
	// ---话题列表卡片  
	import FunCartLi from '@/components/community/FunCartLi'  
	Vue.component(FunCartLi.name, FunCartLi);  
```
### 注册全局组件 20190626 end

### 引入全局样式 20190626 start
```javascript

	// 引入全局样式
	import '../static/css/global.css'
```
### 引入全局样式 20190626 end

### 引入iview 20190626 start
```javascript  

	安装iview  
	$ npm i iview -S  
	// 引入iview 开始  
	import iView from 'iview';  
	import 'iview/dist/styles/iview.css';  
	// 使用iview  
	Vue.use(iView);  
	// 引入iview 结束
```
### 引入iview 20190626 end

### 引入axios 20190626 start
	
	安装axios
	$ npm i axios -S 
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
### 引入axios 20190626 end




