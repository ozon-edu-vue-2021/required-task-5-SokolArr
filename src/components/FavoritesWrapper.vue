<template>
  <div>
    <div class="card-main-title">
    </div>
    <div>

      <div v-if="IS_EMPTY" class="if-no-cards">
        Тут ничего нет, выбери любимый товар в каталоге :)
      </div>

      <div v-else class="cards-main">
        <div
          class="prod-card-wrapper"
          v-for="card in PRODUCTS"
          :key=card.uid
        >
          <ProdCardInFav
            v-if="card.isFavorite === true"
            :product-data="card"
            @addToFavorites="addToFavorites"
            @addToCart="addToCart"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ProdCardInFav from "@/components/Cards/ProdCardInFav";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "FavoritesWrapper",
  components: {
    ProdCardInFav
  },
  data() {
    return {
      isFavEmpty: true
    };
  },
  computed: {
    ...mapGetters([
      "PRODUCTS", "IS_EMPTY"
    ])
  },
  mounted() {
    this.IS_FAVORITE_EMPTY();
  },
  methods: {
    ...mapActions([
      "ADD_TO_CART",
      "TOGG_FAVORITES",
      "IS_FAVORITE_EMPTY"
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    addToFavorites(data) {
      this.TOGG_FAVORITES(data);
    }
  }
};
</script>

<style scoped>
.cards-main {
  width: 100%;
  height: 100%;
  min-height: fit-content;
  margin-bottom: 20px;
  border-radius: 6px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  overflow: auto;
  padding: 40px;
  background: #f8f8f8;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.if-no-cards {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 6px;
  text-align: center;
  font-size: 1.2em;
  padding: 40px;
  background: #f8f8f8;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.card-main-title {
  margin-bottom: 5px;
}
</style>