<template>
   <div id="app">
      <Header title="Teste Padawan"></Header>
      <Menu></Menu>
      <Content></Content>
      <Footer></Footer>
   </div>
</template>

<script>

// Importação do componentes que compoe o layout

import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
   name: "App",
   components: { Header, Menu, Content, Footer},

};
</script>

<style>
* {
   font-family: "Lato", sans-serif;
}

body {
   margin: 0;
}

#app {
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

   height: 100vh;
   display: grid;
   grid-template-rows: 60px 1fr 40px;
   grid-template-columns: 300px 1fr;
   grid-template-areas:
      "header header"
      "menu content"
      "menu footer";
}

/* Customização da paginação das tabelas */

.customPagination > li > a {
  color: #6f42c1;
}

.customPagination > li.active > a,
.customPagination > li > a:hover
{
  color: #FFF;
  background-color: #6f42c1!important;
  border: #FFF;
}

/* Limitando a largura da coluna que contem os botoes de ações das tabelas dos componetes do diretorio pages */

.acoes{
   width: 150px;

}
</style>