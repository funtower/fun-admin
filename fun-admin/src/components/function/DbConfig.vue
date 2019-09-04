<template>
  <div>
    <el-row>
      <el-col :span="18" :push="4">
        <search-form :formConfig="formConfig" :value="form">
          <!-- 具名插槽使用示例 -->
          <!-- <input type="text" slot="formItem" value="sexlady"> -->
        <template slot='formItem'><p>sexlady</p></template>
        </search-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formConfig: {
        labelWidth: "100px",
        formItemList: [
          {
            type: "select",
            prop: "driver",
            label: "数据库驱动名",
            placeholder: "    --请选择数据库驱动--",
            isMultiple: true,
            isMore: true,
            optList: [
              { lable: "Oracle", value: "oracle.jdbc.driver.OracleDriver" },
              {
                lable: "SqlServer",
                value: "com.microsoft.jdbc.sqlserver.SQLServerDriver"
              },
              { lable: "MySQL", value: "com.mysql.jdbc.Driver" }
            ]
          },
          {
            type: "input",
            prop: "url",
            label: "连接地址",
            placeholder: "如：127.0.0.1:1521"
          },
          {
            type: "input",
            prop: "username",
            label: "用户名",
            placeholder: "请输入用户名"
          },
          {
            type: "input",
            prop: "password",
            label: "口令",
            ispassword: true,
            placeholder: "请输入密码"
          }
        ],
        operate: [
          {
            icon: "el-icon-check",
            type: "primary",
            name: "下一步",
            handleClick: this.next
          }
        ]
      },
      form: {
        username: "sysdba"
      }
    };
  },
  methods: {
    next() {
      // this.form可以直接拿到form表单里的键值对
      console.log("表单内容", this.form);
      this.$router.push({name: "TableSelect"});
      this.$axios
        .post("/genarateDomain.do", this.form)
        .then(console.log)
        .catch(console.log);
    }
  }
};
</script>

<style lang="stylus">
.demo-form-inline {
  // height: 497px;
}

.el-form-item__label {
  color: #e5e6e8;
}

.el-date-editor.el-input, .el-date-editor.el-input__inner {
  width: 93.51%;
}
</style>
