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
  data() {
    return {
      value2: '',
      lablePosit: "left",
      active: 0,
      db: {
        driver: "",
        url: "",
        username: "",
        password: ""
      },
      formConfig: {
        labelWidth: "100px",
        formItemList: [
          {
            type: "select",
            prop: "driver",
            label: "数据库驱动名",
            placeholder: "oracle.jdbc.driver.OracleDriver",
            optList: [
              {lable: 'Oracle', value: 'oracle.jdbc.driver.OracleDriver'},
              {lable: 'SqlServer', value: 'com.microsoft.jdbc.sqlserver.SQLServerDriver'},
              {lable: 'MySQL', value: 'com.mysql.jdbc.Driver'}
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
          },
        ],
        operate: [
          {
            icon: "el-icon-search",
            type: "primary",
            name: "下一步",
            handleClick: this.search
          }
        ]
      },
      form: {
        username: 'rircp'
      }
    };
  },
  methods: {
    search() {
      console.log(this.form);
    },
    doGenerate() {
      console.log("submit!");
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    },
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
  // 为了解决日期选择器宽度与其他form-item元素不一致，将其宽度修改
    width: 93.51%;
  }
</style>
