<template>
  <div>
    <el-row>
      <el-col :span="4" :offset="1">
        <Menu :theme="theme3" active-name="1">
          <MenuGroup title="内容管理">
            <MenuItem name="1">
              <Icon type="md-document"/>文章管理
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-chatbubbles"/>评论管理
            </MenuItem>
          </MenuGroup>
          <MenuGroup title="统计分析">
            <MenuItem name="3">
              <Icon type="md-heart"/>用户留存
            </MenuItem>
            <MenuItem name="4">
              <Icon type="md-leaf"/>流失用户
            </MenuItem>
          </MenuGroup>
        </Menu>
        <br>
        <p>Change theme</p>
        <RadioGroup v-model="theme3">
          <Radio label="light"></Radio>
          <Radio label="dark"></Radio>
        </RadioGroup>
      </el-col>
      <el-col :span="18" :offset="1">
        <el-row>
          <el-col :span="22" >
            <el-input placeholder="---请输入文章标题---"></el-input>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <vue-ueditor-wrap :config="myConfig" v-model="content" mode="observer"></vue-ueditor-wrap>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-button type="primary" @click="showData"> 获取 </el-button>
  </div>
</template>

<script>
// 引入VueUeditorWrap组件
import VueUeditorWrap from "vue-ueditor-wrap";
export default {
  name: "Blog",
  components: { VueUeditorWrap }, // 注册编辑器组件到当前组件中
  data() {
    return {
      theme3: "dark", // 左侧菜单栏主题
      myConfig: {
        // 如果需要上传功能,要服务器接口地址
        // serverUrl: this.$config.baseUrl + 'ueditor/ueditorConfig',
        serverUrl: 'http://localhost:8081/ocl/funadmin/postBlog',
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/static/utf8-jsp/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 工具栏是否可以浮动
        autoFloatEnabled: false,
        // 初始容器高度
        initialFrameHeight: 370,
        // 初始容器宽度
        initialFrameWidth: "91.6%",
        // 关闭自动保存
        enableAutoSave: true
      },
      content: ""
    };
  },
  methods: {
      showData(){
          alert(this.content);
      }
  }
};
</script>
// 局部样式
<style scoped lang="stylus"></style>

