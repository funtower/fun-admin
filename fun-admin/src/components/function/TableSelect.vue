<template>
  <div>
    <el-row>
      <el-col :span="18" :push="4">
        <search-form :formConfig="formConfig" :value="form">
          <!-- 具名插槽使用示例 -->
          <!-- <input type="text" slot="formItem" value="sexlady"> -->
        </search-form>
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
      formConfig: {
        labelWidth: "100px",
        formItemList: [
          {
            type: "input",
            prop: "tableEnName",
            label: "数据表英文名",
            placeholder: "请输入表英文名"
          },
          {
            type: "input",
            prop: "tableCnName",
            label: "数据表中文名",
            placeholder: "请输入表中文名"
          },
          {
            type: "input",
            prop: "column",
            label: "字段名",
            placeholder: "请输入字段名"
          },
          {
            type: "input",
            prop: "tables",
            label: "表名（多选）",
            placeholder: "如：crd_app_info,loan_app_info"
          },
        ],
        operate: [
          {
            icon: "el-icon-search",
            type: "primary",
            name: "查询",
            handleClick: this.doQuery
          }
        ]
      },
      form: {
        
      }
    };
  },
  methods: {
      doQuery() {
          console.log('doQuery');
      }
  }
};
</script>

<style scoped lang="stylus"></style>
