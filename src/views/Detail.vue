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
          <el-button class="act" icon="el-icon-warning" type="danger" @click="report" round>举报</el-button><!--举报-->
          <el-button class="act" icon="el-icon-chat-line-round" type="info" @click="comment" round>添加评论</el-button>
          <!--根据是否已收藏返回不同图标-->
          <el-button class="act" icon="el-icon-star-on" type="warning" @click="unfavor" round v-if="isFavor">取消收藏</el-button>
          <el-button class="act" icon="el-icon-star-off" type="warning" @click="favor" round v-else>加入收藏</el-button>
          <!--根据是否已点赞返回不同图标-->
          <el-button class="act" icon="el-icon-success" type="primary" @click="unlike" round v-if="isLike">取消点赞</el-button>
          <el-button class="act" icon="el-icon-circle-check" type="primary" @click="like" round v-else>点赞</el-button>
        </div>
        <div id="comments">
          <div class="floor" v-for="item in commentsList" :key="item.floor">
            <div class="speaker">
              <span style="float:left;margin-top:10px">F{{item.floor}}:</span>
              <span style="float:left;margin-top:10px">{{item.speaker}}</span>
              <!--根据是否已点赞返回不同图标-->
              <el-button class="act1" icon="el-icon-success" type="primary" circle @click="unlike1(item.floor)" v-if="item.isLike1"></el-button>
              <el-button class="act1" icon="el-icon-circle-check" type="primary" circle @click="like1(item.floor)" v-else></el-button>
              <el-button class="act1" icon="el-icon-warning" type="danger" circle @click="report1(item.floor)"></el-button>
            </div>
            <div class="say"><el-card>{{item.text}}</el-card></div>
          </div>
        </div>
    </el-main>
  </el-container>
</template>

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
  data(){
    return{
      isFavor:false,
      isLike:false,
      commentsList:[{
        floor:2,
        speaker:"刘备",
        text:"你好",
        isLike1:false,//评论是否已经点赞
      },
      {
        floor:3,
        speaker:"曹操",
        text:"你好啊",
        isLike1:false,
      },
      ]
    }
  },
  methods:{
    personal: function(){
      this.$router.push('/');
    },
    returnSearch: function(){
      this.$router.push('/search');
    },
    report: function(){
      //交互
    },//举报帖子
    favor: function(){
      this.isFavor=true;
      //交互
    },//收藏
    unfavor: function(){
      this.isFavor=false;
      //交互
    },//取消收藏
    like: function(){
      this.isLike=true;
      //交互
    },//点赞帖子
    unlike: function(){
      this.isLike=false;
      //交互
    },//取消点赞帖子
    like1(val){
      this.commentsList[val-2].isLike1=true;
      //交互
    },//点赞评论，val为楼层编号，2楼即为commentsList[0]，所以减2，然后修改该评论的点赞状态，按钮样式随之改变
    unlike1(val){
      this.commentsList[val-2].isLike1=false;
      //交互
    },//取消点赞评论
    report1(val){
      //交互
    },//举报评论，val为楼层编号
  }
}
</script>
