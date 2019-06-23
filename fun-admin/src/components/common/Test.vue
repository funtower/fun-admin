<template>
  <div>
      <h1>我是测试页面</h1>

      <ul>
        <li v-for="(item,index) in imgs" :key="index">
          <div align='center'>
            <img :src="item" alt="">
          </div>
        </li>

      </ul>

      <button @click="toSub"> 去SUB</button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Test',
  components: {},
  data() {
    return {
      imgs: [
        'static/img/xueshan.jpg',
        'static/img/nanchang.jpg',
        'static/img/jiaoshi.jpg',
        'static/img/shuben.jpg',
      ]
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
    body {
        text-align: center;
    }
    
    ul {
        background: gray;
        width: 100%;
        padding: 20px;
        -webkit-perspective: 200;
    }
    
    li {
        list-style: none;
        height: 50px;
        width: 100px;
        padding: 0;
        margin: 0;
        display: inline-block;
        background: white;
        border-radius: 2px;
    }
    
    .anim {
        animation: anim 1s infinite;
        width: 100px;
        margin-left: -100px;
        background: white
    }
    
    @keyframes anim {
        to {
            transform: rotateY(-360deg);
        }
    }
    
    .anim2 {
        animation: anim2 1s infinite;
        width: 100px;
        margin-left: -100px;
        background: white
    }
    
    @keyframes anim2 {
        25% {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(-360deg);
        }
    }

</style>


