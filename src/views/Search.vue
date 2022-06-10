<template>
  <div id="contaner">
    <div id="search">
      <div id="head">
        <div id="wrap">
          <el-input v-model="input" placeholder="请输入关键词进行搜索"  @keyup.enter.native="search">
            <template slot="append"><el-button type="primary" icon="el-icon-search" @click="search">搜索</el-button></template>
          </el-input>
        </div>
        <div style="float: left">
            <el-button type="danger" icon="el-icon-back" @click="returnd">返回</el-button>
        </div>
      </div>
      <el-main id="main">
        <div >
          <h2 style="float: left">查找如下：</h2>
        </div>
        <div>
          <el-table :data="posts" style="width: 100%">
            <el-table-column type="index"> </el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
            <el-table-column prop="user" label="作者"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="post_date" label="日期"></el-table-column>
            <el-table-column prop="likes" label="点赞数"></el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-link type="primary" @click="toDetail(scope.row.id)">查看详情</el-link>
              </template>
            </el-table-column>
          </el-table>
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
#search{
  font-family: 黑体,'Noto Serif SC', serif;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: darkgrey 1px 1px 1px 1px ;
  width: 1200px;
  padding: 20px;
}
#head {
  background-color:white;
  box-shadow: darkgrey 1px 1px 1px 1px ;
  color: #333;
  text-align: center;
  line-height: 60px;
  width: 1160px;
  padding: 10px;
  height: 60px;
  margin: 0 auto;
}
#wrap{
  width: 500px;
  float: right;
}
</style>



<script>
import qs from "qs";
export default {
  data() {
    return {
      input: "",
      posts: [
        {
            "id": 0,
            "user": "",
            "type": "",
            "post_date": "",
            "title": "",
            "likes": 0,
            "available_level": 0,
            "resource": null,
            "floor_num": 1
        }]
    };
  },
  created(){
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/search/',
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          keyword:this.$store.state.input
        })     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.posts=res.data.posts;
              break;
            case 8001:
              this.$message.error("请求方式错误");
              break;
            case 8002:
              this.$message.error("请先登陆");
              this.$router.push('/login');
              break;
            case 8003:
              this.$message.error("搜索关键字不能为空");
              break;
          }
        });
  },
  methods:{
    returnd: function(){
        this.$router.push("/");
    },
    search: function(){
      if (!this.$store.state.islogin) {
        this.$message.error("请登录");
        this.$router.push("/Login");
      } else {
        this.$store.state.input = this.input;
        this.$axios({
          method: "post" /* 指明请求方式，可以是 get 或 post */,
          url: "/api/post/search/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          data: qs.stringify({
            /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
            keyword: this.input,
          }),
        }).then((res) => {
          switch (res.data.errno) {
            case 0:
              this.posts=res.data.posts;
              break;
            case 8001:
              this.$message.error("请求方式错误");
              break;
            case 8002:
              this.$message.error("请先登陆");
              this.$router.push('/login');
              break;
            case 8003:
              this.$message.error("搜索关键字不能为空");
              break;
          }
        }) 
         .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
        ;
      }
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
              this.$store.state.postid=val;
              this.$router.push("/detail");
              break;
            case 7001:
              this.$message.error("请求方式错误");
              break;
            case 7006:
              this.$message.error("用户等级不足");
              break;
          }
        })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
    },
  }
};
</script>

