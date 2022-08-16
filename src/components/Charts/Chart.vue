<template>
  <div>
    <highcharts  class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Test Chart",
        },
        series: [
          {
            data: [1, 2, 3, 10, 0, 5,], // sample data
             color: "#6fcd98",
          },
        ],
      },
    };
  },
  components: {
    highcharts: Chart,
  },
};
</script>

<style>
</style>