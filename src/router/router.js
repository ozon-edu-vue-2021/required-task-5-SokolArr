import Vue from "vue";
import Router from "vue-router";
import CardsMainWrapper from "@/components/CardsMainWrapper";
import CartWrapper from "@/components/CartWrapper";
import FavoritesWrapper from "@/components/FavoritesWrapper";

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
      component: FavoritesWrapper,
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
