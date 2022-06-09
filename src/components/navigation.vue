<template>
  <div id="nav">
    <span v-if="!$store.state.islogin">
      <span id="right_font" v-on:click="gotologin"><img src="../assets/登录.png" height="32px"></span>
      <span id="right_text">您还未登录，请点击登录</span>
    </span>
    <span v-if="$store.state.islogin">
      <span id="right_font" v-on:click="logout"><img src="../assets/注销.png" height="32px"></span>
      <span id="right_font"><img src="../assets/历史.png" height="32px"></span>
      <span id="right_font"><img src="../assets/收藏.png" height="32px"></span>
      <span id="right_font"><img src="../assets/动态.png" height="32px"></span>
      <span id="headshot"><img src="../assets/用户.png" height="45px"></span>
    </span>
    <span id="left">不知道怎么操作？点击前往<span style="color: deepskyblue;cursor: pointer;">新手上路！</span></span>
  </div>
</template>


<script>
export default {
  name:"navigation",
  methods:{
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

<style>
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
#nav #left{
  font-size: 18px;
  margin-left: 15px;
  margin-top: 18px;
  float: left;
}
</style>