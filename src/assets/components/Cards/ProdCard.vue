<template>
<div class="card-wrapper">
  <div class="card-header">
  </div>
  <div class="img">
      <img src="../../images/6123150777.webp" height="100%" width="100%" />
  </div>
  <div class="card-info-wrapper">
    <div class="price">{{price}}</div>
    <br>
    <div class="card-info">{{cardInfo}}</div>
  </div>
  <button type="button" class="btn add-to-card"> В корзину</button>
</div>
</template>

<script>
export default {
  name: "ProdCard",
  data(){
    return{
      cardInfo: 'Ягодная смесь для чая с облепихой и имбирем Мираторг, замороженная, 300 г',
      price: '50p'
    }
  }
};
</script>

<style scoped>
.card-wrapper{
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

}
.img{
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  /*border: 1px solid black;*/
  border-radius: 6px;
}
.card-info-wrapper{
  /*border: 1px solid black;*/
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 16px;
  width: 100%;
  min-height: 60px;
}
.card-header{
  margin-bottom: 6px;
}
.price{
  font-weight: bold;
}
.card-info{
  color: #545454;
}
.btn{
  background: #005bff;
  color: white;
  border: 0;
  border-radius: 6px;
  height: 38px;
  width: 100px;
  font-weight: bold;
  font-size: 1em;
}
.btn:hover{
  background: #0c57d7;
}
.btn:active{
  background: #063587;
}
</style>