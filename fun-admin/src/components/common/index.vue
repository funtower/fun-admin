<template>
  <div>
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="6">
            <div class="logo">
              <img src="/static/img/工程logo.png" alt>
            </div>
          </el-col>
          <el-col :span="7">
            <fun-header name="test"/>
          </el-col>
          <el-col :span="5">
            <el-input placeholder="站内搜索" style="margin-top: 20px;"></el-input>
          </el-col>
          <el-col :span="2" style="margin-top: 10px;">
            <Badge :count="3">
              <div class="demo-badge">
                <img src="/static/img/msg.svg" width="100%" alt>
              </div>
            </Badge>
            <!-- </el-badge> -->
          </el-col>
          <el-col :span="2" style="margin-top: 10px;">
            <el-button type="primary" @click="login">登录</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>

          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import FunBus from "@/FunBus";
export default {
  name: "Index",
  components: {},
  data() {
    return {};
  },
  methods: {
    login () {
      console.log('登录了。。。');
    }
  },
  created() {
    this.$router.push({
      name: "HomeCart"
    });
  }
};
</script>

<style scoped lang="stylus">
.logo {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.logo img {
  width: 100%;
  height: 61px;
}

.el-header {
  padding: 0;
}

.el-header, .el-footer {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 2px;
}

.el-main {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  // line-height: 160px;
  height: 100%;
  // height: 500px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-containe .is-vertical {
  height: 100%;
}

.el-container:nth-child(5) .el-aside, .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.demo-badge {
  width: 42px;
  height: 42px;
  background: #545c64;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;
}
</style>
