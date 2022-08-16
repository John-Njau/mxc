<template>
  <div class="home">
    <div class="columns">
      <div class="column side-col is-1">
        <Sidebar />
      </div>
      <div class="column">
<h1>Opportunities page</h1>        <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
  </div>
</template>
<script>


import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "homeView",
  components: {
    Sidebar,
   },
  mounted() {
    document.title = "Opportunities";
  },
};
</script>
<style scoped>

</style>