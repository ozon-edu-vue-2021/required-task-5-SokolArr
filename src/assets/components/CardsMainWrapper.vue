<template>
  <div>
    <div class="card-main-title">
      Всего {{ this.$store.state.products.length }} товаров.
    </div>
    <div class="cards-main">
      <div
        class="prod-card-wrapper"
        v-for="card in PRODUCTS"
        :key=card.uid
      >
        <ProdCard
          :card-id="card.uid"
          :card-info="card.description"
          :card-name="card.dish"
          :card-price="Math.floor(Math.random()*1000)"
          :image="randomProperty(images)"
          @addToCart="addToCart"
        />
      </div>
    </div>

  </div>
</template>

<script>
import ProdCard from "@/assets/components/Cards/ProdCard";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
import * as images from "@/assets/images";

export default {
  name: "CardMainWrapper",
  components: {
    ProdCard
  },
  data() {
    return {
      images: images
    };
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
    this.GET_IMAGES_FROM_API();
  },
  computed: {
    ...mapGetters([
      "PRODUCTS"
    ])
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API",
      "GET_IMAGES_FROM_API",
      "ADD_TO_CART"
    ]),
    randomProperty(obj) {
      let keys = Object.keys(obj);
      return obj[keys[keys.length * Math.random() << 0]];
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
      console.log(data);
    }
  }
};
</script>

<style scoped>
.cards-main {
  width: 100%;
  height: 100%;
  min-height: 1000px;
  margin-bottom: 20px;
  /*border: 1px solid #9c9c9c;*/
  border-radius: 6px;

  /*display: flex;*/
  /*flex-direction: row;*/
  /*flex-wrap: wrap;*/
  /*align-content: flex-start;*/
  /*justify-content: space-between;*/

  grid-gap: 1px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  overflow: auto;
  padding: 40px;
  background: #f8f8f8;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5); /* Параметры тени */
}

.card-main-title {
  margin-bottom: 5px;
}

.prod-card-wrapper {
  height: fit-content;
  max-width: 280px;
  min-height: 240px;
  max-height: 520px;
  margin: 5px;
  border: 1px solid #b8b8b8;
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(5, 20, 191, 0.2); /* Параметры тени */
}

.prod-card-wrapper:hover {
  /*background: #eef1ff;*/
  /*cursor: pointer;*/
}
</style>