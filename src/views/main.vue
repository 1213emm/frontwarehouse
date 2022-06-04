<template>
<div id='main' class='main'>
<div class="wrap">
<el-input v-model="input" placeholder="请输入关键词进行搜索"  @keyup.enter.native="search">
<template slot="append"><el-button type="primary" icon="el-icon-search">搜索</el-button></template>
</el-input>
</div>
</div>
</template>

<script>
import qs from "qs";
export default {
  name: "NewLogin",
  data() {
    return {
        input:''
    }
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

<style scoped>
#main {
  font-family: 'Noto Serif SC', serif;
  margin-top: 0px;
}
#main >>> .el-input__inner {
  font-family: 'Noto Serif SC', serif;
}
#main .wrap {
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