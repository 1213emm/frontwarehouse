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
      <div id="infoTable" v-if="personalIndex===1">
        <div v-if="editing">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户ID" class="infoLable">
              <el-input class="infoInput" :placeholder="id" v-model="input1"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input class="infoInput" :placeholder="username" v-model="input2"></el-input>
            </el-form-item>
            <el-form-item label="简介">
              <el-input class="infoInput" :placeholder="description" v-model="input3"></el-input>
            </el-form-item>
            <el-form-item label="绩点">
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
          </el-form>
          <el-button type="primary" id="editFinish" @click="save">保存个人信息</el-button>
          <el-button type="info" id="editCancel" @click="cancel">取消修改</el-button>
        </div>
        <div v-else>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户ID" class="infoLable">
              <el-input class="infoInput" :placeholder="id" disabled></el-input>
            </el-form-item>
            <el-form-item label="用户名">
              <el-input class="infoInput" :placeholder="username" disabled></el-input>
            </el-form-item>
            <el-form-item label="简介">
              <el-input class="infoInput" :placeholder="description" disabled></el-input>
            </el-form-item>
            <el-form-item label="绩点">
              <el-input class="infoInput" :placeholder="grade" disabled></el-input>
            </el-form-item>
            <el-form-item label="专业">
              <el-input class="infoInput" :placeholder="major" disabled></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select class="infoInput" :placeholder="sex" disabled></el-select>
            </el-form-item>
          </el-form>
          <el-button type="primary" id="editInfo" @click="edit">修改个人信息</el-button>
        </div>
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
      id:"1",
      username:"2",
      description:"3",
      grade:"4",
      major:"5",
      sex:"秘密",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      personalIndex:1, //根据该值个人空间显示不同的页面
      editing:false,
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
      //交互获取个人信息
    },
    edit: function() {
      this.editing=true;
    },
    save: function() {
      this.editing=false;
      //交互
      if(this.input1!=="")
        this.id=this.input1;
      if(this.input2!=="")
        this.username=this.input2;
      if(this.input3!=="")
        this.description=this.input3;
      if(this.input4!=="")
        this.grade=this.input4;
      if(this.input5!=="")
        this.major=this.input5;
      if(this.input6!=="")
        this.sex=this.input6;
      //改变输入框的默认值，如果交互后网页可以即使刷新，这部分可以不用

      this.input1="";
      this.input2="";
      this.input3="";
      this.input4="";
      this.input5="";
      this.input6="";
    },
    cancel: function() {
      this.editing=false;
      this.input1="";
      this.input2="";
      this.input3="";
      this.input4="";
      this.input5="";
      this.input6="";
    },
    toFavor: function(){
      this.personalIndex=2;
      //交互获取收藏夹
    },
    toHistory: function(){
      this.personalIndex=3;
      //交互获取历史记录
    },
    toMyPost: function(){
      this.personalIndex=4;
      //交互获取已发帖子
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
#infoTable,#favorTable,#historyTable,#myPostTable{
  margin-top: 20px;
}
.infoLable {
  float: none;
}
.infoInput {
  float: left;
  width: 300px;
}
#editInfo,#editFinish {
  float: left;
  margin-left: 100px;
}
#editCancel {
  float: left;
  margin-left: 40px;
}
</style>
