import { createRouter, createWebHistory } from 'vue-router'
import insertView from '../views/InsertarView.vue'
import searchView from '../views/BuscarView.vue'
import showView from '../views/MostrarView.vue'

const routes = [
  {
    path: '/',
    name: 'insertar',
    component: insertView,
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: searchView,
  },
  {
    path: '/mostrar',
    name: 'mostrar',
    component: showView,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
