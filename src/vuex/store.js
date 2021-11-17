import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    images: [],
    cart: [],
    fullPrise: 0,
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_IMAGES_TO_STATE: (state, images) => {
      state.images = images;
    },
    SET_CART: (state, productData) => {
      if (state.cart.length) {
        let isAlreadyExist = false;
        state.cart.map(function (el) {
          if (el.id === productData.id) {
            isAlreadyExist = true;
            el.quantity = el.quantity + 1;
            //console.log(el.quantity);
          }
        });
        if (!isAlreadyExist) {
          state.cart.push(productData);
        }
      } else {
        state.cart.push(productData);
      }
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
    DO_FULL_PRICE({ commit }) {
      commit("COMPUTE_FULL_PRICE");
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    UPDATE_CART({ commit }, arr) {
      commit("UPDATE_CART", arr);
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
    FULL_PRICE(state) {
      return state.fullPrise;
    },
  },
});

export default store;
