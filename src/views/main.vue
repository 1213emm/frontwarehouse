<template>
  <el-container id="search">
    <el-header>
      <div class="wrap">
        <el-input v-model="input1" placeholder="请输入关键词进行搜索"  @keyup.enter.native="search">
          <template slot="append"><el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button></template>
        </el-input>
      </div>
    </el-header>
    <el-main id="main">
      <div>
        <el-menu id="menu" mode="horizontal"  active-text-color="#ffd04b">
          <el-menu-item @click="toTip" index="1"><i class="el-icon-bicycle"></i>新手上路</el-menu-item>
          <el-menu-item @click="toLatest" index="2"><i class="el-icon-document-add"></i>最新发布</el-menu-item>
          <el-menu-item @click="toCourse" index="3"><i class="el-icon-magic-stick"></i>课程推荐</el-menu-item>
          <el-menu-item @click="toExer" index="4"><i class="el-icon-reading"></i>刷题</el-menu-item>
          <el-menu-item @click="toLife" index="5"><i class="el-icon-basketball"></i>校园周边</el-menu-item>
        </el-menu>
      </div>
      <div id="tip" v-if="mainIndex===1">
        <el-card>
          <div class="tipText">亲爱的游客，您好!</div>
          <div class="tipText">您可以在本页面浏览不同板块的帖子以及他人对帖子的评论。</div>
          <div class="tipText">您可以点击右上方登录按钮登录您自己的账号或注册一个新账号。</div>
          <div class="tipText">登录后，您可以对帖子进行收藏、点赞、评论等操作，也可以对帖子下方的评论进行点赞操作。对违规的帖子和评论，您可以实行一键举报，管理员会审核您的举报信息。</div>
          <div class="tipText">您可以发布自己的帖子。</div>
          <div class="tipText">您可以点击右上方您的用户名进入您的个人空间，您可以在个人空间里修改个人信息，浏览收藏夹、历史记录、已发帖子等内容。</div>
        </el-card>
      </div>
      <div id="latestTable" v-if="mainIndex===2">
        <el-table :data="LatestPosts" style="width: 100%">
          <el-table-column type="index"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id">
            <template slot-scope="scope">
              <el-link type="primary" @click="toDetail(scope.row.id)">查看详情</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="courseTable" v-if="mainIndex===3">
        <el-table :data="CoursePosts" style="width: 100%">
          <el-table-column type="index"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id">
            <template slot-scope="scope">
              <el-link type="primary" @click="toDetail(scope.row.id)">查看详情</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="exerTable" v-if="mainIndex===4">
        <el-table :data="ExerPosts" style="width: 100%">
          <el-table-column type="index"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id">
            <template slot-scope="scope">
              <el-link type="primary" @click="toDetail(scope.row.id)">查看详情</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="lifeTable" v-if="mainIndex===5">
        <el-table :data="LifePosts" style="width: 100%">
          <el-table-column type="index"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id">
            <template slot-scope="scope">
              <el-link type="primary" @click="toDetail(scope.row.id)">查看详情</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import qs from "qs";
export default {
  name: "main",
  data() {
    return {
        input1:'',
        mainIndex:1,//不同值显示不同板块
        LatestPosts: [
        {
            "id": 3,
            "user": "朱姜逸扬",
            "type": "最新发布",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title": "最新",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 2
        }],
        CoursePosts: [
        {
            "id": 3,
            "user": "朱姜逸扬",
            "type": "课程推荐",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title": "课程推荐",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 2
        }],
        ExerPosts: [
        {
            "id": 3,
            "user": "朱姜逸扬",
            "type": "刷题",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title": "刷题",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 2
        }],
        LifePosts: [
        {
            "id": 3,
            "user": "朱姜逸扬",
            "type": "校园周边",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title": "校园周边",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 2
        }]
    }
  },
  created(){
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/browse/',
        params:{   
        type:"最新"
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.LatestPosts=res.data.posts;
              break;
            case 12001:
              this.$message.error("请求方式错误");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
        this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/browse/',
        params:{   
        type:"课程推荐"
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.CoursePosts=res.data.posts;
              break;
            case 12001:
              this.$message.error("请求方式错误");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
            this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/browse/',
        params:{   
        type:"刷题"
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.ExerPosts=res.data.posts;
              break;
            case 12001:
              this.$message.error("请求方式错误");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
              this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/browse/',
        params:{   
        type:"校园周边"
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.LifePosts=res.data.posts;
              break;
            case 12001:
              this.$message.error("请求方式错误");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
  }, 
  methods: {
    search:function () {
       if (this.$session.get("id")==0){
                this.$router.push('/Login');
        }
        else{
            this.$store.state.input=this.input1;
            this.$router.push('/search');
        }
      },
    toDetail(val) { 
      if (this.$session.get("id")==0){
            this.$message.error("用户未登陆");
            this.$router.push('/Login');
      }
      else{
        this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/comment/',
        params:{   
        post_id:val
        }       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
       .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$store.state.postid=val;
               this.$router.push("/detail");   
              break;
            case 12001:
              this.$message.error("请求方式错误");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
         }
    },//val为帖子id，交互时传到后端
    toTip: function(){
      this.mainIndex=1;
      //不用交互，显示本地新手教程
    },
    toLatest: function(){
      this.mainIndex=2;
      //交互获得最新帖子
    },
    toCourse: function(){
      this.mainIndex=3;
      //交互获得课程推荐帖子
    },
    toExer: function(){
      this.mainIndex=4;
      //交互获得刷题帖子
    },
    toLife: function(){
      this.mainIndex=5;
      //交互获得校园周边帖子
    },
  }
}
</script>

<style scoped>
#search {
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
#tip,#latestTable,#courseTable,#exerTable,#lifeTable {
  margin-top: 20px;
}
.tipText {
  margin-bottom: 20px;
}
</style>