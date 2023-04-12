<template>
  <div class="container">
    <span>
      <div class="text">
        <p class="p1">
          Je suis en 1ere année au DIIAGE dans le parcours Développeur. 
          J’ai toujours été passionnée par certains domaines comme l’Art, le Design, la Littérature, la Cuisine, la Bande Dessinée, le Nail Art, la Broderie… 
          Avant le DIIAGE, j’ai fait une formation de développeur web et je me suis rendu compte que le numérique est un domaine où tout est possible, mais je posais à peine le pied dans un tout nouveau monde et je ne savais pas vraiment vers quoi me diriger. 
        </p>
      </div>
      <div class="img1">
        <img src="../assets/img_motiv_1.png" alt="dessin femme sur canapé">
      </div>
    </span>
   <span>
    <div class="text">
      <p class="p2">
        Le DIIAGE forment des développeurs full-stack, je pensais que je pourrais pleinement travailler sur toutes les parties des projets numériques – c’est-à-dire faire de la gestion de projet, et au niveau technique autant de frontend que de backend. Cependant, la formation est majoritairement centrée sur le backend.
      </p>
    </div>
    <div class="img2">
      <img src="../assets/motiv_img_2.png" alt="dessin femme sur canapé">
    </div>
   </span>
    <span>
      <div  class="text">
        <p class="p1">
          J’ai rapidement senti un manque, un besoin, une envie quotidienne de faire des beaux visuels, d’en voir plus du côté utilisateur. Mais ce n’est pas au programme. Je souhaite faire ce qui me motive au quotidien : faire du design numérique, penser à l’expérience utilisateur, faire de la gestion de projet… 
        </p>
      </div>
      <div class="img1">
        <img src="../assets/img_motiv_1.png" alt="dessin femme sur canapé">
      </div>
    </span>
    <span>
      <div class="text">
        <p class="p3">
          Une entreprise m’offre l’opportunité de me prendre en alternance pour travailler au sein de leur pôle design numérique. Lorsque j’ai commencé à me renseigner sur les formations possibles, on m’a immédiatement recommandé l’ESADD. Et après avoir participé aux portes ouvertes, discuté avoir des élèves, visité les locaux, je suis convaincue que la formation mastère Expert du Design Numérique est LA formation qui me permettra de m’épanouir professionnellement. 
        <br>
        Vous pouvez télécharger ma lettre de motivation (en version plus classique) ci-dessous. 
        <br> 
        Merci d’avoir lu mon monologue et bonne journée ! 
        </p>
      </div>
      <div class="img3">
        <img src="../assets/motiv_img_finale.png" alt="dessin femme sur canapé">
      </div>
    </span>

    <div>
      <a href="./Lettredemotivation_Pardieu_Clémentine.pdf" download><img src="../assets/Download.png" alt="dessin femme" class="img-btn"></a>
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

.container{
  padding: 3%;
}

.img{
  display: flex;
  justify-content: flex-start;
}
.img1{
  display: flex;
  justify-content: flex-start;
  margin-top: 0px;
  margin-bottom: 10px;
}
img{
  height: 300px;
}

.img2{
  display: flex;
  justify-content: flex-end;
}

.img3{
  display: flex;
  justify-content: center;
}

.text{
  display: flex;
  justify-content: center;
}
p{
  width: 55%;
}
.p1{
  text-align: justify;
  position: relative;
  right: 10%;
 
}
.p2{
  text-align: justify;
  position: relative;
  left: 15%;

}
.p3{
  text-align: justify;
  padding-top: 10px;
}

@media (max-width: 425px) {
  img{
    height: 150px;
  }
}
</style>