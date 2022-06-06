<template>
  <el-container id="detail">
    <el-header id="head">
      <el-row style="float: right">
        欢迎，“已登录用户”！
        <el-button type="primary" @click="personal">个人空间</el-button>
      </el-row>
    </el-header>
    <el-main id="main">
        <div id="top">
          <span style="float:left">
            <el-button type="danger" icon="el-icon-back" @click="returnSearch">返回</el-button>
          </span>
          <span style="float:left" id="author">作者：123</span>
          <span style="float:left" id="postDate">2022.01.01</span>
        </div>
        <div id="post">
          <el-card>
            <div slot="header" id="postHead">  
              <h1 id="title">标题</h1>
            </div>
            <div>内容内容内容内容内容</div>
          </el-card>
        </div>
        <div id="actions">
          <el-button class="act" icon="el-icon-warning" type="danger" circle></el-button>
          <el-button class="act" icon="el-icon-chat-line-round" type="info" circle></el-button>
          <el-button class="act" icon="el-icon-star-off" type="warning" circle></el-button>
          <el-button class="act" icon="el-icon-circle-check" type="primary" circle></el-button>
        </div>
        <div id="comments">
          <div class="floor">
            <div class="speaker">
              <span style="float:left;margin-top:10px">F2:</span>
              <span style="float:left;margin-top:10px">评论人</span>
              <el-button class="act1" icon="el-icon-circle-check" type="primary" circle></el-button>
              <el-button class="act1" icon="el-icon-warning" type="danger" circle></el-button>
            </div>
            <div class="say"><el-card>你好</el-card></div>
          </div>
          <div class="floor">
            <div class="speaker">
              <span style="float:left;margin-top:10px">F3:</span>
              <span style="float:left;margin-top:10px">评论人</span>
              <el-button class="act1" icon="el-icon-circle-check" type="primary" circle></el-button>
              <el-button class="act1" icon="el-icon-warning" type="danger" circle></el-button>
            </div>
            <div class="say"><el-card>你好啊红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或红红火火恍恍惚惚或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或</el-card></div>
          </div>
        </div>
    </el-main>
  </el-container>
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
  margin-top: 20px;
}
#head {
  background-color: #d4e7d9;
  color: #333;
  text-align: center;
  line-height: 60px;
}
#main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

#top {
  height:60px;
}
#author {
  font-size: 120%;
  margin-left: 20px;
  margin-top: 10px;
}
#postDate {
  font-size: 120%;
  margin-left: 20px;
  margin-top: 10px;
}

#post {
}
#title {
  font-size: 200%;
}

#actions {
  padding-top: 10px;
  height: 46.2px
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
</style>

<script>
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
