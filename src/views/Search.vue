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
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index"> </el-table-column>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="name" label="作者"></el-table-column>
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-link type="primary" @click="seeblog(scope.id)">查看详情（未完成）</el-link>
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
          date: "",
          name: "",
          title: "",
          likes:"",
        }
      ],
    };
  },
  methods:{
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
    }
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
