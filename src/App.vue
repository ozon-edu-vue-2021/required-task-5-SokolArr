<template>
  <div id="app">
    <MainWrapper/>
  </div>
</template>

<script>
import MainWrapper from "@/assets/components/MainWrapper";
export default {
  name: "App",
  components: {
    MainWrapper
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200&family=Play&display=swap');
html{
  /*font-family: "Play", serif;*/
  font-family: 'Exo 2', sans-serif;
}
body{
  background: #eeeeee;
}
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
