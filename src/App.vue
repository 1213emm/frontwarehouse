<template>
  <div id="app">
   <el-header>
     <nav>  
     <el-button type="primary" v-on:click="gotologin" v-if="!$store.state.islogin">登录</el-button>
      <h1 v-if="$store.state.islogin">欢迎,
      <router-link to="/User">{{$store.state.username}}</router-link></h1>
      </nav>
    </el-header>
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
          this.$store.commit('logout');
        },
        search:function () {
          if (!$store.state.islogin){
                this.$router.push('/Login');
          }
          else{
        this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/info',       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          input: this.input
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  font-weight: bold;
  color: #000000;
  float:right;
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
</style>
