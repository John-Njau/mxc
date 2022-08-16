<template>
  <div class="pie">
    <pie-chart
      :ratio="0.42"
      :percent="52"
      :stroke-width="1"
      label="42%"
      label-small=""
      color="#40a070"
      :opacity="0.7"
      :options="chartOptions"
    />
    <hr :class="hr" />
    <highcharts
      :constructor-type="pieChart"
      class="hc"
      :options="chartOptions"
      ref="chart"
    ></highcharts>

    <!-- {{ seriesData.percent }} -->
  </div>
</template>

<script>
import PieChart from "vue-pie-chart/src/PieChart.vue";

export default {
  name: "piechart",
  components: {
    PieChart,
  },
  props: {
    strokeWidth: {
      type: Number,
      default: () => 10,
    },
    label: {
      type: Array,
      default: () => [],
    },
    labelSmall: {
      type: String,
      default: () => "",
    },
    color: {
      type: Array,
      default: () => [],
    },
    opacity: {
      type: Number,
      default: () => 1,
    },
  },
  data() {
    return {
      //   ratio: [40, 49, 5, 3, 2, 0.9],
      //   seriesData: {},
      // ratio: [40, 49, 5, 3, 2, 0.9],
      // percent: [40, 49, 5, 3, 2, 0.9],

      // name: ["Firefox", "Chrome", "Safari", "IE", "Opera", "Others"],
      //   },
      //   type: "pie",
      //   name: "Browser share",
      //   angleKey: "value",

      chartOptions: {
        chart: {
          type: "pie",
          angleKey: "value",
        },
        title: {
          text: "Browser share",
        },
        series: [
          {
            data: [
              { y: 40, text: "USA", fill: "#00226C" },
              { x: "Australia", y: 49, text: "AUS: 14%", fill: "#0450C2" },
              { x: "China", y: 5, text: "CHN", fill: "#0073DC" },
              { x: "India", y: 3, text: "IND", fill: "#0D98FF" },
              { x: "Japan", y: 2, text: "JPN", fill: "#9CD9FF" },
              { x: "United Kingdom", y: 0.9, text: "UK", fill: "#0450C2" },
            ],
            // color: "#6fcd98",
          },
        ],
      },
    };
  },

  mounted() {
    this.colorInputIsSupported = this.supportsColorInput();
  },
  methods: {
    supportsColorInput() {
      const input = document.createElement("input");
      input.type = "color";
      return input.type === "color";
    },
  },
};
</script>

<style>
</style>