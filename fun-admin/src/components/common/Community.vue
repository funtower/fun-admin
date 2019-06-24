<template>
  <div>
    <el-row>
      <el-col :span="8" :offset="5">
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
