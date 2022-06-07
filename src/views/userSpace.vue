<template>
  <div id="contaner">
    <div id="up">
      <div id="image">
        <img src="../assets/logo.png" width="100px">
      </div>
      <div id="text">
        <p style="font-size:20px;font-weight:bold">用户名</p>
        <p style="font-size:18px;color:red;font-weight:bold">LV5</p>
      </div>
      <div id="btn">
        <el-button type="primary" plain>修改个人资料</el-button>
      </div>
    </div>

    <div id="mid">
      <div id="title">
        <img src="../assets/安全.png" height="30px">
        账号安全
      </div>
      <div id="text">
        <img src="../assets/密码.png" height="24px">
        修改密码<br><br>
        <img src="../assets/密保.png" height="24px">
        修改密保
      </div>
    </div>
    <div id="down">
      <nav>
        <router-link to="/posts">我的帖子</router-link> |
        <router-link to="/collections">收藏夹</router-link> |
        <router-link to="/history">历史记录</router-link> 
      </nav>
    </div>
  </div>
</template>


<style scoped>
  @import '../assets/css/space.css';
</style>
