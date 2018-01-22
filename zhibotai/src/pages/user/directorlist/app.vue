<template>
  <div id="app" class="wrap">
    <div class="title clearfix">
      <h4 class="fl">直播列表</h4>
      <el-form :inline="true" class="demo-form-inline fr" ref="searchName">
        <el-form-item>
          <el-input v-model="searchName" placeholder="直播名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table
      :data="tableData" :stripe="true"
      style="width: 100%"
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
      <el-table-column prop="number" label="序号" sortable width="120"></el-table-column>
      <el-table-column prop="account" label="账号" width="180"></el-table-column>
      <el-table-column prop="livename" label="直播名称" width="180"></el-table-column>
      <el-table-column prop="creattime" label="创建时间" sortable width="180"></el-table-column>
      <el-table-column prop="livetime" label="直播时间" sortable width="180"></el-table-column>
      <el-table-column prop="livestate" label="直播状态"></el-table-column>
      <el-table-column prop="operation" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import 'assets/css/css.css'
export default {
  data() {
    return {
      searchName:'',
      tableData: [{
          number: '01',
          account: '王小虎1',
          livename: '喜来登年会庆典1',
          creattime:'2018.01.01',
          livetime:'2018.01.01',
          livestate:'是',
          operation:'进入'
        },{
          number: '02',
          account: '王小虎2',
          livename: '喜来登年会庆典2',
          creattime:'2018.01.02',
          livetime:'2018.01.02',
          livestate:'是',
          operation:'进入'
        },{
          number: '03',
          account: '王小虎3',
          livename: '喜来登年会庆典',
          creattime:'2018.01.03',
          livetime:'2018.01.03',
          livestate:'是',
          operation:'进入'
        }]
    }
  },
  methods: {
    onSubmit() {
      console.log(this.$refs)
      this.$refs.searchName.validate((valid) => {
          if (!valid) {
            return
          }
          location.assign('../user/index.html')
        })
    },
    formatter(row, column) {
        return row.address;
      }
  }
}
</script>

<style scoped>


</style>





