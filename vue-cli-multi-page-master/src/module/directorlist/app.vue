<template>
  <div class="wrap">
    <div class="title">
      <h4>直播列表</h4>
      <div class="searchbar">
          <input type="text">
          <a href=""><i class="el-icon-search"></i></a>
      </div>
    </div>
  </div>
</template>

<script>

import Lib from 'assets/Lib.js'
import Form from 'element-ui'
import Table from 'element-ui'
Lib.Vue.use(Lib.R);
Lib.Vue.use(Form);
Lib.Vue.use(Table);
export default {
  data() {
    return {

    }
  },
  components: {

  },
  ready(){
  	this.getData();
    alert(Form)
  },
  methods: {
    getData (){
      var path = Lib.C.Mpath+'home?from=mobile';
      this.$http.jsonp(path).then(function(response){

        },function(){
          console.log('请求出错');
        })  
    }
  }
}
</script>

<style scoped>


</style>





