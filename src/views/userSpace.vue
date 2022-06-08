<template>
  <el-container id="personal">
    <el-container>
      
      <el-main id="main">
        <div>
          <el-menu id="menu" :default-active="activeIndex" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
            <el-menu-item @click="toInfo" index="1"><i class="el-icon-info"></i>个人信息</el-menu-item>
            <el-menu-item @click="toFavor" index="2"><i class="el-icon-star-on"></i>收藏夹</el-menu-item>
            <el-menu-item @click="toHistory" index="3"><i class="el-icon-s-order"></i>历史记录</el-menu-item>
            <el-menu-item @click="toMyPost" index="4"><i class="el-icon-edit-outline"></i>已发帖子</el-menu-item>
          </el-menu>
        </div>
        <div id="favorTable" v-if="this.$store.state.personalIndex===2">
          <el-table :data="tableData" style="width: 100%">
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
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
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
          postid: 11
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
    toSearch: function(){
      this.$router.push('/search');
    },
    toInfo: function(){
      this.$store.commit('toInfo');
    },
    toFavor: function(){
      this.$store.commit('toFavor');
    },
    toHistory: function(){
      this.$store.commit('toHistory');
    },
    toMypost: function(){
      this.$store.commit('toMyPost');
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
#favorTable{
  margin-top: 20px;
}
</style>