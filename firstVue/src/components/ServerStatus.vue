<template>
  <div class="">
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus" type="button" name="button">Change Status</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        status: "critical"
      }
    },
    methods: {
      changeStatus() {
        this.status = "Normal";
      }
    }
  }
</script>

<style>
</style>
