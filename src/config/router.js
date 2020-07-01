import Vue from "vue";
// Dependecia para gerenciar as rotas
import VueRouter from "vue-router";

//Importação dos componentes para as rotas, a serem carregados no componente  Content.Vue
import Postagens from "@/components/pages/Postagens";
import Albuns from "@/components/pages/Albuns";
import Todos from "@/components/pages/Todos";
import Home from "@/components/pages/Home";

Vue.use(VueRouter);

const routes = [
   {
      path: "/",
      name: "Home",
      component: Home
   },
   {
      path: "/Postagens",
      name: "Postagens",
      component: Postagens
   },
   {
    path: "/Albuns",
    name: "Albuns",
    component: Albuns
  },
  {
   path: "/Todos",
   name: "Todos",
   component: Todos
 },

];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
