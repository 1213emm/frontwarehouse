<template>
  <div id="detail">
    <el-main id="main">
        <div id="top">
          <span style="float:left">
            <el-button type="danger" icon="el-icon-back" @click="returnSearch">返回</el-button>
          </span>
          <span style="float:left;font-weight:bold" id="author">此为标题</span>
        </div>
        <div class="post">
          <div class="content">
            <div class="image">
              <img src="../assets/安全.png" height="64px">
              <div style="margin-top:5px">姓名A</div>
              <div style="color: red;margin-top: 5px;font-weight: bold">LV5</div>
            </div>
            <div class="text">
              你好啊红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或
            </div>
          </div>
          <div id="actions">
            <span style="float: left;margin-left: 130px;margin-top: 10px">1楼 2022年6月8日17：07</span>
            <el-button class="act" icon="el-icon-warning" type="danger" circle></el-button>
            <el-button class="act" icon="el-icon-chat-line-round" type="info" circle></el-button>
            <el-button class="act" icon="el-icon-star-off" type="warning" circle></el-button>
            <el-button class="act" icon="el-icon-circle-check" type="primary" circle></el-button>
          </div>
        </div>
      <div class="post">
        <div class="content">
          <div class="image">
            <img src="../assets/安全.png" height="64px">
            <div style="margin-top:5px">姓名A</div>
            <div style="color: red;margin-top: 5px;font-weight: bold">LV5</div>
          </div>
          <div class="text">
            惚惚或或或或或或或或或1313131132
          </div>
        </div>
        <div id="actions">
          <span style="float: left;margin-left: 130px;margin-top: 10px">2楼 2022年6月8日18：07</span>
          <el-button class="act" icon="el-icon-warning" type="danger" circle></el-button>
          <el-button class="act" icon="el-icon-circle-check" type="primary" circle></el-button>
        </div>
      </div>
        <div id="textEdit">
          <div id="title">
          发表回复
          </div>
          <div id="area">
            <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"
                          style="height: 300px; margin: 10px"></quill-editor>
          </div>
          <div id="btn">
            <el-button type="primary" plain style="margin-bottom: 5px">发表</el-button>
          </div>
        </div>
    </el-main>
  </div>
</template>

<!--
<style>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
-->

<style scoped>
#detail {
  font-family: 'Noto Serif SC', serif;
  margin-top: 10px;
  background-color: rgb(246,246,246);
  width: 100%;
  height: 100%;
}
#head {
  background-color: #d4e7d9;
  color: #333;
  text-align: center;
  line-height: 60px;
}
#main {
  background-color: white;
  color: #333;
  text-align: center;
  box-shadow: darkgrey 1px 1px 1px 1px ;
  width: 800px;
  margin: 0 auto;
}

#top {
  height:60px;
  font-size: 18px;
}
#author {
  font-size: 120%;
  margin-left: 20px;
  margin-top: 10px;
}
.post{
  width: 700px;
  margin: 0 auto;
  margin-top: 10px;
}
.image{
  height: 100%;
  width: 120px;
  font-size: 15px;
  float: left;
  font-size: 18px;
}
.text{
  text-align: left;
  margin-top: 20px;
}
/*#postDate {
  font-size: 120%;
  margin-left: 20px;
  margin-top: 10px;
}*/

.content {
  box-shadow: darkgrey 1px 1px 1px 1px ;
  width: 680px;
  min-height: 120px;
  margin: 0 auto;
  padding: 10px;
}
#title {
  font-size: 200%;
}

#actions {
  padding-top: 10px;
  height: 48px;
  font-size: 18px;
}
.act {
  float: right;
  font-size :120%;
  margin-left: 20px;
}

#comments {

}
.floor {
  margin-top: 10px;
}
.speaker {
  font-size: 110%;
  height:40px;
  padding-right:10px;
  padding-top:10px;
}
.say {
  padding-top:10px;
}
.act1 {
  float: left;
  margin-left: 10px;
}
#textEdit{
  margin: 0 auto;
  width: 700px;
  background-color: white;
  margin-top: 10px;
  box-shadow: darkgrey 1px 1px 1px 1px ;
}
#textEdit #title{
  font: 20px bold;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
}
#textEdit #area{
  height: 370px;
}
#textEdit #btn{
  text-align: center;
}
</style>

<script>
  var url="../assets/安全.png";
export default{
  methods:{
    personal: function(){
      this.$router.push('/');
    },
    returnSearch: function(){
      this.$router.push('/search');
    },
  }
}
</script>
