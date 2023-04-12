<template>
  <div>
    <nav>
       <Header></Header>
    </nav>
    <router-view/>
    <Footer></Footer>
  </div>

</template>
<script>
import Footer from './components/Footer.vue';

import Header from './components/Header.vue';

  export default{
    components: { Header, Footer}
}



</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}


</style>
