<template>
  <el-container id="search">
    <el-header id="head">
      <el-row style="float: right">
        欢迎，“已登录用户”！
        <el-button type="primary" @click="personal">个人空间</el-button>
      </el-row>
    </el-header>
    <el-main id="main">
      <div class="search" @click="search">
        <el-input placeholder="请输入内容" v-model="input" clearable>
          <el-button type="primary" icon="el-icon-search" slot="append">搜索</el-button>
        </el-input>
      </div>
      <div>
        <h3 style="float: left">为您推荐：</h3>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%">
          
          <el-table-column prop="title" label="标题">
          </el-table-column>
          <el-table-column prop="name" label="作者"></el-table-column>
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="postid" >
            <template slot-scope="scope">
              <el-link type="primary" @click="seeblog(scope.row.postid)">查看详情</el-link>
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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          title: "上海市普陀区金沙江路 1518 弄",
          likes: 10,
          postid: 1
        },
        {
          date: "2016-05-04",
          name: "王小",
          title: "期末考试",
          likes: 15,
          postid: 2
        },
      ],
    };
  },
  methods:{
    personal: function(){
      this.$router.push('/');
    },
    search: function(){
      if (!$store.state.islogin) {
        this.$router.push("/Login");
      } else {
        this.$axios({
          method: "post" /* 指明请求方式，可以是 get 或 post */,
          url: "/info" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          data: qs.stringify({
            /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
            input: this.input,
          }),
        }).then((res) => {
          switch (res.data.errno) {
            case 0:
              break;
            case 100:
              this.$message.error("无相关内容");
              break;
          }
        });
      }
    },
    seeblog(val) {
        this.$router.push("/detail");
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
