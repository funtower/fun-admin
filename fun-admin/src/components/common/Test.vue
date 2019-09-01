<template>
  <div>
      <h1>我是测试页面</h1>
      <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Test',
  components: {},
  data() {
    return {
      message: 'sex',
      name: 'lady',
      full: '',
    }
  },
  mounted() {
    console.log(this.full);
    this.full = this.message + '' + this.name;
    this.name = '张三';
  },
  computed: {
    full () {
      return this.name + this.message + 'sadfa';
    }
  },
  methods: {
    toSub() {
      this.$router.push({
        name: 'Sub'
      });
    }
  }
}
</script>

<style scoped lang="stylus">

</style>


