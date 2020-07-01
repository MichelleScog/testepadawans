<template>
   <footer class="footer">
      <span>
         Feito por:
         <strong>Michelle Scognamillo</strong> &copy; 2020
      </span>
   </footer>
</template>

<script>
export default {
   name: "Footer",
   data() {
      return {};
   }
};
</script>

<style>
.footer {
   grid-area: footer;
   background-color: #9A7DA8;
   color: #FEFEFE;

   display: flex;
   align-items: center;
   justify-content: flex-end;
   padding-right: 10px;
}
</style>