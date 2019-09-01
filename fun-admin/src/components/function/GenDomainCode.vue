<template>
  <div>
    <el-row>
      <el-col :span="18" :push="5">
        <el-form :inline="true" :model="db" class="demo-form-inline" :label-position="lablePosit" label-width="80px">
          <el-row>
            <el-col :span="10">
              <el-form-item label="drivername">
                <el-select v-model="db.driver" placeholder="数据库驱动名" clearable>
                  <el-option
                    label="oracle.jdbc.driver.OracleDriver"
                    value="oracle.jdbc.driver.OracleDriver"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="url">
                <el-input v-model="db.url" placeholder="如：127.0.0.1:1521" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" >
              <el-form-item label="username">
                <el-input v-model="db.username" placeholder="用户名" clearable></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="password">
                <el-input v-model="db.password" placeholder="密码" :show-password="true" clearable></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :pull="5">
              <el-form-item>
                <el-button type="primary" @click="doGenerate">生成</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <search-form
        :formConfig="formConfig"
        :value="form"
      >
      <!-- 具名插槽使用示例 -->
      <!-- <input type="text" slot="formItem" value="sexlady"> -->
      </search-form>

    <!-- <el-row>
      <el-col :span="15" :push="5">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      lablePosit: 'left',
      active: 0,
      db: {
        driver: "",
        url: "",
        username: "",
        password: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],

      formConfig: {
        labelWidth: '100px',
        formItemList: [
          {
            type: "month",
            dateFormate: 'yyyy-MM',
            prop: "month",
            label: "统计月",
            placeholder: "统计月"
          },
          {
            type: "select",
            prop: "org",
            label: "运营商",
            placeholder: "运营商",
            optList: []
          },
          {
            type: "date",
            prop: "startTime",
            dateFormate: 'yyyy-MM-dd',
            label: "承诺启用时间",
            placeholder: "承诺启用时间"
          },
          {
            type: "date",
            prop: "endTime",
            dateFormate: 'yyyy-MM-dd',
            label: "承诺停用时间",
            placeholder: "承诺停用时间"
          },
          {
            type: "select",
            prop: "direction",
            label: "话务方向",
            placeholder: "话务方向",
            optList: []
          }
        ],
        operate: [
          {
            icon: "el-icon-search",
            type: "primary",
            name: '查询',
            handleClick: this.search
          }
        ]
      },
      form: {
      },

    };
  },
  methods: {
    search() {
      console.log(this.form)
    },
    doGenerate() {
      console.log("submit!");
    },
    next() {
      if (this.active++ > 2) this.active = 0;
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
</style>
