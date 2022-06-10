<template>
  <div id="contaner">
    <calendar></calendar>
    <updown></updown>
    <div id="detail">
      <el-main id="main">
        <div id="top">
          <span style="float:left">
            <el-button type="danger" icon="el-icon-back" @click="returnSearch">返回</el-button>
          </span>
          <span style="float:left" id="author">楼主：{{post.user}}</span>
          <span style="float:left" id="postDate">{{post.post_date}}</span>
<!--          <span style="float:left" id="postDate">{{post.post_date}}</span>-->
        </div>
        <div id="post">
          <el-card>
            <div slot="header" id="postHead">
              <h1 id="title">{{post.title}}</h1>
            </div>
            <div>{{comments[0].content}}</div>
          </el-card>
        </div>
        <div id="actions">
          <el-button class="act" icon="el-icon-warning" type="danger" @click="report" round>举报</el-button><!--举报-->
          <el-button class="act" icon="el-icon-chat-line-round" type="info" @click="comment" round>添加评论</el-button>
          <!--根据是否已收藏返回不同图标-->
          <el-button class="act" icon="el-icon-star-on" type="warning" @click="unfavor" round v-if="post.favorite">取消收藏</el-button>
          <el-button class="act" icon="el-icon-star-off" type="warning" @click="favor" round v-else>加入收藏</el-button>
          <!--根据是否已点赞返回不同图标-->
          <el-button class="act" icon="el-icon-success" type="primary" @click="unlike" round v-if="post.liked">取消点赞</el-button>
          <el-button class="act" icon="el-icon-circle-check" type="primary" @click="like" round v-else>点赞</el-button>
        </div>
        <div id="addComment" v-if="addComment">
          <el-input placeholder="你的想法" v-model="input" @keyup.enter.native="finish" clearable>
            <el-button type="primary" icon="el-icon-s-promotion" slot="append" @click="finish">发送</el-button>
          </el-input>
        </div>
        <div id="comments">
          <div class="floor" v-for="item in comments" :key="item.floor">
            <div class="speaker" v-if="item.floor!=1">
              <span style="float:left;margin-top:10px">{{item.floor}}楼:</span>
              <span style="float:left;margin-top:10px">{{item.user.username}}   评论时间:</span>
              <span style="float:left;margin-top:10px">{{item.comment_time}}</span>
            </div>
            <div class="say" v-if="item.floor!=1"><el-card>{{item.content}}</el-card></div>
          </div>
        </div>
      </el-main>
    </div>
  </div>
</template>

<style scoped>

#contaner{
  position: absolute;
  width: 100%;
  min-height: 800px;
  background-color: rgb(246,246,246);
}
#detail {
  font-family: 'Noto Serif SC', serif;
  margin-top: 20px;
  margin-left: 200px;
  width: 900px;
  background-color: white;
  box-shadow: darkgrey 1px 1px 1px 1px;
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
#addComment {
  margin-top:30px
}
</style>




