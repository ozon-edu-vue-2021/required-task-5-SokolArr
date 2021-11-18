<template>
  <div>
    <div class="header-main">
      <div class="in-header title">
        <div class="title-text">
          Магазин случайных продуктов!
        </div>
      </div>
      <router-link v-if=CART.length to="cart" class="in-header cart" style="text-align: center">
        В корзине: {{ CART.length }}
      </router-link>
      <router-link v-else to="cart" class="in-header cart">
        Корзина
      </router-link>
    </div>
    <div class="menu">
      <router-link :to="{name: 'catalog'}" class="in-menu catalog">
        ⌂ Каталог
      </router-link>
      <router-link :to="{name: 'favorites'}" class="in-menu favorites">
        ☆ Избранное
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderWrapper",
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "CART"
    ])
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400&display=swap');

.header-main {
  color: white;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 0;
  align-items: center;
  border-radius: 6px;
  background: #005bff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.in-header {
  margin: 5px;
  display: flex;
  align-items: center;
}

.in-header.cart {
  color: white;
  border-left: 2px solid #0053e6;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  width: fit-content;
  height: 60px;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 0;
  padding-left: 5px;
  padding-right: 5px;
  cursor: pointer;
  -webkit-user-select: none;
}

.cart:hover {
  background: #063587;
}

.title {
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  margin: 0;
  height: 60px;
  font-size: 2em;
}

.title-text {
  margin-left: 14px;
}

.menu {
  display: flex;
  flex-direction: row;
  width: fit-content;
}

.in-menu {
  color: white;
  background: #005bff;
  border-radius: 10px;
  margin: 6px;
  width: 200px;
  height: 40px;
  padding: 6px;
  cursor: pointer;
  -webkit-user-select: none;
  font-size: 1.2em;
  text-align: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 1); /* Параметры тени */
}

a {
  text-decoration: none;
}

a.router-link-active.in-header.cart {
  background: #004fde;
  border-radius: 10px;
  font-weight: 700;
}

a.router-link-exact-active {
  background: #ff005e;
  border-radius: 10px;
  font-weight: 700;
}


.catalog {
  margin-left: 0;
}

.catalog:hover {
  background: #063587;
}

.favorites:hover {
  background: #063587;
}

.favorites:active {
  background: #042969;
}

.catalog:active {
  background: #042969;
}
</style>