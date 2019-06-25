<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click.native="toHomeCart">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" @click.native="toCommunity">社区</el-menu-item>
      <el-menu-item index="4" @click.native="toBlog">博客</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import FunBus from "@/FunBus";
export default {
  name: "fun-header",
  props: ["name"],
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    community() {},

    // 编程式导航路由
    toHomeCart() {
      this.$router.push({name: "HomeCart"});
    },
    toCommunity() {
      this.$router.push({name: "Community"});
    },
    toBlog() {
      this.$router.push({name: "Blog"});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  width: 100% + 40px;
  height: 100%;
}
</style>
