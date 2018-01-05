<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent = 'appQuote'">Quote</button>
              <button @click="selectedComponent = 'New'">Author</button>
              <button @click="selectedComponent = 'Author'">New</button>
              <hr>
              <p>{{ selectedComponent }}</p>
              <component :is="selectedComponent">
                <p>Default content</p>
              </component>
               <!-- <app-quote>
                 <h1 slot="title">{{ quoteTitle }}</h1>
                 <p>Wonderful Quote</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
  import Quote from "./components/Quote.vue";
  import New from "./components/New.vue";
  import Author from "./components/Author.vue";
  var width = 700;
	var height = 800;
	var updateFlag = false;
	var transitionTime = 500;

	// Color binding with different person
	var color = d3.scale.category10();

	// svgViewPort Setup
	var svgViewPort = d3.select("body").append("svg").attr("width", width).attr("height", height);
	var margin = {top: 50, right: 50, bottom: 50, left: 50},
		width = width - margin.left - margin.right,
		height = height - margin.top - margin.bottom;
	var innerSpace = svgViewPort.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// radius for the circle
	var r = 0.05 * width;
	// draw x, y Axis
  export default {
    components: {
      appQuote: Quote,
      New,
      Author,
    },
    data: function() {
      return {
        quoteTitle: "The Quote",
        selectedComponent: "appQuote",
      }
    },
    methods: {
      getScales() {
        var xAxisScale = d3.scale.linear().domain([0, 3.45]).range([0, width]).nice();
        var yAxisScale = d3.scale.linear().domain([0, 4.0]).range([height, 0]);
        var xAxis = d3.svg.axis().scale(xAxisScale).orient("bottom");
        var yAxis = d3.svg.axis().scale(yAxisScale).orient("left");
        return { xAxis, yAxis };
      },
      drawAxis() {
        const scale = this.getScales();
        var xAxisGroup = innerSpace.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(scale.xAxis);
        var yAxisGroup = innerSpace.append("g").attr("class", "y axis").call(scale.yAxis);
      }
    }

  }
</script>
