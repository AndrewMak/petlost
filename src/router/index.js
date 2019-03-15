import Vue from "vue";
import VueRouter from "vue-router";

import home from "@/components/Home";
import pet from "@/components/Pet";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      name: "Home",
      component: home
    },
    {
      path: "/pet/:id",
      name: "Pet",
      props: true,
      component: pet
    }
  ],
  mode: "history"
});
