<template>
  <div class="card-wrapper">
    <div class="card-header">
    </div>
    <div class="img-wrapper">
      <img class="img" :src="productData.image" height="100%" width="100%" ref="myImg" />
    </div>
    <div class="card-info-wrapper">
      <div class="price">{{ productData.price }}₽</div>
      <br>
      <div class="card-name">{{ productData.dish }}</div>
      <br>
      <div class="card-info">{{ productData.description }}</div>
    </div>
    <div class="footer">
      <button
        type="button"
        class="btn add-to-card"
        @click="addToCart"
      >
        В корзину
      </button>
      <div
        v-if="!productData.isFavorite"
        class="add-to-favorites"
        @click="addToFavorites()"
      >
        {{ favoriteText }}
      </div>
      <div
        v-if="productData.isFavorite"
        class="add-to-favorites"
        @click="addToFavorites()"
      >
        {{ favoriteText }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProdCard",
  data() {
    return {
      productDataSend: {},
      favoriteText: this.favorite(!this.productData.isFavorite)
    };
  },
  props: {
    productData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  mounted() {
    this.productDataSend.id = this.productData.uid;
    this.productDataSend.name = this.productData.dish;
    this.productDataSend.info = this.productData.description;
    this.productDataSend.price = this.productData.price;
    this.productDataSend.image = this.productData.image;
    this.productDataSend.quantity = 1;
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.productDataSend);
    },
    addToFavorites() {
      this.productData.isFavorite = !this.productData.isFavorite;
      this.favoriteText = this.favorite(!this.productData.isFavorite);
      this.$emit("addToFavorites", this.productData);
    },
    favorite(answ) {
      if (answ) {
        return "Вернуть в избранное";
      } else {
        return "Удалить из избранного";
      }
    }
  }
};
</script>

<style scoped>
.card-wrapper {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  max-width: 280px;
  min-height: 240px;
  max-height: 520px;
  margin: 5px;
  border: 1px solid #b8b8b8;
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(5, 20, 191, 0.2);
}

.img-wrapper {
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
}

.card-info-wrapper {
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 16px;
  width: 100%;
  min-height: 60px;
}

.card-header {
  margin-bottom: 6px;
}

.price {
  font-weight: bold;
}

.card-info {
  color: #545454;
  height: 60px;
  overflow: hidden;
}

.btn {
  background: #005bff;
  color: white;
  border: 0;
  border-radius: 6px;
  height: 38px;
  width: 100px;
  font-weight: bold;
  font-size: 1em;
}

.btn:hover {
  background: #0c57d7;
  cursor: pointer;
}

.btn:active {
  background: #063587;
}

.footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.add-to-favorites {
  color: #ff005e;
  cursor: pointer;
  width: fit-content;
  max-width: 100px;
}

.add-to-favorites:hover {
  color: #bb0042;
}

.add-to-favorites:active {
  color: #7c002c;
}
</style>