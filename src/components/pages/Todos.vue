<template>
  <div class="todos">
      <h1>TO-DOs</h1>
      <hr />
      <b-table hover striped :items="todos" :fields="fields" :current-page="currentPage" :per-page="perPage">
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
   name:"todos",
    data() {
      return {
         todos: [],
         currentPage: 1,
         perPage: 5,
         totalRows: 1,
         fields: [
            {
               key: "id",
               label: "Código",
               sortable: true,
            },
            {
               key: "title",
               label: "Título",
               sortable: true
            },
            {
               key: "completed",
               label: "Concluído",
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
      carregarTodos() {
         //Chamada da API para carregar as informações
         const url = `https://jsonplaceholder.typicode.com/todos`;
         axios.get(url).then(res => {
            this.todos = res.data;

            this.totalRows = this.todos.length

            this.todos = res.data.map(todo => {
               return {
                  id: todo.id,
                  title: todo.title,
                  completed: (todo.completed)?"Sim":"Não",
               };
            });

         });
      },
   },
   mounted() {
      this.carregarTodos();
   }
}

</script>

<style>
</style>