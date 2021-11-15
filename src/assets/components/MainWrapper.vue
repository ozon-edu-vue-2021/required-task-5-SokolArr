<template>
  <div class="main-wrapper">
    <HeaderWrapper/>
    <CardsMainWrapper v-if="true"/>
    <div class="footer">
      <div class="water-mark">Сделано А.И. 2021 Route 256</div>
    </div>
  </div>
</template>

<script>
import CardsMainWrapper from "@/assets/components/CardsMainWrapper";
import HeaderWrapper from "@/assets/components/HeaderWrapper";
export default {
  name: "MainWrapper",
  components:{
    CardsMainWrapper,
    HeaderWrapper,
  },
};
</script>

<style scoped>
.main-wrapper{
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  width: auto;
  max-width: 1600px;
  min-width: 700px;
  /*max-height: 1200px;*/
  border: 1px solid #c2c2c2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); /* Параметры тени */
}
.footer{
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
.water-mark{
  color: #929292;
  font-style: italic;
  margin-right: 20px;
}

</style>