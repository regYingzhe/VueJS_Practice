import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    serverInfo(server) {
      this.$emit("serverDetails", server);
    },
    changeServerStatus(status, id) {
      this.$emit("changeServerStatus", status, id)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
