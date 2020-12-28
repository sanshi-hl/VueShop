<template>
  <div>
    <navigation :name="name" @update="refreshList"></navigation>
    <el-row>
      <el-col :span="16" :offset="4"
      style="background-color:white;padding: 10px;margin-bottom:10px">
        <el-row>
          <el-col :span="2" align="middle">
            <span>序号</span>
          </el-col>
          <el-col :span="4" align="middle">
            <span>商品图片</span>
          </el-col>
          <el-col :span="8" align="middle">
            <span>商品名称</span>
          </el-col>
          <el-col :span="4" align="middle">
            <span>非会员价</span>
          </el-col>
          <el-col :span="4" align="middle">
            <span>会员价格</span>
          </el-col>
          <el-col :span="2" align="middle">
            <span>操作</span>
          </el-col>
        </el-row>

        <el-row v-for="(item, index) in product" :key="index" style="margin-bottom: 5px;">
            <el-col :span="2" align="middle" style="margin-top: 70px">
              <span>{{index+1}}</span>
            </el-col>
            <el-col :span="4" align="middle">
              <el-image style="width:100%;"
              :src="item.imgUrl" fit="fill"></el-image>
            </el-col>
          <div style="margin-top: 70px">
            <el-col :span="8" align="middle">
              <span>{{item.name}}</span>
            </el-col>
            <el-col :span="4" align="middle">
              <span>{{item.price}}</span>
            </el-col>
            <el-col :span="4" align="middle">
              <span>{{item.vipPrice}}</span>
            </el-col>
            <el-col :span="2" align="middle" style="margin-top: -9px">
              <el-button type="primary" @click="toDetail(item.id)">查看</el-button>
            </el-col>
          </div>
        </el-row>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>
<script>
import Service from '../axios/http';
import Footer from '../components/Footer.vue';
import domain from '../axios/api';
import Navigation from '../components/Navigation.vue';

export default {
  props: ['name'],
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      product: {},
    };
  },
  methods: {
    refreshList() {
      Service({
        url: domain.search,
        data: {
          name: this.name,
        },
      }).then((res) => {
        if (res.data.status === '200') {
          this.product = res.data.data;
          console.log(this.product);
        }
      });
    },
    toDetail(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  created() {
    Service({
      url: domain.search,
      data: {
        name: this.name,
      },
    }).then((res) => {
      if (res.data.status === '200') {
        this.product = res.data.data;
        console.log(this.product);
      }
    });
  },
};
</script>
<style scoped>

</style>
