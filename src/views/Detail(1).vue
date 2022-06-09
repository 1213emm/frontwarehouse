<template>
  <div id="detail">
    <el-main id="main">
        <div id="top">
          <span style="float:left">
            <el-button type="danger" icon="el-icon-back" @click="returnSearch">返回</el-button>
          </span>
          <span style="float:left;font-weight:bold" id="author">此为标题</span>
        </div>
        {{ content }}
<!--        post类是一层楼的整体-->
        <div class="post">
          <div class="content">
            <div class="image">
              <img src="../assets/安全.png" height="64px">
              <div style="margin-top:5px">姓名A</div>
              <div style="color: red;margin-top: 5px;font-weight: bold">LV5</div>
              <div v-if="this.$store.state.level==100" style="margin-top: 5px">
                禁言
              </div>
            </div>
            <div class="text">
              123
            </div>
          </div>
          <div id="actions">
            <span style="float: left;margin-left: 130px;margin-top: 10px">1楼 2022年6月8日17：07</span>
            <el-button class="act" type="danger" icon="el-icon-delete" circle v-if="this.$store.state.level==100"></el-button>
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
            <div v-if="this.$store.state.level==100" style="margin-top: 5px">
              禁言
            </div>
            <div class="clear"></div>
          </div>
          <div class="text">
            惚或或或或或或或或或1313131132惚惚或或或或或或或或或1313131132惚惚或或或或或或或或或1313131132惚惚或或或或或或或或或1313131132惚惚或或或或或或或或或1313131132惚惚或或或或或或或或或1313131132惚惚或或或或或或或或或1313131132
          </div>
        </div>
        <div id="actions">
          <span style="float: left;margin-left: 130px;margin-top: 10px">2楼 2022年6月8日18：07</span>
          <el-button class="act" type="danger" icon="el-icon-delete" circle v-if="this.$store.state.level==100"></el-button>
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

<style scoped>
.clear{ clear:both}
#detail {
  font-family: 'Noto Serif SC', serif;
  margin-top: 0px;
  background-color: rgb(246,246,246);
  width: 100%;
  height: 100%;
  padding: 20px;
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
.content {
  box-shadow: darkgrey 1px 1px 1px 1px ;
  min-height: 120px;
  margin: 0 auto;
  padding: 10px;
}
.image{
  height: 10%;
  width: 120px;
  float: left;
  font-size: 18px;
  text-align: center;
  border: 1px solid rgba(145,145,145,50%);
}
.text{
  text-align: left;
  margin-top: 10px;
  position: relative;
  left: 10px;
  line-height: 25px;
  overflow: hidden;
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
export default{
  data() {
    return {
      //富文本内容
      content: "",
      editorOption: {}
    };
  },
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
