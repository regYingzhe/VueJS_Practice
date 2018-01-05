<template lang="html">
  <div class="">
    <h3>New</h3>
    <button @click="counter++">crement</button>
    <p>{{ counter }}</p>
  </div>

</template>

<script type="text/javascript">
  export default {
    data: function() {
      return {
        counter: 0
      }
    }
  }
</script>
