<template>
  <div id="app">
  <el-container>
   <el-header>
     <nav class="nav1">  
     <el-button type="primary" v-on:click="gotologin" v-if="!$store.state.islogin">登录</el-button>
      <h1 v-if="$store.state.islogin">欢迎,
      <router-link to="/User">{{$store.state.username}}</router-link></h1>
      </nav>
      <nav class="nav2">
             <el-button type="primary" v-on:click="logout" v-if="$store.state.islogin">退出登录</el-button>
      </nav>
    </el-header>
    <el-main> 
         <router-view/>
    </el-main>
        <el-button class="footer" type="primary" block @click="publish" v-if="$store.state.islogin">发帖</el-button>
  </el-container>
  </div>
</template>

<script>
    export default{
      methods:{
        gotologin(){
          this.$router.push('/Login');
        },
        logout(){
          this.$router.push('/');
          this.$store.commit('logout');
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
</style>
