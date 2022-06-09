<template>
    <div id="calendar">
        <el-calendar v-model="value">
        </el-calendar>
    </div>
</template>

<script>
export default {
    data() {
      return {
        value: new Date()
      }
    }
}
</script>

<style>
#calendar{
    padding: 5px;
    background-color: white;
    box-shadow: darkgrey 1px 1px 1px 1px ;
    width: 250px;
    position: fixed;
    right: 60px;
    top: 150px;
}
.el-calendar-table .el-calendar-day{
    width: 20px;
    height: 20px;
    font-size: 10px;
    text-align: center;
    font-weight: bold;
    padding: 0px;
    margin: 0 auto;
    margin-top: 8px;
}
</style>