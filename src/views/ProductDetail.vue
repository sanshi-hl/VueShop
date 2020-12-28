<template>
  <div>
    <navigation></navigation>
    <el-row class="interval">
      <!-- 放大镜效果---开始 -->
      <el-col :span="7" :offset="4">
        <div ref="box" @mouseover="handOver" @mousemove="handMove" @mouseout="handOut">
          <img class="initial" :alt="product.name"
          :style="{
            'width': `${initialSize}px`,
            'height': `${initialSize}px`}"
          :src="product.imgUrl" />
          <div v-show="bigger" class="box"
          :style="{
            'top':`${boxTop}px`,
            'margin-left':`${boxLeft}px`,
            'width':`${initialSize/times}px`,
            'height':`${initialSize/times}px`}"></div>
        </div>
      </el-col>
      <div v-show="bigger" class="enlarge"
      :style="{
        'width':`${showLargeSize}px`,
        'height':`${showLargeSize}px`,
        'margin-left':`${initialSize+20}px`
      }">
        <img class="largeImg"
        :style="{
          'right':`${boxLeft*times*showLargeSize/initialSize}px`,
          'bottom':`${boxTop*times*showLargeSize/initialSize}px`,
          'width': `${showLargeSize*times}px`,
          'height': `${showLargeSize*times}px`,
          'z-index': '3',
        }"
         :src="product.imgUrl"/>
      </div>
      <!-- 放大镜效果---结束 -->
      <el-col :span="9" class="enlarge"
      :style="{'margin-left': `${initialSize+40}px`}">
        <el-row><h2>{{product.name}}</h2></el-row>
        <div style="background-color: white;padding: 8px">
          <el-row style="display:inline">
            <span class="title">优惠：</span>
            <span style="color:red;margin-right:8px;"
            v-for="(item, i) in product.preferential" :key="i"
            >{{item}}</span>
          </el-row>
          <el-row>
            <span class="title">会员价：</span>
            <span style="color: red;font-size:32px">￥{{product.vipPrice}}元</span>
          </el-row>
          <el-row>
            <span class="title">原价：</span>
            <span>￥{{product.price}}元</span>
          </el-row>
        </div>
        <el-row>
          <span class="title" style="margin-top: 10px">配送至：</span>
          <location :address="address"
          style="display: inline"></location>
        </el-row>
        <hr />
        <el-row style="margin-top: 10px"
        v-for="(item, i) in product.property" :key="i">
          <span class="title">{{item.title}}:</span>
          <el-radio-group size="small" v-model="chooseProperty[i]" style="display:inline">
            <el-radio-button class="tag"
              v-for="(tag, i) in item.tags" :key="i"
              :label="tag"></el-radio-button>
          </el-radio-group>
        </el-row>
        <el-row style="text-align: center;padding-top: 20px">
          <el-button type="primary" @click="buyNow">立即购买</el-button>
          <el-button type="danger" @click="addToCart">加入购物车</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4" style="margin-top:30px">
        <el-menu :default-active="currentIndex"
         class="el-menu-demo" mode="horizontal" @select="handleSelect"
         background-color="#fff" text-color="black" active-text-color="#c0392b">
          <el-menu-item index="1">商品介绍</el-menu-item>
          <el-menu-item index="2">规格与包装</el-menu-item>
          <el-menu-item index="3">售后保障</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <div v-if="currentIndex === '1'">
          <template v-for="item in product.introduction.imgs">
            <el-image :key="item" style="width:100%"
            :src="item" fit="fill">{{item}}</el-image>
          </template>
        </div>
        <div v-if="currentIndex === '2'">
          <el-row>
            <el-col :span="24" style="margin-bottom: 100px">
              <div style="margin: 10px;color:#999"
              v-for="item in product.introduction.parameters" :key="item">
                {{item}}
              </div>
            </el-col>
          </el-row>
        </div>
        <div v-if="currentIndex === '3'" style="margin-left: 20%;margin-top:-6vw;color:white">
          <span style="font-size: 30vw">暂时不提供售后服务</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import swal from 'sweetalert';
import Service from '../axios/http';
import domain from '../axios/api';
import navigation from '../components/Navigation.vue';
import Location from '../components/Location.vue';

