<template>
  <div>
    <el-row>
  <el-col :span="6"><div>
    <img src="/static/img/logo-green.png" alt="">
    </div></el-col>
  <el-col :span="18"><div>
      <fun-header/>
    </div></el-col>
    </el-row>
    <home-cart/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {},
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
</style>
