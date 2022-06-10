<template>
  <div id="nav">
    <span v-if="!$store.state.islogin">
      <span id="right_font" v-on:click="gotologin"><img src="../assets/注销.png" height="32px"></span>
      <span id="right_text">您还未登录，请点击登录</span>
    </span>
    <span v-if="$store.state.islogin">
      <span id="right_font" v-on:click="loginout"><img src="../assets/登录.png" height="32px"></span>
      <span id="right_font" @click="toUser"><img src="../assets/用户.png" height="32px"></span>
      <span id="right_font" @click="toMain"><img src="../assets/主页.png" height="32px"></span>
    </span>
    <span id="logo" @click="toMain">学习生活交流论坛</span>
<!--    <span id="left">不知道怎么操作？点击前往<span style="color: deepskyblue;cursor: pointer;">新手上路！</span></span>-->

  </div>
</template>

<style>
#logo {
  font-weight: 600;
  font-size: 32px;
  font-family: "黑体";
  color: #8c888b;
  background: -webkit-linear-gradient(45deg, #70f7fe, #fbd7c6, #fdefac, #bfb5dd, #bed5f5);
  color: transparent;
  /*设置字体颜色透明*/
  -webkit-background-clip: text;
  /*背景裁剪为文本形式*/
  animation: ran 10s linear infinite;
  /*动态10s展示*/
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
}

@keyframes ran {
  from {
    backgroud-position: 0 0;
  }
  to {
    background-position: 2000px 0;
  }
}
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 60px;
  top: 0px;
  border-bottom: 2px solid gray;
}
#nav #right_font{
  float: right;
  margin-right: 18px;
  margin-top: 12px;
  cursor: pointer;
}
#nav #right_text{
  font-size: 15px;
  margin-right: 15px;
  margin-top: 18px;
  float: right;
}
#nav #headshot{
  float: right;
  margin-right: 18px;
  margin-top: 8px;
  cursor: pointer;
}
#nav #left_font{
  margin-left: 15px;
  float: left;
  cursor: pointer;
}
</style>




<script>
export default {
  name:"navigation",
  methods:{
    toUser(){
      this.$router.push('/user');
      this.$message.success("进入用户空间！");
    },
    toMain(){
      this.$router.push('/');
      this.$message.success("进入主页！");
    },
    gotologin(){
      this.$router.push('/Login');
    },
    logout(){
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/login/'       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
      })
          .then(res => {              /* res 是 response 的缩写 */
            switch (res.data.errno) {
              case 0:
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          });
      this.$store.commit('logout');
      this.$message.success("退出登录成功");
      setTimeout(() => {
        this.$router.push('/');
      }, 1000);
    },
    publish(){
      this.$router.push('/publish');
    }
  }
}
</script>

