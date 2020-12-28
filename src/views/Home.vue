<template>
  <el-container>
    <el-header style="height: 100%;">
      <Navigation></Navigation>
    </el-header>
    <el-main style="padding: 0;">
      <el-row>
        <el-col :span="16" :offset="4">
          <el-container>
            <el-aside width="100px">
              <el-menu>
                  <li class="el-menu-item"
                  @mouseover="hover(i)" @mouseout="unhover()"
                  v-for="(item, i) in category" :key="i">
                    {{item}}
                  </li>
              </el-menu>
            </el-aside>
            <el-container style="display: block;">
              <div v-show="currentIndex == i" class="hover-view"
              @mouseover="hover(i)" @mouseout="unhover()"
              v-for="(item, i) in category" :key="i">{{item}}</div>
              <el-col v-show="currentIndex == -1" :span="24" ref="slide">
                <el-carousel height="336px" type="card" indicator-position="none">
                  <el-carousel-item v-for="(item, i) in imgs" :key="i">
                    <img :src="item" />
                  </el-carousel-item>
                </el-carousel>
              </el-col>
            </el-container>
          </el-container>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="promotion">
            <span class="promotionFont">优选精品</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="block" v-for="(item, i) in promotionImgs" :key="i">
            <el-image @click="toDetail(item.id)"
              style="width: 20%; height: 170px;display:block;float:left"
              :src="item.img"
              fit="fill"></el-image>
          </div>
        </el-col>
      </el-row>
      <el-row class="recommend">
        <el-col :span="3" :offset="4">
          <div class="first">
            <span class="firstFont">猜你喜欢</span>
          </div>
        </el-col>
        <el-col :span="13" style="padding-left:15px">
          <div class="gallery">
            <div>
              <div :class="['gallery-sub',{'img-flip':i%2==1}]"
              v-for="(item,i) in gallery" :key="i"  @click="toDetail(item.id)">
                <span class="gallery-font">{{item.title}}</span>
                <img style="width:10rem;height:190px"
                  :src="item.url" />
                <span class="gallery-font">{{item.title}}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
      <Footer></Footer>
  </el-container>
</template>
<script>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
import Service from '../axios/http';
import domain from '../axios/api';

export default {
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {
      category: [],
      imgs: [],
      promotionImgs: [],
      gallery: [],
      currentIndex: -1,
    };
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/product/${id}`);
    },
    hover(i) {
      this.currentIndex = i;
    },
    unhover() {
      this.currentIndex = -1;
    },
  },
  created() {
    Service(domain.categorys).then((res) => {
      this.category = res.data.data.slice(5);
    });
    Service(domain.slidImgs).then((res) => {
      this.imgs = res.data.data;
    });
    Service(domain.promotionImgs).then((res) => {
      this.promotionImgs = res.data.data;
    });
    Service(domain.gallerys).then((res) => {
      this.gallery = res.data.data;
    });
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: black;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color:white;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
img{
  width: 100%;
  height: 100%;
}
.promotion{
  max-width: 100%;
  height: 3%;
  background: linear-gradient(to bottom, green, #40E0D0);
  margin: 20px 0 0;
  padding: 3px 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.promotionFont{
  color: black;
  font-size: 24px;
}
.first{
  width: 100%;
  height: 220px;
  float:left;
  text-align: center;
  background-image: url(http://gma.alicdn.com/bao/uploaded/i2/368880029/O1CN01OWObhX1C5K87ow5LX_!!0-saturn_solar.jpg_230x230.jpg);
}
.gallery-sub{
  float: right;
  text-align:center;
  font-size:18px;
}
.gallery{
  width:100%;
  height:220px;
  background-color: white;
  overflow:hidden;
  display:inline-flex;
}
.gallery-font{
  position: relative;
  left: 10px;
  padding: 3px 0;
  display:block;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hover-view{
  width:100%;
  height:336px;
  background-color: #fff;
}
.img-flip{
  position: relative;
  bottom: 38px;
}
.firstFont{
  margin-top: 1rem;
  display: block;
  font-size: 28px;
  color: black;
}
.recommend{
  margin: 20px 0;
}
</style>
