<template>
    <div id="updown">
      <div class="tmp">
       <a href="#up"><img src="../assets/上.png" height="64px"></a>
      </div>
      <div class="tmp">
        <a href="#down"><img src="../assets/下.png" height="64px"></a>
      </div>
    </div>
</template>


<script>
export default {
    name:"updown",
}
</script>

<style>
#updown{
    position: fixed;
    left: 60px;
    top: 225px;
}
#updown .tmp{
  margin-top: 20px;
}
</style>