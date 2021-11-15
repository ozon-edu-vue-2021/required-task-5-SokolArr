<template>
  <div>
    <div class="cart-title">
      Вы в корзине
    </div>
    <div class="cart-main">
      <div class="cart-order">
        <div class="tools">
          Tools
          <div class="in-tools">
            <label>
              <input type="checkbox" />
              Выбрать все
            </label>
          </div>

        </div>
        <div class="cart-order-title">
          <div class="text-title">
            Ваша корзина:
          </div>
        </div>
        <div class="cart-order-inWrapper">
          <div v-if="CART.length">
            <ProdCardInCart
              v-for="(product,index) in CART"
              :key="product.id"
              :product-data="product"
              :number="index"
              :count="1"
            />
          </div>
          <div v-else style="font-size:1.2em">
            Ваша корзина пуста :с
          </div>

        </div>
      </div>
      <div class="cart-details">
        <div class="btn-wrapper-upper">
          <div class="btn-wrapper">
            <button type="button" class="btn go-to-offer">
              Продолжить оформление
            </button>
          </div>
        </div>
        <div class="in-cart-details">
          В корзине
          <br>
          <br>
          <li>Товары ({{ CART.length }})</li>
        </div>
        <div class="full-price">
          Общая стоимость {{ fullPrice }}₽
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ProdCardInCart from "@/assets/components/Cards/ProdCardInCart";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "CartWrapper",
  components: {
    ProdCardInCart
  },
  computed: {
    ...mapGetters([
      "CART"
    ]),
    fullPrice() {
      let fullPrice = 0;
      this.CART.map(el => {
        fullPrice += el.price;
      });
      return fullPrice;
    }
  },
  methods: {
    ...mapActions([])
  }
};
</script>

<style scoped>
.cart-title {
  margin-bottom: 6px;
}

.cart-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 800px;
  min-width: 940px;
  padding: 10px;
  background: #f8f8f8;
  border-radius: 6px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5); /* Параметры тени */
  margin-bottom: 10px;
}

.cart-order {
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px;
  border-radius: 6px;
  margin: 6px;
  border: 1px solid #c2c2c2;
}

.cart-order-inWrapper {
  min-width: 400px;
  min-height: 800px;
  max-height: 1000px;
  overflow: auto;
  padding: 12px;
}

.cart-details {
  display: flex;
  flex-direction: column;
  background: white;
  height: fit-content;
  padding: 10px;
  border-radius: 6px;
  margin: 6px;
  border: 1px solid #c2c2c2;
}

.tools {
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #c2c2c2;
  width: 100%;
  min-height: 60px;
}

.in-tools {
  display: flex;
  flex-direction: row;
  align-content: center;
}

.cart-order-title {
  display: flex;
  color: white;
  font-weight: bold;
  font-size: large;
  min-height: 40px;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 6px;
  background: #005bff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5); /* Параметры тени */
}

.text-title {
  text-align: center;
  padding: 6px;
  margin: 4px;
}

.btn-wrapper-upper {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
}

.btn-wrapper {
  margin-top: 10px;
  display: flex;
  width: 400px;
  justify-content: center;
}

.btn {
  background: #ff005e;
  color: white;
  border: 0;
  border-radius: 6px;
  height: 46px;
  min-width: 200px;
  width: 100%;
  max-width: 600px;
  font-weight: bold;
  font-size: 1.2em;
}

.btn:hover {
  background: #d0004d;
  cursor: pointer;
}

.btn:active {
  background: #ad0040;
}

.in-cart-details {
  border-top: 1px solid #c2c2c2;
  min-height: 100px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.full-price {
  min-height: 60px;
  margin: 20px;
  border-top: 1px solid #c2c2c2;
  font-size: 1.2em;
}
</style>