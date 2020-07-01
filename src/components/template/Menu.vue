<template>
   <aside class="menu">
     <div class="d-flex flex-column">

      <router-link to="Postagens">
         <b-button block variant="outline-light">POSTAGENS</b-button>
      </router-link>
      <router-link to="Albuns">
         <b-button block variant="outline-light">ALBUNS</b-button>
      </router-link>
      <router-link to="Todos">
         <b-button block variant="outline-light">TO-DOs</b-button>
      </router-link>
   </div>

   </aside>
</template>

<script>
export default {
   name: "Menu",
};
</script>

<style>
.menu {
   grid-area: menu;
   background-color: #84559a;

   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   padding: 20px;
}

.menu button {
   margin: 10px 0;
}

</style>