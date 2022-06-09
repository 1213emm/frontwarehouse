<template>
  <div>
    <nav></nav>
    <router-view/>
  </div>
</template>

<script>
    export default{
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav1{
  font-weight: bold;
  color: #000000;
  float:right;
}
.nav2{
  font-weight: bold;
  float:left;
}
 a.router-link-exact-active {
  color: #000000;
}
#app .wrap {
  width: 60%;
  height: 0%;
  padding: 0 25px 0 25px;
  line-height: 40px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
}
.footer{
  position: fixed;
  bottom: 0;
  width: 100px;
  line-height: var(--footer-height);
  background: #42b983;
  color: #fff;
}
#window{
  background-color: rgb(246,246,246);
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
