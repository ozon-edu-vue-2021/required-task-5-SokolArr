import Vue from "vue";
import Router from "vue-router";
import CardsMainWrapper from "@/assets/components/CardsMainWrapper";
import CartWrapper from "@/assets/components/CartWrapper";

Vue.use(Router);
let router = new Router({
  routes: [
    {
      path: "/",
      name: "catalog",
      component: CardsMainWrapper,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: CardsMainWrapper,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartWrapper,
      props: true,
    },
  ],
});
export default router;
