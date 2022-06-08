<template>
  <div id="contaner">
    <div id="up">
      <div id="text">
        <p style="font-size:20px;font-weight:bold">用户名</p>
        <p style="font-size:18px;color:red;font-weight:bold">LV5</p>
      </div>
      <div id="btn">
        <el-button type="primary" plain>修改个人资料</el-button>
      </div>
    </div>

    <div id="mid">
      <div id="title">
        <img src="../assets/安全.png" height="30px">
        账号安全
      </div>
      <div id="text">
        <img src="../assets/密码.png" height="24px">
        修改密码<br><br>
        <img src="../assets/密保.png" height="24px">
        修改密保
      </div>
    </div>
    <div id="down">
      <nav>
        <router-link to="/posts">我的帖子</router-link> |
        <router-link to="/collections">收藏夹</router-link> |
        <router-link to="/history">历史记录</router-link> 
      </nav>
    </div>
  </div>
</template>


<style scoped>
  @import '../assets/css/space.css';
</style>

<script>
import qs from "qs";
export default {
  name: "main",
  data() {
    return {
        input:'',
        tableData: [
        {
          date: "",
          name: "",
          title: "",
          likes:"",
        }
      ],
    }
  },
  created(){
      this.$axios({
        method: 'get',           /* 指明请求方式，可以是 get 或 post */
        url: '/main',       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        })
        .then((res) => {
          switch (res.data.errno) {
            case 0:
              
              break;
            case 100:
              this.$message.error("无相关内容");
              break;
          }
        });
  }, 
  methods: {
      search:function () {
          if (!$store.state.islogin){
                this.$router.push('/Login');
          }
          else{
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/info',       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          input: $store.state.input
        })
      })
      .then(res => {  
           switch (res.data.errno) {
               case 0:

                   break;
               case 100:
                this.$message.error("无相关内容");
                   break;  
           }
      })
      }
    }
  }
}
</script>