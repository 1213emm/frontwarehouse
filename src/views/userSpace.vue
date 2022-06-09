<template>
  <el-container id="personal">
    <el-main id="main">
        <div>
         <span style="float:left">
            <el-button type="danger" icon="el-icon-back" @click="returnSearch">返回</el-button>
        </span>
        <el-menu id="menu" mode="horizontal" v-if="this.level===100" active-text-color="#ffd04b">
          <el-menu-item @click="toInfo" index="1"><i class="el-icon-info"></i>个人信息</el-menu-item>
          <el-menu-item @click="toFavor" index="2"><i class="el-icon-star-on"></i>收藏夹</el-menu-item>
          <el-menu-item @click="toHistory" index="3"><i class="el-icon-s-order"></i>历史记录</el-menu-item>
          <el-menu-item @click="toMyPost" index="4"><i class="el-icon-edit-outline"></i>已发帖子</el-menu-item>
          <el-menu-item @click="toReports" index="5"><i class="el-icon-warning"></i>被举报帖子</el-menu-item>
          <el-menu-item @click="toban" index="6"><i class="el-icon-warning"></i>被禁言用户</el-menu-item>
        </el-menu>
      </div>
      <div>
        <el-menu id="menu" mode="horizontal" v-if="this.level<100"  active-text-color="#ffd04b">
          <el-menu-item @click="toInfo" index="1"><i class="el-icon-info"></i>个人信息</el-menu-item>
          <el-menu-item @click="toFavor" index="2"><i class="el-icon-star-on"></i>收藏夹</el-menu-item>
          <el-menu-item @click="toHistory" index="3"><i class="el-icon-s-order"></i>历史记录</el-menu-item>
          <el-menu-item @click="toMyPost" index="4"><i class="el-icon-edit-outline"></i>已发帖子</el-menu-item>
        </el-menu>
      </div>
      <div id="infoTable" v-if="personalIndex===1">
        <div>
          <el-form  label-width="80px">
          <h1></h1>
            <el-form-item label="用户名">
              <el-input class="infoInput" :placeholder="username" v-model="input2"></el-input>
            </el-form-item>
            <el-form-item label="等级">
              <el-input class="infoInput" :placeholder="level" v-model="input1" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="简介">
              <el-input class="infoInput" :placeholder="description" v-model="input3"></el-input>
            </el-form-item>
            <el-form-item label="年级">
              <el-input class="infoInput" :placeholder="grade" v-model="input4"></el-input>
            </el-form-item>
            <el-form-item label="专业">
              <el-input class="infoInput" :placeholder="major" v-model="input5"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select class="infoInput" :placeholder="sex" v-model="input6">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
                <el-option label="秘密" value="秘密"></el-option>
              </el-select>
            </el-form-item>
              <el-form-item label="密保问题">
              <el-input class="infoInput" :placeholder="security_issue" v-model="input7"></el-input>
            </el-form-item>
              <el-form-item label="答案">
              <el-input class="infoInput" :placeholder="security_answer" v-model="input8"></el-input>
            </el-form-item>
              <el-form-item label="密码">
              <el-input class="infoInput" :placeholder="password" v-model="input9"></el-input>
            </el-form-item>          
          </el-form>
          <el-button type="primary" id="editFinish" @click="save">保存个人信息</el-button>
        </div>
      </div>
      <div id="favorTable" v-if="personalIndex===2">
        <el-table :data="posts3" style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id" >
            <template slot-scope="scope1">
              <el-link type="primary" @click="toDetail(cope1.row.id)">查看详情</el-link>
              <el-button type="primary" @click="tode2(scope1.row.id)">取消收藏</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="favorTable" v-if="personalIndex===4">
        <el-table :data="posts1" style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
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
                    <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id" >
            <template slot-scope="scope3">
              <el-link type="primary" @click="toDetail(scope3.row.id)">查看详情</el-link>
              <el-button type="primary" @click="tode3(scope3.row.id)">删除历史记录</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
        <div id="reported" v-if="personalIndex===5">
        <el-table :data="posts4" style="width: 100%">
        <h1>待更改</h1>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="user" label="作者"></el-table-column>
          <el-table-column prop="userid" label="学号"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column prop="post_date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="id" >
            <template slot-scope="scope4">
              <el-link type="primary" @click="toDetail(scope4.row.id)">查看详情</el-link>
              <el-button type="primary" @click="tode4(scope4.row.id)">删除帖子</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="user_id" >
            <template slot-scope="scope4">
              <el-button type="primary" @click="ban(scope4.row.user_id)">禁言用户</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="unban" v-if="personalIndex===6">
        <el-table :data="users" style="width: 100%">
          <el-table-column prop="id" label="学号"></el-table-column>
          <el-table-column prop="username" label="用户名"></el-table-column>
          <el-table-column prop="id">
            <template slot-scope="scope5">
              <el-button type="primary" @click="unban(scope5.row.id)">解除禁言</el-button>
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
      username:"2",
      description:"这个人很懒，啥也没写",
      grade:"1",
      major:"软件工程",
      sex:"男",
      level:100,
      security_issue:"您吃了吗？",
      security_answer:"没呢",
      password:"dddd",
      headshot:"",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
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
        }],
        posts4:[
        {
            "id": 3,
            "user": "被举报了",
            "user_id":"",
            "type": "课程推荐",
            "post_date": "2022-06-06T18:14:21.709Z",
            "title": "关注嘉然今天吃什么",
            "likes": 0,
            "report_times": 2,
            "available_level": 0,
            "resource": null,
            "floor_num": 2
        }],
      users: [
        {
            "id": 20373615,
            "username": "朱姜逸扬",
            "description": "",
            "grade": 2,
            "major": "软件工程",
            "sex": true,
            "headshot": "/media/user_20373615/headshot/headshot.jpg"
        }
    ]
    };
  },
  created(){
        this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/ban/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.users=res.data.users;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
        this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/info/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.level=res.data.data.level;
              this.username=res.data.data.username;
              this.description=res.data.data.description;
              this.major=res.data.data.major;
              this.level=res.data.data.level;
              this.sex=res.data.data.sex;
              this.security_issue=res.data.data.security_issue;
              this.security_answer=res.data.data.security_answer;
              this.password=res.data.data.password;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
     this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
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
            case 11002:
              this.$message.error("用户未登陆");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
        this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/report/'   /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.posts4=res.data.posts;
              break;
            case 15001:
              this.$message.error("用户未登陆");
              break;
            case 15002:
              this.$message.error("帖子ID不能为空");
            case 15003:
              this.$message.error("帖子不存在");
              break;
            case 15004:
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
    toReports: function(){
      this.personalIndex=5;
    },
    toban: function(){
      this.personalIndex=6;
    },
    ban(valv){
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/ban/',
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          user_id: valv,
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.post=res.data.post;
              this.comments=res.data.comments;
              this.$message.success("禁言成功");
              break;
            case 16001:
              this.$message.error("用户未登陆");
              break;
            case 16002:
              this.$message.error("非管理员用户不能禁言用户");
              break;
            case 16003:
              this.$message.error("用户ID不能为空");
              break;
            case 16004:
              this.$message.error("用户不存在");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/ban/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.users=res.data.users;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    },
     unban(valu){
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/ban/',
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          user_id: valu,
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.post=res.data.post;
              this.comments=res.data.comments;
              this.$message.success("解除禁言成功");
              break;
            case 16001:
              this.$message.error("用户未登陆");
              break;
            case 16002:
              this.$message.error("非管理员用户不能禁言用户");
              break;
            case 16003:
              this.$message.error("用户ID不能为空");
              break;
            case 16004:
              this.$message.error("用户不存在");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/ban/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.users=res.data.users;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    },
    toDetail(val) { 
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
              if(this.$store.state.level<res.data.post.available_level){
                      this.$store.state.postid=val;
                      this.$router.push("/detail");
              }
              else{
                      this.$message.warning("未达到可查看等级");
              }
              break;
            case 12001:
              this.$message.error("请求方式错误");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    },/*新增表内属性postid，传入的val即为帖子编号，每一行不同，点击“查看详情”链接时进入详情页面，并将该参数发送到后端*/
    tode1(val2){
       this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/delete/',     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          post_id: val2,
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("删帖成功");
              break;
            case 14003:
              this.$message.error("帖子ID不能为空");
              break;
            case 14004:
              this.$message.error("帖子不存在");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/info/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.level=res.data.data.level;
              this.username=res.data.data.username;
              this.description=res.data.data.description;
              this.major=res.data.data.major;
              this.sex=res.data.data.sex;
              this.level=res.data.data.level;
              this.security_issue=res.data.data.security_issue;
              this.security_answer=res.data.data.security_answer;
              this.password=res.data.data.password;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
     this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
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
            case 11002:
              this.$message.error("用户未登陆");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    },
    tode2(val3){
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/favorites/',     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          post_id: val3,
          op:1
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("移除成功");
              break;
            case 11002:
              this.$message.error("帖子ID不能为空");
              break;
            case 11005:
              this.$message.error("帖子未收藏");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
        this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/info/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.level=res.data.data.level;
              this.username=res.data.data.username;
              this.description=res.data.data.description;
              this.major=res.data.data.major;
              this.sex=res.data.data.sex;
              this.level=res.data.data.level;
              this.security_issue=res.data.data.security_issue;
              this.security_answer=res.data.data.security_answer;
              this.password=res.data.data.password;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
     this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
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
            case 11002:
              this.$message.error("用户未登陆");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    },
    tode3(val4){
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/history/',     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          post_id: val4,
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("删除历史记录成功");
              break;
            case 10002:
              this.$message.error("帖子不存在");
              break;
            case 10003:
              this.$message.error("历史记录不存在");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
              this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/info/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.level=res.data.data.level;
              this.username=res.data.data.username;
              this.description=res.data.data.description;
              this.major=res.data.data.major;
              this.sex=res.data.data.sex;
              this.level=res.data.data.level;
              this.security_issue=res.data.data.security_issue;
              this.security_answer=res.data.data.security_answer;
              this.password=res.data.data.password;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
     this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
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
            case 11002:
              this.$message.error("用户未登陆");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    },
    tode4(val2){
       this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/delete/',     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          post_id: val2,
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("删帖成功");
              break;
            case 14003:
              this.$message.error("帖子ID不能为空");
              break;
            case 14004:
              this.$message.error("帖子不存在");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
              this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/info/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.level=res.data.data.level;
              this.username=res.data.data.username;
              this.description=res.data.data.description;
              this.major=res.data.data.major;
              this.sex=res.data.data.sex;
              this.level=res.data.data.level;
              this.security_issue=res.data.data.security_issue;
              this.security_answer=res.data.data.security_answer;
              this.password=res.data.data.password;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
     this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
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
            case 11002:
              this.$message.error("用户未登陆");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    },
    save: function(){
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/info/',     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
            username:this.username,
            description:this.description,
            grade:this.grade,
            major:this.grade,
            sex:this.sex,
            security_issue:this.security_issue,
            security_answer:this.security_answer
        })
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("保存成功");
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
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