<template>
  <div class="main-wrapper">
    <div class="start-column">
      <label> {{ number + 1 }}
        <input type="checkbox">
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
    <label class="input-label">
      Колличество
      <input
        class="input"
        type="number"
        min="1" max="99"
        :value="count"
        v-on:click="counterHandler(count)"
      >
    </label>
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
    },
    count: {
      type: Number,
      default: 1
    }
  },
  methods: {
    counterHandler(count) {
      this.count++;
      this.$emit("counterHandler", count);
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
  box-shadow: 0 0 8px rgba(5, 20, 191, 0.2); /* Параметры тени */
  min-height: 160px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.main-wrapper > div {
  margin: 6px;
}

.img-wrapper {
  height: 160px;
  width: 160px;
}

.card-info-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 280px;
  max-height: 136px;
  overflow: hidden;
}

.card-info-wrapper > div {
  margin: 6px;
}

.input-label {
  width: 100px;
  margin: 10px;
}

.input {
  width: 100%;
}

.start-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>