import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bulma/css/bulma.css";
import Highcharts from "highcharts";
// import { AccumulationChartPlugin, PieSeries } from "@syncfusion/ej2-charts";
// import Stock from "highcharts/modules/stock";
import Maps from "highcharts/modules/map";
import HighchartsVue from "highcharts-vue";
import PieChart from "vue-pie-chart/src/PieChart.vue";

// import mapData from "@highcharts/map-collection/custom/world.geo.json";
// import mapInit from "highcharts/modules/map";

// mapInit(Highcharts);
Maps(Highcharts);
// Highcharts.maps["myWorldMap"] = mapData;

Vue.config.productionTip = false;
Vue.use(HighchartsVue);
Vue.component("pie-chart", PieChart);

// Vue.use(AccumulationChartPlugin);

new Vue({
  router,
  store,
  components: {
    "pie-chart": PieChart,
  },
  render: (h) => h(App),
}).$mount("#app");
