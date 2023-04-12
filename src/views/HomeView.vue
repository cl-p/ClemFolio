<template>
  <div class="home">
    <div class="header">
      <h1>
        Oh! Vous êtes là !
      </h1>
    </div>
    <div class="home-body">
      <img alt="dessin accueil 1" src="../assets/img_accueil_1.png" class="img">
      <br>
      <h1>
        Bienvenu sur le 
      </h1>
      <img alt="logo_clemfolio" src="../assets/LOGO_page_accueil.png">
      <br>
      <h2>
        Ci dessous vous trouverez mon compte Instagram avec quelques unes de mes réalisations les plus récentes. <br>
        J'espère que mon travail vous plaira !
      </h2>
      <img alt="dessin accueil 2" src="../assets/img_accueil_2.png" class="img">
      <h2>
        Bonne journée :) 
      </h2>
    </div>
    
  </div>
</template>

<style>
 .home-body {
  display: flex;
  align-items: center;
  flex-direction: column;
  
 }
 .img{
  height: 500px;
 }

 @media (max-width: 425px){
  .img{
    height: 260px;
  }
 }
</style>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  //name: 'HomeView',
  //components: {
    //HelloWorld
  //}
}
</script>
