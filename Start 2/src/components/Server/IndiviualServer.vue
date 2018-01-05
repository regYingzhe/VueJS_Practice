<template lang="html">
  <div class="">
    <p>id: {{ serverID }} Status: {{serverStatus}}</p>
    <button @click="passInfo">Show Details</button>
  </div>
</template>

<script>
  import { eventBus } from "../../main.js"
  export default {
    data: function() {
      return {
        id: 0,
        status: "Initilization"
      }
    },

    props: {
      serverID: {
        type: Number,
        required: true
      },
      serverStatus: {
        type: String,
        required: true,
      }
    },
    methods: {
      passInfo() {
        var server = {id: this.serverID, status: this.serverStatus}
        eventBus.serverInfo(server);
      }
    },
    created() {
      eventBus.$on("changeServerStatus", (status, id) => {
        if (this.serverID === id) {
          this.serverStatus = status;
        }
      })
    }
  }
</script>

<style lang="css">
</style>
