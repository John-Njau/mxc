import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home.vue";
import AccountsView from "../views/accounts.vue";
import ActivitiesView from "../views/activities.vue";
import ContactsView from "../views/contacts.vue";
import DocumentsView from "../views/documents.vue";
import Leadsview from "../views/leads.vue";
import OpportunitiesView from "../views/opportunities.vue";
import ReportsView from "../views/reports.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: AccountsView,
  }
  ,
  {
    path: "/activities",
    name: "Activities",
    component: ActivitiesView,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactsView,
  },
  {
    path: "/documents",
    name: "Documents",
    component: DocumentsView,
  },
  {
    path: "/leads",
    name: "Leads",
    component: Leadsview,
  },
  {
    path: "/opportunities",
    name: "Opportunities",
    component: OpportunitiesView,
  }
  ,
  {
    path: "/reports",
    name: "Reports",
    component: ReportsView,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
