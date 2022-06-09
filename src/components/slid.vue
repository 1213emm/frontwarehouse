<template>
  <div id="slid">
    <el-carousel height="290px">
      <el-carousel-item v-for="item in pics" :key="item.url">
        <img :src="item.url" width="580px" height="290px"/>
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
        { url: require("../assets/pic1.jpeg") },
        { url: require("../assets/pic2.jpeg") },
        { url: require("../assets/pic3.jpeg") },
        { url: require("../assets/pic4.jpeg") }
      ]
    };
  }
}
</script>

<style>
#slid{
  width: 580px;
  box-shadow: darkgrey 1px 1px 1px 1px;
  float: left;
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