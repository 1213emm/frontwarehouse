<template>
  <div id="contaner">
    <clock></clock>
  </div>
</template>

<script>
import Updown from '@/components/updown.vue'
import Clock from "@/components/clock";
export default {
  components: {Clock },

}
</script>

<style>
#contaner{
    width: 400px;
    
}
</style>