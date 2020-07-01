<template>
  <div class="albuns">
      <h1>ALBUNS</h1>
      <hr />
      <b-table hover striped :items="albuns" :fields="fields" :current-page="currentPage" :per-page="perPage">
         <template slot="actions" slot-scope="data">
            <b-button variant="warning" class="mr-2">
               <i class="fa fa-pencil"></i>
            </b-button>
            <b-button variant="danger">
               <i class="fa fa-trash"></i>
            </b-button>
         </template>
      </b-table>
      <b-pagination class="customPagination" size="md" v-model="currentPage" :total-rows="totalRows" :per-page="perPage" />
      <router-link to="/">
         <b-button variant="outline-dark">Voltar</b-button>
      </router-link>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name:"albuns",
    data() {
      return {
         albuns: [],
         currentPage: 1,
         perPage: 5,
         totalRows: 1,
         fields: [
            {
               key: "id",
               label: "Código",
               sortable: true
            },
            {
               key: "title",
               label: "Título",
               sortable: true
            },
            {
               key: "actions",
               label: "Ações",
               class: "acoes text-center",
            }
         ]
      };
   },
   methods: {
      carregarAlbuns() {
         //Chamada da API para carregar as informações
         const url = `https://jsonplaceholder.typicode.com/albums`;
         axios.get(url).then(res => {
            this.albuns = res.data;

            this.totalRows = this.albuns.length

         });
      },
   },
   mounted() {
      this.carregarAlbuns();
   }
}

</script>

<style>

</style>