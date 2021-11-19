<template>
  <div class="main-wrapper">
    <div class="start-column">
      <label> {{ number + 1 }}
        <input type="checkbox" v-model="productData.checked">
      </label>
    </div>
    <div class="img-wrapper">
      <img class="img" :src="productData.image" height="100%" width="100%" ref="myImg" />
    </div>
    <div class="card-info-wrapper">
      <div class="card-name">{{ productData.name }}</div>
      <div class="card-info">{{ productData.info }}</div>
    </div>
    <div class="price">{{ productData.price }}₽</div>
    <div class="last-column">
      <label class="input-label">
        Колличество
        <input
          class="input"
          type="number"
          min="1" max="99"
          v-model="productData.quantity"
          @input="counterHandler(productData.quantity)"
        >
      </label>
      <div class="delete" @click="deleteFromCart">
        удалить
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdCardInCart",
  props: {
    productData: {
      type: Object,
      default: function() {
        return {};
      }
    },
    number: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.$set(this.productData, "checked", false);
  },
  methods: {
    counterHandler() {
      this.$emit("counterHandler");
    },
    deleteFromCart() {
      this.$emit("deleteFromCart");
    }
  }
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #b8b8b8;
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(5, 20, 191, 0.2);
  min-height: 160px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.main-wrapper > div {
  margin: 6px;
}

.img-wrapper {

  min-width: 120px;
  min-height: 100px;
}

.card-info-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 240px;
  max-height: 136px;
  overflow: hidden;
}

.card-info-wrapper > div {
  margin: 6px;
}

.input-label {
  width: 100px;
  margin: 4px;
}

.input {
  width: 100%;
}

.start-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.start-column > label {
  min-width: 40px;
}

.last-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.delete {
  color: #e64f5c;
}

.delete:hover {
  color: #75282e;
  cursor: pointer;
}
</style>