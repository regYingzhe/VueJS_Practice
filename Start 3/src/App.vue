<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="selectColor = 'appBlue'">Load Blue Template</button>
                <button @click="selectColor = 'appGreen'">Load Green Template</button>
                <button @click="selectColor = 'appRed'">Load Red Template</button>
                <hr>
                <component :is="selectColor">
                  <p>Color</p>
                </component>
                <!-- <app-blue>
                  <p>Hello Blue</p>
                </app-blue>
                <app-green>
                  <p>Hello Green</p>
                </app-green>
                <app-red>
                  <p>Hello Red</p>
                </app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data: function() {
        return {
          selectColor: "appBlue"
        }
      },
      components: {
          appBlue: Blue,
          appGreen: Green,
          appRed: Red
      },
      methods: {
      }
    }
</script>

<style>
</style>
