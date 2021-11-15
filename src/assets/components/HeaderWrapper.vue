<template>
  <div class="header-main">
    <div class="in-header title">
      <div class="title-text"> Магазин случайных продуктов!
      </div>
    </div>
    <div class="in-header cart">
      В корзине: {{ inCart }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderWrapper",
  data() {
    return {
      inCart: 0
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400&display=swap');

.header-main {
  color: white;
  height: 60px;
  width: 100%;
  /*border: 2px solid blue;*/
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 10px;
  align-items: center;
  border-radius: 6px;
  background: #005bff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5); /* Параметры тени */
}

.in-header {
  margin: 5px;
  display: flex;
  align-items: center;
}

.cart {
  /*border: 1px solid black;*/
  border-left: 2px solid #0053e6;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  min-width: fit-content;
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
  /*border: 1px solid black;*/
  font-size: 2em;
}

.title-text {
  margin-left: 14px;
}
</style>