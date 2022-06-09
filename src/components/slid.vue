<template>
  <div id="slid">
    <el-carousel height="200px">
      <el-carousel-item v-for="item in pics" :key="item.url">
        <img :src="item.url"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>


<script>
export default {
  name:"slid",
  data() {
    return {
      pics: [
        { url: require("../assets/pic1.png") },
        { url: require("../assets/pic2.png") },
        { url: require("../assets/pic3.png") },
        { url: require("../assets/pic4.png") }
      ]
    };
  }
}
</script>

<style>
#slid{
  width: 300px;
  margin: 0 auto;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>