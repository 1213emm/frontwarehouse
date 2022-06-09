<template>
  <div id="login" class="login">
    <div class="wrap">
      <h1>找回密码</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="username">
          <el-input placeholder="学号" type="username"  v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
          type="textarea"
          :placeholder="form.security_issue"
          :disabled="true"  :autosize="{ minRows: 2, maxRows: 4}" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain float="right" @click="show">显示密保问题</el-button>
        </el-form-item>
        <el-form-item prop="username">
          <el-input placeholder="密保答案" v-model="form.security_answer" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="btn_login">
          <el-button type="primary" @click="get">找回密码</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "NewRegister",
  data() {
    return {
      form: {
        id: '',
        security_issue:'密保问题',
        security_answer:'',
      }
    }
  },
  methods: {
      show: function(){
      if(this.form.id === ''){
        this.$message.warning("请输入学号");
        return;
      }
      this.$axios({
        method: 'get',
        url: '/api/user/issue/',
         params:{
           id: this.form.id
         }
      })
      .then(res =>{
        switch (res.data.errno) {
          case 0:
            this.form.security_issue=res.data.security_issue
            break;
          case 4002:
            this.$message.error("该用户不存在!");
            break;
        }
      }
      )
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      })
    },
    get: function(){
      if(this.form.id === '' || this.form.security_answer === ''){
        this.$message.warning("请填写完整信息");
      }
      this.$axios({
        method: 'post',           
        url: '/api/user/password/',       
        data: qs.stringify({      
          id: this.form.id,
          security_answer: this.form.security_answer
        })
      })
      .then(res => {
          switch (res.data.errno) {
          case 0:
            this.$message.success("密码为:"+res.data.password);
            setTimeout(() => {
                this.$router.push('/Login');
            }, 1000);
            break;
          case 5002:
            this.$message.error("答案错误!");
            break;
        }
      })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      })
    },
  },
}
</script>

<style scoped>
#login {
  font-family: 'Noto Serif SC', serif;
  background-color: rgb(246,246,246);
  width: 100%;
  height: 100%;
  position: absolute;
}
#login >>> .el-input__inner {
  font-family: 'Noto Serif SC', serif;
}
#login .bgbox {
  display: block;
  opacity: 1;
  z-index: -3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s,transform .25s,filter .25s;
  backface-visibility: hidden;
}
#login .wrap {
  width: 300px;
  height: 400px;
  padding: 0 25px 0 25px;
  line-height: 40px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: darkgrey 1px 1px 1px 1px;
  text-align: center;
}
#login .btn_login {
  margin-top: 25px;
  text-align: center;
}
#login .btn_login button{
  line-height: 10px;
  font-family: 'Noto Serif SC', serif;
  width: 100%;
  height: 38px;
}
</style>