<template>
  <div class="sidebar">
    <div class="brand-name m-2">MATRIX</div>
    <p>
      <router-link to="/accounts" class="sidebar-btn">
        <i class="fa-solid fa-user m-2 accounts"></i>
        <span class="tooltiptext">Accounts</span>
      </router-link>
    </p>
    <p>
      <router-link to="/contacts" class="sidebar-btn">
        <i class="fa-solid fa-users m-2 contacts"></i>
        <span class="tooltiptext">Contacts</span>
      </router-link>
    </p>
    <p>
      <router-link to="/leads" class="sidebar-btn">
        <i class="fa-solid fa-star m-2 leads"></i>
        <span class="tooltiptext">Leads</span>
      </router-link>
    </p>
    <p>
      <router-link to="/opportunities" class="sidebar-btn">
        <i class="fa-brands fa-gg-circle opp m-2"></i>
        <span class="tooltiptext">Opportunities</span>
      </router-link>
    </p>
    <p>
      <router-link to="/reports" class="sidebar-btn">
        <i class="fa-solid fa-chart-line reports m-2"></i>
        <span class="tooltiptext">Reports</span>
      </router-link>
    </p>
    <p>
      <router-link to="/activities" class="sidebar-btn">
        <i class="fa-solid fa-list-check activities m-2"></i>
        <span class="tooltiptext">Activities</span>
      </router-link>
    </p>
    <p>
      <router-link to="/documents" class="sidebar-btn">
        <i class="fa-solid fa-folder documents m-2"></i>
        <span class="tooltiptext">Documents</span>
      </router-link>
    </p>
    <i class="fa-solid fa-circle-user user m-2"></i>
    <i class="fa-solid fa-power-off m-2"></i>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "HelloWorld",
  props: {},

  methods: {},
  mounted: function () {
    $(document).ready(function () {
      $(".user").mouseover(function () {
        $(".brand-name").css("display", "none");
        $(".navbar-menu").toggleClass("is-active");
      });
    });
  },
};
</script>



<style scoped>
.sidebar {
  background-color: #1e3d73;
  min-height: 100vh;
  color: rgb(246, 251, 255);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
}

.sidebar-btn {
  color: rgb(246, 251, 255);
  text-decoration: none;
  position: relative;
  display: inline-block;
}
.sidebar-btn :hover {
  color: #3a90d4;
  text-decoration: none;
}

.sidebar-btn .tooltiptext {
  visibility: hidden;
  /* width: 120px; */
  margin: 5px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 3px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

.sidebar-btn:hover .tooltiptext {
  visibility: visible;
}
</style>
