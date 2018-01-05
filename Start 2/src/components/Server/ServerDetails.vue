<template>
    <div class="col-xs-12 col-sm-6">
      <p v-if="Object.keys(server).length === 0">
        Server Details are currently not updated
      </p>
      <template v-else>
        <p>id: {{ server.id }} status: {{ server.status }}</p>
        <button @click="changeStatus">Change Status</button>
      </template>
    </div>

</template>

<script>
  import { eventBus } from "../../main.js"
  export default {
    data: function() {
      return {
        server: {},
        status: "Normal"
      }
    },
    created() {
      eventBus.$on("serverDetails", (server) => {
        this.server = server;
      })
    },
    methods: {
      changeStatus() {
        eventBus.changeServerStatus(this.status, this.server.id);
      }
    }
  }
</script>

<style>

</style>
