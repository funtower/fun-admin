<template>
  <div>
    <div class="publish">

      
    </div>

    <ul>
      <fun-cart-li v-for="(topic,index) in topics" :key="index" :topic="topic"></fun-cart-li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  created() {
    this.$axios.get('/topic/getTopicCartList')
    .then(res => this.topics = res.data.data)
    .catch(console.log);
  },
  data() {
    return {
      topics: []
    };
  }
};
</script>

<style scoped lang="stylus">
ul {
  width: 100%;
  height: 100%;
}
</style>
