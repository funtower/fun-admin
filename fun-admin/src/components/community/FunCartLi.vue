<template>
  <li>
    <el-row>
      <el-col :span="4">
        <div class="cart portrait">
          <img src="/static/img/portrait.svg" style="width: 70%">
        </div>
      </el-col>
      <el-col :span="20" :push="1">
        <div class="cart righttop">
          <el-row>
            <el-col :pull="1" :span="10" class="user-id-col">
              <a href="javascript:void" class="userId">{{ topic.name }}</a>
            </el-col>
            <el-col :span="14" :push="3" class="focus-warn-options">
              <img src="/static/img/unfocus.svg" alt style="width: 12%; cursor:pointer">
              <img src="/static/img/warn.svg" alt style="width: 12%; cursor:pointer">
            </el-col>
            <el-col :pull="7">
              <a href="javascript:void" class="userJob">{{ topic.job }}</a>
              <span>{{ topic.pubTime | fromNowTime}}</span>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="cart">
          <p>
            {{ topic.content }}
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8">
        <div class="cart sub left" @click="zan">
          <img :src="zanSrc" style="width: 23%; cursor:pointer" alt>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="cart sub center">
          <img src="/static/img/comment.svg" style="width: 20%; cursor:pointer" alt>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="cart sub right">
          <img src="/static/img/share.svg" style="width: 20%; cursor:pointer" alt>
        </div>
      </el-col>
    </el-row>
  </li>
</template>

<script>
export default {
  name: "fun-cart-li",
  components: {},
  props: ['topic'],
  created() {
    
  },
  data() {
    return {
      zanFlag: false,
      zanSrc: "/static/img/zan0.svg"
    };
  },
  methods: {
    zan() {
      this.zanFlag = !this.zanFlag;
      console.log(this);
      this.zanSrc = this.zanFlag
        ? "/static/img/zan2.svg"
        : "/static/img/zan0.svg";
    }
  }
};
</script>

<style scoped lang="stylus">
li {
  margin: 6px;
  padding: 6px;
  width: 100%;
  height: 100%;
}

.cart {
  background-color: #FAFAD2;
  width: 100%;
  height: 100%;
  border-radius: 4px 4px 0px 0px;
  line-height: 27px;
}

.sub {
  height: 100px;
  border-radius: 0px 0px 4px 4px;
  line-height: 160px;
}

.left {
  border-radius: 0px 0px 0px 4px;
}

.center {
  border-radius: 0px 0px 0px 0px;
}

.right {
  border-radius: 0px 0px 4px 0px;
}

.portrait {
  position: relative;
}

.portrait img {
  position: absolute;
  top: 10px;
  left: 20px;
}

.righttop {
  margin-left: 73px;
  width: 100%;
}

p {
  margin: 0;
  padding-top: 20px;
  word-wrap: break-word;
  padding-left: 50px;
  padding-right: 40px;
  line-height: 25px;
  text-align: left;
}

.userId {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
}

.userJob {
  text-align: left;
  font-size: 14px;
}

.userJob+span {
  text-align: left;
  font-size: 12px;
}

.user-id-col {
  margin-top: 16px;
}

.focus-warn-options {
  margin-top: 13px;
}

.focus-warn-options img {
  margin-left: 10px;
}
</style>
