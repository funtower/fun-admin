<template>
  <div>
    <el-row>
        <el-col :span="4" :offset="1">
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        <div style="border: solid;">一级菜单</div>
        
      </el-col>
      <el-col :span="18" :offset="1">
        <vue-ueditor-wrap :config="myConfig"></vue-ueditor-wrap>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 引入VueUeditorWrap组件
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  name: "Blog",
  components: { VueUeditorWrap },// 注册编辑器组件到当前组件中
  data() {
    return {
      myConfig: {
        // 如果需要上传功能,要服务器接口地址
        // serverUrl: this.$config.baseUrl + 'ueditor/ueditorConfig',
        // serverUrl: 'http://localhost:8090/ueditor/ueditorConfig',
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/static/utf8-jsp/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 370,
        // 初始容器宽度
        initialFrameWidth: "90%",
        // 关闭自动保存
        enableAutoSave: true
      },
      content: ""
    };
  }
};
</script>

<style scoped lang="stylus"></style>
