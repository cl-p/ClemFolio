import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MotivationsView from '../views/MotivationView.vue'
import CurriculumView from '../views/CvView.vue'
import ProjetsView from '../views/ProjetsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/motivations',
    name: 'motivations',
    component: MotivationsView
  },
  {
    path: '/projets',
    name: 'projets',
    component: ProjetsView
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: CurriculumView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