<script>
import qs from "qs";
import Calendar from "@/components/calendar";
import Updown from "@/components/updown";
export default{
  components: {Updown, Calendar},
  data(){
    return{
      input:"",
      isFavor:false,
      isLike:false,
      addComment:false,
      post:
          {
            "id": 3,
            "user": "朱姜逸扬",
            "type": "课程推荐",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title":"关注嘉然今天吃什么",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 2,
            "favorite": true,
            "liked": true
          },
      comments:[{
        id:1,
        floor:1,
        comment_time:"2022-06-08T03:31:13.630Z",
        content:"我超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP超OP",
        liked: true,
        user: {
          "id": 20373615,
          "username": "朱姜逸扬",
          "description": "",
          "grade": 2,
          "major": "软件工程",
          "sex": true,
          "headshot": "/media/user_20373615/headshot/headshot.jpg"
        }
      },
        {
          id:2,
          floor:2,
          comment_time:"2022-06-08T03:31:13.630Z",
          content:"我超OP",
          liked: true,
          user: {
            "id": 20373615,
            "username": "朱姜逸扬",
            "description": "",
            "grade": 2,
            "major": "软件工程",
            "sex": true,
            "headshot": "/media/user_20373615/headshot/headshot.jpg"
          }
        }
      ]
    }
  },
  created(){
    this.$axios({
      method: 'get',           /* 指明请求方式，可以是 get 或 post */
      url: '/api/post/comment/',
      params:{
        post_id:this.$store.state.postid
      }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
    })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.post=res.data.post;
              this.comments=res.data.comments;
              break;
            case 7001:
              this.$message.error("请求方式错误");
              break;
            case 7002:
              this.$message.error("用户未登陆");
              this.$router.back();
              break;
            case 7006:
              this.$message.error("等级不够无法查看");
              this.$router.back();
              break;
            case 7003:
              this.message.error("帖子ID不能为空");
              break;
          }
        })
        .catch(err => {
          console.log(err);         /* 若出现异常则在终端输出相关信息 */
        });
  },
  methods:{
    personal: function(){
      this.$router.push('/personal');
    },
    returnSearch: function(){
      this.$router.back();
    },
    report: function(){
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/report/',
        data: qs.stringify({
          post_id:this.$store.state.postid,
        })     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.$message.success("举报成功");
                break;
              case 15001:
                this.$message.error("用户未登陆");
                break;
              case 15002:
                this.$message.error("帖子ID不能为空");
              case 15003:
                this.$message.error("帖子不存在");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      //交互
    },//举报帖子
    favor: function(){
      this.isFavor=true;
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/favorites/',
        data: qs.stringify({
          post_id:this.$store.state.postid,
          op:0
        })     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.$message.success("收藏成功");
                break;
              case 11002:
                this.$message.error("帖子ID不能为空");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/comment/',
        params:{
          post_id:this.$store.state.postid
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.post=res.data.post;
                this.comments=res.data.comments;
                break;
              case 7001:
                this.$message.error("请求方式错误");
                break;
              case 7002:
                this.$message.error("用户未登陆");
                this.$router.back();
                break;
              case 7006:
                this.$message.error("等级不够无法查看");
                this.$router.back();
                break;
              case 7003:
                this.message.error("帖子ID不能为空");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      //交互
    },//收藏
    unfavor: function(){
      this.isFavor=false;
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/favorites/',
        data: qs.stringify({
          post_id:this.$store.state.postid,
          op:1
        })     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.$message.success("取消收藏成功");
                break;
              case 11002:
                this.$message.error("帖子ID不能为空");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/comment/',
        params:{
          post_id:this.$store.state.postid
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.post=res.data.post;
                this.comments=res.data.comments;
                break;
              case 7001:
                this.$message.error("请求方式错误");
                break;
              case 7002:
                this.$message.error("用户未登陆");
                this.$router.back();
                break;
              case 7006:
                this.$message.error("等级不够无法查看");
                this.$router.back();
                break;
              case 7003:
                this.message.error("帖子ID不能为空");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      //交互
    },//取消收藏
    like: function(){
      this.isLike=true;
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/like/',
        data: qs.stringify({
          post_id:this.$store.state.postid,
        })     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.$message.success("点赞成功");
                break;
              case 13003:
                this.$message.error("帖子ID不能为空");
                break;
              case 13002:
                this.$message.error("用户未登陆");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/comment/',
        params:{
          post_id:this.$store.state.postid
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.post=res.data.post;
                this.comments=res.data.comments;
                break;
              case 7001:
                this.$message.error("请求方式错误");
                break;
              case 7002:
                this.$message.error("用户未登陆");
                this.$router.back();
                break;
              case 7006:
                this.$message.error("等级不够无法查看");
                this.$router.back();
                break;
              case 7003:
                this.message.error("帖子ID不能为空");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      //交互
    },//点赞帖子
    unlike: function(){
      this.isLike=false;
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/like/',
        data: qs.stringify({
          post_id:this.$store.state.postid,
        })     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.$message.success("取消点赞成功");
                break;
              case 13003:
                this.$message.error("帖子ID不能为空");
                break;
              case 13002:
                this.$message.error("用户未登陆");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/comment/',
        params:{
          post_id:this.$store.state.postid
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.post=res.data.post;
                this.comments=res.data.comments;
                break;
              case 7001:
                this.$message.error("请求方式错误");
                break;
              case 7002:
                this.$message.error("用户未登陆");
                this.$router.back();
                break;
              case 7006:
                this.$message.error("等级不够无法查看");
                this.$router.back();
                break;
              case 7003:
                this.message.error("帖子ID不能为空");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      //交互
    },//取消点赞帖子
    comment: function(){
      this.addComment=true;
      //交互
    },//评论帖子
    finish: function(){
      this.addComment=false;
      this.$axios({
        method: "post" /* 指明请求方式，可以是 get 或 post */,
        url: "/api/post/comment/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
        data: qs.stringify({
          /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          post_id:this.$store.state.postid,
          content:this.input
        }),
      }).then((res) => {
        switch (res.data.errno) {
          case 0:
            this.$message.success("发布成功");
            break;
          case 7002:
            this.$message.error("用户未登陆");
            break;
          case 7003:
            this.$message.error("帖子ID不能为空");
            break;
          case 7006:
            this.$message.error("用户等级不够");
            break;
          case 7007:
            this.$message.error("您已被禁言");
            break;
        }
      });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/comment/',
        params:{
          post_id:this.$store.state.postid
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.post=res.data.post;
                this.comments=res.data.comments;
                break;
              case 12001:
                this.$message.error("请求方式错误");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);//跳转到页面底部，方便查看自己的评论
      }, 1000);
    },//发送评论
    like1(val){
      this.comments[val-1].liked=true;
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/like/',
        data: qs.stringify({
          post_id:this.comments[val-1].id,
        })     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.$message.success("点赞成功");
                break;
              case 13003:
                this.$message.error("评论ID不能为空");
                break;
              case 13002:
                this.$message.error("用户未登陆");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/comment/',
        params:{
          post_id:this.$store.state.postid
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.post=res.data.post;
                this.comments=res.data.comments;
                break;
              case 7001:
                this.$message.error("请求方式错误");
                break;
              case 7002:
                this.$message.error("用户未登陆");
                this.$router.back();
                break;
              case 7006:
                this.$message.error("等级不够无法查看");
                this.$router.back();
                break;
              case 7003:
                this.message.error("帖子ID不能为空");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      //交互
    },//点赞评论，val为楼层编号，2楼即为commentsList[0]，所以减2，然后修改该评论的点赞状态，按钮样式随之改变
    unlike1(val){
      this.comments[val-1].liked=false;
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/like/',
        data: qs.stringify({
          post_id:this.comments[val-1].id,
        })     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.$message.success("点赞成功");
                break;
              case 13003:
                this.$message.error("评论ID不能为空");
                break;
              case 13002:
                this.$message.error("用户未登陆");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/comment/',
        params:{
          post_id:this.$store.state.postid
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then((res) => {
            switch (res.data.errno) {
              case 0:
                this.post=res.data.post;
                this.comments=res.data.comments;
                break;
              case 7001:
                this.$message.error("请求方式错误");
                break;
              case 7002:
                this.$message.error("用户未登陆");
                this.$router.back();
                break;
              case 7006:
                this.$message.error("等级不够无法查看");
                this.$router.back();
                break;
              case 7003:
                this.message.error("帖子ID不能为空");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      //交互
    },//取消点赞评论
    report1(val){
      this.$message.success("举报成功");
      //交互
    },//举报评论，val为楼层编号
  }
}
</script>
