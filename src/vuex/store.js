import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    images: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_IMAGES_TO_STATE: (state, images) => {
      state.images = images;
    },
    SET_CART: (state, productData) => {
      state.cart.push(productData);
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios(
        "https://random-data-api.com/api/food/random_food?size=100",
        {
          method: "GET",
        }
      )
        .then((products) => {
          //console.log(products);
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_IMAGES_FROM_API({ commit }) {
      return axios("https://picsum.photos/v2/list?page=2&limit=50", {
        method: "GET",
      })
        .then((images) => {
          //console.log(images.data);
          commit("SET_IMAGES_TO_STATE", images.data);
          return images;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit }, productData) {
      commit("SET_CART", productData);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    IMAGES(state) {
      return state.images;
    },
    CART(state) {
      return state.cart;
    },
  },
});

export default store;
