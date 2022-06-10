<template>
  <el-container id="publish">
      <el-header>
          <h1>发布帖子</h1>
      </el-header>
    <el-main id="main">
        <div id="post">
          <el-card>
            <div>
    <div slot="header" id="postHead">  
                <el-input
  placeholder="请输入标题"
  v-model="tit"
  clearable>
</el-input>
            </div>
            <h1></h1>
            <h1>模块：
            <el-select class="types" placeholder="请选择板块" v-model="type">
                <el-option label="课程推荐" value="课程推荐"></el-option>
                <el-option label="刷题" value="刷题"></el-option>
                <el-option label="校园周边" value="校园周边"></el-option>
                <el-option label="资源共享" value="资源共享"></el-option>
                <el-option label="新手上路" value="新手上路" v-if="level === 100"></el-option>
            </el-select>
              屏蔽等级：
                <el-select class="types" placeholder="屏蔽等级" v-model="available_level">
                <el-option label=0 value=0></el-option>
                <el-option label=1 value=1></el-option>
                <el-option label=2 value=2></el-option>
                <el-option label=3 value=3></el-option>
                <el-option label=4 value=4></el-option>
                <el-option label=5 value=5></el-option>
                <el-option label=6 value=6></el-option>
                <el-option label=7 value=7></el-option>
                <el-option label=8 value=8></el-option>
                <el-option label=9 value=9></el-option>
                <el-option label=10 value=10></el-option>
                <el-option label=11 value=11></el-option>     
                <el-option label=12 value=12></el-option>
                <el-option label=13 value=13></el-option>
                <el-option label=14 value=14></el-option>
                <el-option label=15 value=15></el-option>     
            </el-select></h1>
            <h1></h1>
<el-input
  type="textarea"
  :autosize="{ minRows: 20, maxRows: 100}"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
            </div>
          </el-card>
        </div>
    </el-main>
    <el-footer >
        <el-button type="primary" @click="ppp" style="float: left">发布</el-button>
    </el-footer>
  </el-container>
</template>

<style scoped>
#contaner{
  position: absolute;
  width: 100%;
  min-height: 800px;
  background-color: rgb(246,246,246);
}
#publish{
  font-family: 黑体,'Noto Serif SC', serif;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: darkgrey 1px 1px 1px 1px ;
  width: 1000px;
  padding: 20px;
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
<script>
import qs from "qs";
export default {
      data() {
          return{
              tit:"",
              textarea:"",
              type:"",
              available_level:0,
              level:0
          }
      }, 
      created(){
        this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/info/'     /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno){
            case 0:
              this.level=res.data.data.level;
              break;
          }
        })
        .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      });
      },
       methods:{
    personal: function(){
      this.$router.push('/');
    },
    ppp: function(){
      if (!this.$store.state.islogin) {
        this.$router.push("/login");
      } else {
        this.$axios({
          method: "post" /* 指明请求方式，可以是 get 或 post */,
          url: "/api/post/new/" /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */,
          data: qs.stringify({
            /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
            title:this.tit,
            type:this.type,
            content:this.textarea,
            available_level:this.available_level
          }),
        }).then((res) => {
          switch (res.data.errno) {
            case 0:
              this.$message.success("发布成功");
              this.$router.push('/');
              break;
            case 6002:
              this.$message.error("用户未登陆");
              break;
            case 6003:
              this.$message.error("标题不能为空");
              break;
            case 6004:
              this.$message.error("类型不能为空");
             break;
            case 6005:
              this.$message.error("内容不能为空");
              break;
            case 6006:
              this.$message.error("权限等级不能高于用户等级");
              break;
            case 6007:
              this.$message.error("您已被禁言");
              break;
          }
        });
      }
    }
  }
}
</script>