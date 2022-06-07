<template>
  <div id="login" class="login">
    <div class="wrap">
      <h1>登 录</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="username">
          <el-input placeholder="学号" type="username" v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item id="password" prop="password">
          <el-input
              placeholder="密码"
              show-password
              type="password"
              v-model="form.password"
              autocomplete="off"
              @keyup.enter.native="login"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn_login">
          <el-button type="primary" @click="login">登&nbsp;&nbsp;录</el-button>
        </el-form-item>
      </el-form>
      <div class="suffix">
        <p @click="toRegister">注册帐号</p>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "main",
  data() {
    return {
      form: {
        id: '',
        password: '',
      }
    }
  },
  methods: {
    login: function () {
      // 检查表单是否有填写内容
      if (this.form.id === '' || this.form.password === '') {
        this.$message.warning("请输入学号和密码！");
        return;
      }
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/api/user/login/',       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          id: this.form.id,
          password: this.form.password
        })
      })
      .then(res => {              /* res 是 response 的缩写 */
        switch (res.data.errno) {
          case 0:
            this.$message.success("登录成功！");
            /* 将后端返回的 user 信息使用 vuex 存储起来 */
            this.$store.dispatch('saveUser', {
              user: {
                'username': res.data.username,
                'Id': this.form.id
              }
            });

            /* 从 localStorage 中读取 preRoute 键对应的值 */
            const history_pth = localStorage.getItem('preRoute');
            /* 若保存的路由为空或为注册路由，则跳转首页；否则跳转前路由（setTimeout表示1000ms后执行） */
            setTimeout(() => {
              if (history_pth == null || history_pth === '/register') {
                this.$router.push('/');
              } else {
                this.$router.push({ path: history_pth });
              }
            }, 1000);
            this.$store.commit('login');
            break;
          case 2003:
            this.$message.error("用户名不存在!");
            break;
          case 2002:
            this.$message.error("密码错误！");
            break;
        }
      })
      .catch(err => {
        console.log(err);         /* 若出现异常则在终端输出相关信息 */
      })
    },
    toRegister: function () {
      // 跳转注册的路由
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
#login {
  font-family: 'Noto Serif SC', serif;
  margin-top: 60px;
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
  height: 315px;
  padding: 0 25px 0 25px;
  line-height: 40px;
  position: relative;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
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
#login .suffix {
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}
</style>