<template>
  <div class="card-wrapper">
    <div class="card-header">
    </div>
    <div class="img-wrapper">
      <img class="img" :src="image" height="100%" width="100%" alt="img" />
    </div>
    <div class="card-info-wrapper">
      <div class="price">{{ cardPrice }}₽</div>
      <br>
      <div class="card-name">{{ cardName }}</div>
      <br>
      <div class="card-info">{{ cardInfo }}</div>
    </div>
    <button
      type="button"
      class="btn add-to-card"
      @click="addToCart"
    >
      В корзину
    </button>
  </div>
</template>

<script>
export default {
  name: "ProdCard",
  data() {
    return {
      productData: {}
    };
  },
  mounted() {
    this.productData.id = this.cardId;
    this.productData.name = this.cardName;
    this.productData.info = this.cardInfo;
    this.productData.price = this.cardPrice;
    this.productData.image = this.image;
    this.$set(this.productData, "quantity", Number(1));
  },
  props: {
    cardId: {
      type: String,
      default: ""
    },
    cardName: {
      type: String,
      default: "Стандартное название"
    },
    cardInfo: {
      type: String,
      default: "Стандартное описание"
    },
    cardPrice: {
      type: Number,
      default: 0
    },
    image: {
      type: String
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.productData);
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

}

.img-wrapper {
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  /*border: 1px solid black;*/
  border-radius: 6px;
}

.card-info-wrapper {
  /*border: 1px solid black;*/
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
</style>