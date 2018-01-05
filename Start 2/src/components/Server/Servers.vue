<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers" :key="server.id">
              <app-indiviual-server :serverID="server.id" :serverStatus="server.status"></app-indiviual-server>
            </li>
        </ul>
    </div>
</template>

<script>
  import IndiviualServer from "./IndiviualServer.vue";

  export default {
    data: function() {
      return {
        servers: [
          { id: 1, status: "Normal" },
          { id: 2, status: "Critical" },
          { id: 3, status: "Unknown" },
          { id: 4, status: "Broken" }
        ]
      }
    },
    components: {
      "app-indiviual-server": IndiviualServer,
    },
  }
</script>

<style>

</style>
