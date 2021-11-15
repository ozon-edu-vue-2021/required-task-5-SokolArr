<template>
<div class="cards-main">

  <div
    class="prod-card-wrapper"
    v-for="card in numbersOfCards"
    :key=card
  >
    <ProdCard/>
  </div>
</div>
</template>

<script>
import ProdCard from "@/assets/components/Cards/ProdCard";
export default {
  name: "CardMainWrapper",
  components:{
    ProdCard,
  },
  data(){
    return{
      numbersOfCards:12
    }
  }
};
</script>

<style scoped>
.cards-main{
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
  grid-template-columns: repeat(4,1fr);
  justify-items: center;

  overflow: auto;
  padding:40px;
  background: #f8f8f8;
  box-shadow: 0 0 2px rgba(0,0,0,0.5); /* Параметры тени */
}
.prod-card-wrapper{
  height: fit-content;
  max-width: 280px;
  min-height: 240px;
  margin: 5px;
  border: 1px solid #b8b8b8;
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(5, 20, 191, 0.2); /* Параметры тени */
}
.prod-card-wrapper:hover{
  /*background: #eef1ff;*/
  cursor: pointer;
}
</style>