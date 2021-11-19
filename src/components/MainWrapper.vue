<template>
  <div class="main-wrapper">
    <HeaderWrapper />
    <router-view />
    <div class="footer">
      <div class="water-mark">Сделано А.И. 2021 Route 256</div>
    </div>
  </div>
</template>

<script>
import HeaderWrapper from "@/components/HeaderWrapper";
import { mapActions } from "vuex";

export default {
  name: "MainWrapper",
  components: {
    HeaderWrapper
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  methods: {
    ...mapActions([
      "GET_PRODUCTS_FROM_API"
    ])
  }
};
</script>

<style scoped>
.main-wrapper {
  margin: 20px auto;
  padding: 10px;
  width: auto;
  max-width: 1600px;
  min-width: 940px;
  border: 1px solid #c2c2c2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.footer {
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  margin: 0;
  height: 60px;
  border: 1px solid #d2d2d2;
  border-radius: 6px;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.water-mark {
  color: #929292;
  font-style: italic;
  margin-right: 20px;
}

</style>