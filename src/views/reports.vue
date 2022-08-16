<template>
  <div class="home">
    <div class="columns">
      <div class="column side-col is-1">
        <Sidebar />
      </div>
      <div class="column">
        <h1>Reports page</h1>
        <Chart />
        <hr class="hr" />
        <BarChart />
        <hr class="hr" />
        <StockChart />
        <hr class="hr" />
        <WorldChart />
        <hr class="hr" >
        <PieChart />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Chart from "@/components/Charts/Chart.vue";
import StockChart from "@/components/Charts/StockChart.vue";
// import MapChart from "@/components/Charts/MapChart";
import WorldChart from "@/components/Charts/WorldChart";
import BarChart from "@/components/Charts/BarChart.vue";
import PieChart from "@/components/Charts/PieChart.vue";

export default {
  name: "home",
  components: {
    Sidebar,
    Chart,
    StockChart,
    BarChart,
    // MapChart,
    WorldChart,
    PieChart,
    PieChart
},
  data() {
    return {
      title: "Reports",
      points: [10, 0, 8, 2, 6, 4, 5, 5],
      chartType: "Spline",
      seriesColor: "#6fcd98",
      colorInputIsSupported: null,
      chartOptions: {
        chart: {
          type: "spline",
        },
        title: {
          text: "Sin chart",
        },
        series: [
          {
            data: [10, 0, 8, 2, 6, 4, 5, 5],
            color: "#6fcd98",
          },
        ],
      },
    };
  },
  mounted() {
    document.title = "Reports";
  },
};
</script>
<style scoped>
.hr {
  border: 1px solid rgb(11, 11, 11);
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>