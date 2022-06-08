<template>
  <el-container id="personal">
    <el-header id="head">
      <el-row style="float: right">
        欢迎，“已登录用户”！
        <el-button type="primary" @click="toSearch">探索更多</el-button>
      </el-row>
    </el-header>
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
        <el-table :data="favorData" style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="name" label="作者"></el-table-column>
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="postid" >
            <template slot-scope="scope">
              <el-link type="primary" @click="toDetail(scope.row.postid)">查看详情</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="historyTable" v-if="personalIndex===3">
        <el-table :data="historyData" style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="name" label="作者"></el-table-column>
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="postid" >
            <template slot-scope="scope">
              <el-link type="primary" @click="toDetail(scope.row.postid)">查看详情</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="myPostTable" v-if="personalIndex===4">
        <el-table :data="myPostData" style="width: 100%">
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column prop="date" label="日期"></el-table-column>
          <el-table-column prop="likes" label="点赞数"></el-table-column>
          <el-table-column prop="postid" >
            <template slot-scope="scope">
              <el-link type="primary" @click="toDetail(scope.row.postid)">查看详情</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      personalIndex:1, //根据该值个人空间显示不同的页面
      favorData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          title: "收藏1",
          likes: 10,
          postid: 11
        },
        {
          date: "2016-05-04",
          name: "王小",
          title: "收藏2",
          likes: 15,
          postid: 2
        },
      ],
      historyData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          title: "历史1",
          likes: 10,
          postid: 11
        },
        {
          date: "2016-05-04",
          name: "王小",
          title: "历史2",
          likes: 15,
          postid: 2
        },
      ],
      myPostData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          title: "已发1",
          likes: 10,
          postid: 11
        },
        {
          date: "2016-05-04",
          name: "王小",
          title: "已发2",
          likes: 15,
          postid: 2
        },
      ],
    };
  },
  methods:{
    toSearch: function(){
      this.$router.push('/search');
    },
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
      this.$router.push("/detail");
    },/*新增表内属性postid，传入的val即为帖子编号，每一行不同，点击“查看详情”链接时进入详情页面，并将该参数发送到后端*/ 
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
#favorTable,#historyTable,#myPostTable{
  margin-top: 20px;
}
</style>
