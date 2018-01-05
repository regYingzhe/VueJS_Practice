<template>
    <div class="container">
      <app-header></app-header>
      <hr>
      <div class="row">
        <app-servers></app-servers>
        <app-server-details></app-server-details>
      </div>
      <hr>
      <app-footer></app-footer>
    </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import Body from "./components/Body.vue";
  import ServerDetails from "./components/ServerDetails.vue";
  import Servers from "./components/Servers.vue"
  export default {
    components: {
      "app-header": Header,
      "app-footer": Footer,
      "app-body": Body,
      "app-server-details": ServerDetails,
      "app-servers": Servers
    }
  }
</script>

<style>

</style>