export default {
  components: {
    navigation,
    Location,
  },
  props: ['id'],
  data() {
    return {
      boxLeft: 0,
      boxTop: 0,
      bigger: false,
      initialSize: 400,
      showLargeSize: 450,
      times: 2,
      currentIndex: '0',
      chooseProperty: [],
      product: {},
      address: [],
    };
  },
  methods: {
    handOver() {
      this.bigger = true;
      const img = this.$refs.box.getBoundingClientRect();
      this.imgx = img.x;
      this.imgy = img.y;
    },
    handMove(e) {
      const offsetx = e.clientX - this.imgx - this.initialSize / this.times / 2;
      const offsety = e.clientY - this.imgy - this.initialSize / this.times / 2;
      let x = 0;
      let y = 0;
      if (offsetx >= 0 && offsetx <= this.initialSize / 2) {
        x = offsetx;
      } else if (offsetx < 0) {
        x = 0;
      } else if (offsetx > this.initialSize / this.times / 2) {
        x = this.initialSize / 2;
      }
      this.boxLeft = x;
      if (offsety >= 0 && offsety <= this.initialSize / 2) {
        y = offsety;
      } else if (offsety < 0) {
        y = 0;
      } else if (offsety > this.initialSize / this.times / 2) {
        y = this.initialSize / 2;
      }
      this.boxTop = y;
    },
    handOut() {
      this.bigger = false;
    },
    handleSelect(index) {
      this.currentIndex = index;
    },
    buyNow() {

    },
    addToCart() {
      if (this.chooseProperty.length !== this.product.property.length) {
        swal('提示', '请选择完整参数！', 'error');
        return;
      } else {
        for (let i = 0; i < this.chooseProperty.length; i += 1) {
          if (this.chooseProperty[i] == null) {
            swal('提示', '请选择完整参数！', 'error');
            return;
          }
        }
      }
      let i;
      let cart = [];
      const item = {
        id: this.id,
        name: this.product.name,
        img: this.product.imgUrl,
        property: this.chooseProperty,
        count: 1,
      };
      item.price = localStorage.getItem('user') === 'admin' ? this.product.vipPrice : this.product.price;
      const str = localStorage.getItem('cart');
      if (str !== null && str !== '') {
        cart = JSON.parse(str);
      }
      for (i = 0; i < cart.length; i += 1) {
        if (this.productSame(cart[i], item)) {
          cart[i].count += 1;
          break;
        }
      }
      if (i >= cart.length) {
        cart.push(item);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      swal('提示', '添加购物车成功！', 'success');
    },
    productSame(oldItem, newItem) {
      if (oldItem.id !== newItem.id) {
        return false;
      }
      for (let i = 0; i < oldItem.property.length; i += 1) {
        if (oldItem.property[i] !== newItem.property[i]) {
          return false;
        }
      }
      return true;
    },
  },
  created() {
    const that = this;
    Service({
      url: domain.product,
      data: {
        id: this.id,
      },
    }).then((res) => {
      if (res.data.status === '200') {
        this.product = res.data.data;
        this.currentIndex = '1';
      } else {
        swal('提示', '该商品已下架', 'error').then(() => {
          that.$router.go(-1);
        });
      }
    });
  },
};
</script>
<style scoped>
.enlarge{
  overflow:hidden;
  position:absolute;
  left:16.66667%;
}
.box{
  background-color: lightblue;
  position: absolute;
  opacity: 0.5;
}
.largeImg{
  position: relative;
}
.initial{
  border: 1px solid #ccc;
  /* 抵消描边线的1px */
  margin-left: -1px;
  margin-top: -1px;
  float:left;
}

.title{
  color:white;
  width:70px;
  display:inline-block;
}
.tag{
  margin-left: 5px;
  margin-top: 5px;
}
.interval{
  overflow: visible !important;
  margin-bottom: 40px;
  z-index: 2;
}
.anim-cart {
    animation-duration: 500ms;
    animation-name: addInCart;
    animation-timing-function: ease-in-out;
  }
@keyframes addInCart {
    0% {
      transform: scale(1);
    }
    100% {
      transform: translateX(760px) translateY(-270px) scale(0.01);
    }
  }
</style>
