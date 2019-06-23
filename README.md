# fun-admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
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

```shell
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  //单独引入样式文件
Vue.use(ElementUI)
```

运行项目
>$npm run dev  
自动打开浏览器，看到Vue的hello world页面证明项目搭建成功

### 项目搭建过程 20190623 end

