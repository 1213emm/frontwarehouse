<template>
  <div>
    <div id="up"></div>
    <navigation></navigation>
    <router-view/>
    <div id="down"></div>
  </div>
</template>

<script>
    import Navigation from "@/components/navigation";
    export default{
      components: {Navigation},
      data() {
    return {
        AddSubmenuData:{
          id:"",
          pid:"",
          funType:1,
          name:"",
          sort:"",
          SystemCoding:"",
          remarks:"",
          imageUrl: ''
        },
    }
  },
  created(){
            //在页面加载时读取sessionStorage里的状态信息
      if(sessionStorage.getItem('storeState')){
          //replaceState，替换store的根状态
          this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('storeState'))))
      }
  //在页面刷新时将vuex里的信息保存到sessionStorage里
         window.addEventListener('beforeunload',()=>{
         sessionStorage.setItem('storeState',JSON.stringify(this.$store.state))
          })
      },
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

</style>
