<template>
  <el-container id="search">
    <el-header>
    <div class="wrap">
<el-input v-model="input" placeholder="请输入关键词进行搜索"  @keyup.enter.native="search">
<template slot="append"><el-button type="primary" icon="el-icon-search">搜索</el-button></template>
</el-input>
</div>
    </el-header>
    <el-main id="main">
      <div>
        <h3 style="float: left">查找如下：</h3>
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
  </el-container>
</template>

<script>
import qs from "qs";
export default {
  data() {
    return {
      input: "",
      posts: [
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
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/post/search/',
        params:{      
        keyword:$store.state.input}       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              this.posts=res.data.posts;
              break;
            case 8001:
              this.$message.error("请求方式错误");
              break;
          }
        });
  },
  methods:{
    search: function(){
      if (this.$session.get("id")==0) {
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
            case 8003:
              this.$message.error("搜索关键字不能为空");
              break;
          }
        });
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
    },
  }
};
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
</style>
