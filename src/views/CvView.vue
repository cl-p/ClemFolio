<template>
    <div class="container">
      <div>
        <div class="text">
          Bonjour, <br>
          Je m'appelle Clémentine. 
        </div>
        <div class="img">
          <img src="../assets/imgCV0.png" alt="dessin femme">
        </div>
      </div>
      <div>
        <div class="img">
          <img src="../assets/Image_cv_1.png" alt="dessin femme derriere un ordinateur" class="img-vignette">
        </div>
      </div>
      <div>
        <div class="text">
          Avant ça, j'ai fais :
        </div>
        <div class="img">
          <img src="../assets/image_CV_2.png" alt="dessin femme ayant un diplome" class="img-vignette">
        </div>
        <div class="text">
          (j'ai mon bac aussi)
        </div>
      </div>
      <div>
        <div class="text">

        </div>
        <div class="img">
          <img src="../assets/Exp.png" alt="dessin femme sur canapé" class="img-vignette2">
        </div>
        <div class="text">
          Vous pouvez télécharger la version plus détaillée et plus sérieuse juste ci dessous.
        </div>
      </div>
      <div>
        <a href="./CurriculumVitae_Clementine_Pardieu.pdf" download><img src="../assets/Download.png" alt="dessin femme"></a>
      </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  //name: 'HomeView',
  //components: {
    //HelloWorld
  //}
}
</script>
<style>

.img{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.img-vignette{
  height: 400px;
}
.img-vignette2{
  height: 600px;
}
.text{
  padding-bottom: 30px;
}
@media (max-width: 425px){
  .img-vignette, .img-vignette2{
    height: 260px;
  }

 }
</style>