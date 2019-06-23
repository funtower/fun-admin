<template>
  <div>
    <el-carousel :interval="4500" type="card" height="562px">
      <el-carousel-item v-for="(item,index) in swipeSrc" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "home-cart",
  components: {},
  data() {
    return {
        swipeSrc: [
            'static/img/xueshan.jpg',
            'static/img/nanchang.jpg',
            'static/img/jiaoshi.jpg',
            'static/img/shuben.jpg',
        ]
    };
  }
};
</script>

<style scoped lang="stylus">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

// 自定义样式
.el-carousel__item is-active {
    height: 526px;
}
.el-carousel__mask {
    width: 100%;
    height: 562px;
}
.el-carousel__item el-carousel__item--card is-in-stage img {
    width: 100%;
    height: 562px;
}
</style>
