import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import * as images from "@/assets/images";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    favorites: [],
    isFavoriteEmpty: true,
    cart: [],
    fullPrise: 0,
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
      state.products.map((el) => {
        el.isFavorite = false;
        el.quantity = 1;
        el.price = Math.floor(Math.random() * 1000);
        let keys = Object.keys(images);
        el.image = images[keys[(keys.length * Math.random()) << 0]];
      });
    },
    SET_CART: (state, productData) => {
      if (state.cart.length) {
        let isAlreadyExist = false;
        state.cart.map(function (el) {
          if (el.id === productData.id) {
            isAlreadyExist = true;
            el.quantity = el.quantity + 1;
          }
        });
        if (!isAlreadyExist) {
          state.cart.push(productData);
        }
      } else {
        state.cart.push(productData);
      }
    },
    TOGGLE_FAVORITES: (state, productData) => {
      state.products.map((el) => {
        if (el.uid === productData.id) {
          el.isFavorite = !el.isFavorite;
        }
      });
    },
    COMPUTE_FULL_PRICE: (state) => {
      state.fullPrise = 0;
      state.cart.map((el) => {
        state.fullPrise += el.price * el.quantity;
      });
    },
    REMOVE_FROM_CART: (state, index) => {
      let delItem = state.cart.splice(index, 1);
      state.fullPrise -= delItem[0].price * delItem[0].quantity;
    },
    UPDATE_CART: (state, arr) => {
      state.cart = arr;
    },
    IS_FAVORITE_EMPTY(state) {
      let tmp = true;
      state.products.map((el) => {
        if (el.isFavorite) {
          tmp = false;
        }
      });
      state.isFavoriteEmpty = tmp;
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
    ADD_TO_CART({ commit }, productData) {
      commit("SET_CART", productData);
    },
    TOGG_FAVORITES({ commit }, productData) {
      commit("TOGGLE_FAVORITES", productData);
    },
    DO_FULL_PRICE({ commit }) {
      commit("COMPUTE_FULL_PRICE");
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    UPDATE_CART({ commit }, arr) {
      commit("UPDATE_CART", arr);
    },
    IS_FAVORITE_EMPTY({ commit }) {
      commit("IS_FAVORITE_EMPTY");
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    FULL_PRICE(state) {
      return state.fullPrise;
    },
    IS_EMPTY(state) {
      return state.isFavoriteEmpty;
    },
  },
});

export default store;
