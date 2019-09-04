<style lang="less" rel="stylesheet/less" >
  .demo {
    .demo-select {
      &:after {
        content: '...';
        position: absolute;
        right: 39px;
        bottom: 5px;
      }
    }
  }
  .el-select__tags {
    max-width: 150px!important;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
<template>
  <div>    
    <div class="demo">
      <el-select v-model="value5" ref="select"  @change="changeSelect" :class="{'demo-select': isMore}" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value" class="demo-option">
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
  import { Select, Option } from 'element-ui'
  export default {
    data: () => ({
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭北京烤鸭北京烤鸭北京烤鸭北京烤鸭'
      }],
      value5: [],
      isMore: false
    }),
    methods: {
      changeSelect() {
        this.$nextTick(function () {
          let [$span, tags, Len] = [this.$refs.select.$refs.tags.children[0].childNodes, [], 0];
          for (let i = 0, len = $span.length; i < len; i++) {
            if ($span[i].className.indexOf('leave') > -1) {
              tags.slice(i, 1);
            } else {
              tags.push($span[i]);
            }
          }
          for (let i = 0, len = tags.length; i < len; i++) {
            Len += tags[i].offsetWidth;
          }

          this.isMore = Len > 144 ? true : false;
        });
      }
    },
    components: {      
      ElSelect: Select,
      ElOption: Option,
    }
  }
</script>