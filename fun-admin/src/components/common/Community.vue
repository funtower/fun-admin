<template>
  <div>
    <el-row>
      <el-col :span="4" :offset="1">
        <Menu :theme="theme3" active-name="1">
          <MenuGroup title="内容管理">
            <MenuItem name="1">
              <Icon type="md-document"/>话题
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-chatbubbles"/>文章
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
      <el-col :span="11" :push="1">
        <ul>
          <fun-cart-li></fun-cart-li>
          <fun-cart-li></fun-cart-li>
          <fun-cart-li></fun-cart-li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      theme3: "dark", // 左侧菜单栏主题
    };
  },
  methods: {

  }
};
</script>

<style scoped lang="stylus">
ul {
  width: 100%;
  height: 100%;
}
</style>
