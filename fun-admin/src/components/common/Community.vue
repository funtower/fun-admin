<template>
  <div>
    <el-row>
      <el-col :span="8" :offset="5">
        <ul>
          <li>
            <el-row>
              <el-col :span="4">
                <div class="cart portrait">
                  <img src="/static/img/portrait.svg" style="width: 70%">
                </div>
              </el-col>
              <el-col :span="20">
                <div class="cart righttop">
                  <el-row>
                    <el-col :pull="1" :span="10">
                      <a href="javascript:void" class="userId">Fontower</a>
                    </el-col>
                    <el-col :span="14" :push="2">
                      <!-- <el-button-group>
                            <el-button plain>关注</el-button>
                            <el-button plain>举报</el-button>
                      </el-button-group>-->
                      <img src="/static/img/unfocus.svg" alt="" style="width: 12%">
                      <img src="/static/img/warn.svg" alt="" style="width: 12%">
                    </el-col>
                    <el-col :pull="5">
                      <a href="javascript:void" class="userJob">全栈开发工程师</a>
                      <span>10 分钟前</span>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <div class="cart">
                  <p>
                    performance：一个 PHP 性能分析器，可实时检测你的脚本、内存、
                    数据库使用情况，支持 Laravel 和 Composer。GitHub
                    地址：https://github.com/bvanhoekelen/performancegithub.com/bvanhoekelen/p...
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row type="flex" class="row-bg" justify="center">
              <el-col :span="8">
                <div class="cart sub left" @click="zan">
                  <img :src="zanSrc" style="width: 23%" alt>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="cart sub center" @click>
                  <img src="/static/img/comment.svg" style="width: 20%" alt>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="cart sub right">
                  <img src="/static/img/share.svg" style="width: 20%" alt>
                </div>
              </el-col>
            </el-row>
          </li>
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
      zanFlag: false,
      zanSrc: "/static/img/zan0.svg"
    };
  },
  methods: {
    zan() {
      this.zanFlag = !this.zanFlag;
      console.log(this.zanFlag);
      this.zanSrc = this.zanFlag
        ? "/static/img/zan2.svg"
        : "/static/img/zan0.svg";
    }
  }
};
</script>

<style scoped lang="stylus">
ul {
  width: 100%;
  height: 100%;
}

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
  line-height: 32px;
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
}

.userJob {
  text-align: left;
  font-size: 12px;
}


</style>
