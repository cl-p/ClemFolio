<template>
  <div class="container">
    <div class="button">
      <a href="https://github.com/cl-p?tab=repositories">GitHub</a>
    </div>
    <div>
      <h1>
        Quelques exemples de projets :
      </h1>
    </div>
    <ProjetsCard v-for="(p, index) in projects" :key="index" :project="p" />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjetsCard from '../components/ProjetsCard.vue'

export default {
name: 'HomeView',
components: {
  ProjetsCard
},
data: () => {
  return {
    projects: [
      {
        name: "Booki",
        context: "L’entreprise Booki souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargée d'intégrer l'interface du site avec du code HTML et CSS.",
        skills: [
          "HTML / CSS",
          "Ergonomie",
          "Responsivité",
          "Respect d'une maquette"
        ],
        pictures: [
          "/Projets/bookipart1_desktop.png",
          "/Projets/bookipart2_desktop.png",
          "/Projets/bookipart1_mobile.png",
          "/Projets/bookipart2_mobile.png",
          "/Projets/bookipart3_mobile.png",
          "/Projets/bookipart4_mobile.png",
          "/Projets/bookipart5_mobile.png",
          "/Projets/bookipart6_mobile.png",
        ]
      },
      {
        name: "OhMyFood",
        context: "Une jeune startup qui voudrait s'imposer sur le marché de la restauration. Déjà présente à New-York, elle souhaite désormais faire sa place à Paris. j'ai développé un site mobile first qui réportorie des menus de restaurants gastronomiques.",
        skills: [
          "HTML / CSS / Javascript",
          "Effets CSS graphiques avancés",
          "Structure de navigation",
          "Cohérence graphique",
          "Hébergement"
        ],
        pictures: [
          "/Projets/ohmyfoodpart1_desktop.png",
          "/Projets/ohmyfoodpart2_desktop.png",
          "/Projets/ohmyfoodpart3_desktop.png",
          "/Projets/ohmyfoodpart4_desktop.png",
          "/Projets/ohmyfoodpart5_desktop.png",
          "/Projets/ohmyfoodpart1_mobile.png",
          "/Projets/ohmyfoodpart2_mobile.png",
          "/Projets/ohmyfoodpart3_mobile.png",
          "/Projets/ohmyfoodpart4_mobile.png",
          "/Projets/ohmyfoodpart5_mobile.png",
          "/Projets/ohmyfoodpart6_mobile.png",
        ]
      },
      {
        name: "La Panthère",
        context: "L'agence La Panthère, agence de web design basée à Lyon. L’activité est en perte de vitesse. La fondatrice de l’entreprise s’aperçoit que le site de l’agence apparaît seulement en deuxième page des moteurs de recherche. J'ai amélioré le référencement du site.",
        skills: [
          "HTML / CSS / Javascript",
          "Code maintenable",
          "Optimiser taille/vitesse du site",
          "Optimiser le référencement",
          
        ],
        pictures: [
          "/Projets/pantherepart1_desktop.png",
          "/Projets/pantherepart2_desktop.png",
          "/Projets/pantherepart3_desktop.png",
          "/Projets/pantherepart4_desktop.png",
          
        ]
      },
      {
        name: "Kanap",
        context: "Votre client est Kanap, une marque de canapés qui vend ses produits depuis sa boutique exclusivement. Aujourd’hui, j'ai créé une plateforme de e-commerce pour vendre ses produits sur Internet.",
        skills: [
          "HTML / CSS / Javascript",
          "Créer un plan de test",
          "Base de données",
          "Evenements Javascript",
          
        ],
        pictures: [
          "../Projets/kanap_part1.png",
          "../Projets/kanap_part2.png",
          "../Projets/kanap_part3.png",
          "../Projets/kanap_part4.png",
          "../Projets/kanap_part5.png",
          "../Projets/kanap_part6.png",
          
        ]
      },
      
    ]
  }
}
}
</script>
<style scoped>


  .button{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
  }

  a{
    display: block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-family: sans-serif;
    text-decoration: none;
    color: #333;
    border: 2px solid #333;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    transition: all .35s;
  }

  a span{
    position: relative;
    z-index: 2;
  }

a:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #ff003b;
  transition: all .35s;
}

a:hover{
  color: #030202;
}

a:hover:after{
  width: 100%;
}




</style>