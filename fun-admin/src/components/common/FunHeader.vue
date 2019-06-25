<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" >
      <el-menu-item index="1">
        <router-link :to="{name: 'HomeCart'}">
          首页
        </router-link>
      </el-menu-item>
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
      <el-menu-item index="3" @click="community">
        <router-link :to="{name: 'Community'}">
          社区
        </router-link>
      </el-menu-item>
      <el-menu-item index="4" @click="blog">
        <router-link :to="{name: 'Blog'}">博客</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import FunBus from '@/FunBus';
export default {
  name: "fun-header",
  props: [
    'name'
  ],
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    community() {
    },
    blog () {
      
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
