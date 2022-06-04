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
nav a.router-link-exact-active {
  color: #000000;
}

</style>
