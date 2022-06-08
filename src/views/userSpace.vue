<template>
  <el-container id="personal">
    <el-main id="main">
      <div>
        <el-menu id="menu" :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
          <el-menu-item @click="toInfo" index="1"><i class="el-icon-info"></i>个人信息</el-menu-item>
          <el-menu-item @click="toFavor" index="2"><i class="el-icon-star-on"></i>收藏夹</el-menu-item>
          <el-menu-item @click="toHistory" index="3"><i class="el-icon-s-order"></i>历史记录</el-menu-item>
          <el-menu-item @click="toMyPost" index="4"><i class="el-icon-edit-outline"></i>已发帖子</el-menu-item>
        </el-menu>
      </div>
      <div id="favorTable" v-if="personalIndex===2">
        <el-table :data="posts3" style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id" >
            <template slot-scope="scope1">
              <el-link type="primary" @click="toDetail(scope1.row.id)">查看详情</el-link>
              <el-button type="primary" @click="tode2(scope2.row.id)">取消收藏</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="favorTable" v-if="personalIndex===4">
        <el-table :data="posts1" style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id" >
            <template slot-scope="scope2">
              <el-link type="primary" @click="toDetail(scope2.row.id)">查看详情</el-link>
              <el-button type="primary" @click="tode1(scope2.row.id)">删除帖子</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="favorTable" v-if="personalIndex===3">
        <el-table :data="posts2" style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id" >
            <template slot-scope="scope3">
              <el-link type="primary" @click="toDetail(scope3.row.id)">查看详情</el-link>
              <el-button type="primary" @click="tode3(scope2.row.id)">删除历史记录</el-button>
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
  data() {
    return {
      input: "",
      personalIndex:1, //根据该值个人空间显示不同的页面
      posts1: [
        {
            "id": 3,
            "user": "朱姜逸扬",
            "type": "课程推荐",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title": "关注嘉然今天吃什么",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 2
        }],
        posts2: [
        {
            "id": 3,
            "user": "朱姜逸扬",
            "type": "课程推荐",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title": "关注嘉然今天吃什么",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 2
        }],
        posts3: [
        {
            "id": 3,
            "user": "朱姜逸扬",
            "type": "课程推荐",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title": "关注嘉然今天吃什么",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 2
        }]
    };
  },
  created(){
     this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/posted/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.posts1=res.data.posts;
              break;
            case 9001:
              this.$message.error("用户未登陆");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/history/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.posts2=res.data.posts;
              break;
            case 10002:
              this.$message.error("用户未登陆");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
        this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/favorites/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.posts3=res.data.posts;
              break;
            case 110002:
              this.$message.error("用户未登陆");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
  },
  methods:{
    toInfo: function(){
      this.personalIndex=1;
    },
    toFavor: function(){
      this.personalIndex=2;
    },
    toHistory: function(){
      this.personalIndex=3;
    },
    toMyPost: function(){
      this.personalIndex=4;
    },
    toDetail(val) { 
      this.$store.dispatch('getpostid',val);
      this.$router.push("/detail");
    },/*新增表内属性postid，传入的val即为帖子编号，每一行不同，点击“查看详情”链接时进入详情页面，并将该参数发送到后端*/
    tode1(val2){
       this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/delete/',     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        date: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          id: val2,
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("删帖成功");
              break;
            case 140003:
              this.$message.error("帖子ID不能为空");
              break;
            case 140004:
              this.$message.error("帖子不存在");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      })
    },
    tode2(val3){
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/favorites/',     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        date: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          id: val3,
          op:1
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("移除成功");
              break;
            case 110002:
              this.$message.error("帖子ID不能为空");
              break;
            case 110005:
              this.$message.error("帖子未收藏");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      })
    },
    tode3(val4){
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/history/',     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        date: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          id: val4,
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("删除历史记录成功");
              break;
            case 110002:
              this.$message.error("帖子ID不能为空");
              break;
            case 110005:
              this.$message.error("帖子未收藏");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      })
    }
  }
};
</script>

<style scoped>
#personal {
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
#aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
#favorTable{
  margin-top: 20px;
}
</style>