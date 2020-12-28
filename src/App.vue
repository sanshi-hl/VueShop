<template>
  <router-view></router-view>
</template>

<script>
import router from './router';

export default {
  name: 'App',
  router,
  components: {
  },
};
</script>

<style>
html,body{
  background-color: #20c0ff;
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 1000px;
  max-width: 1530px;
  margin: 0 auto;

}
a:link{
  color: #409EFF;
}
a:visited{
  color: white;
}
a:hover{
  color: white;
}
a:active{
  color: black;
}
/* 服务于productDetail */
.tag > .el-radio-button__inner{
  border-radius: 0 !important;
  border: 1px solid #DCDFE6;
}
</style>
