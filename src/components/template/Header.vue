<template>
   <header class="header">
      <img src="@/assets/logo.png" width="200" alt="Logo" />
   </header>
</template>

<script>
export default {
   name: "Header",
};
</script>

<style>
.header {
   grid-area: header;
   background: #5f3473;

   display: flex;
   justify-content: left;
   align-items: center;
   padding: 20px;
}
</style>