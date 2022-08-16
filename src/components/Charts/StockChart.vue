<template>
  <div>
    <highcharts :constructor-type="'stockChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";

stockInit(Highcharts);

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Stock Chart",
        },
        series: [
          {
            data: [0,1,0, 2, 3], // sample data
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