<template>
  <div class="error">
    <!-- Uso headful para personalizar el nombre de la página -->

    <vue-headful title="Error 404" description="Página de Error" />

    <!-- VISTA DEL MENÚ -->

    <menucustom></menucustom>

    <!-- CONTENIDO -->

    <h1>ERROR - 404</h1>

    <p>No hemos encontrado la página que estas buscado</p>

    <!-- VISTA DEL FOOTER -->

    <footercustom></footercustom>
  </div>
</template>

<script>
//IMPORTO EL MENU
import menucustom from "../components/MenuCustom.vue";

//IMPORTO EL FOOTER
import footercustom from "../components/FooterCustom.vue";

export default {
  name: "Error",
  components: { menucustom, footercustom }
};
</script>

<style scoped>
p {
  color: whitesmoke;
  font-size: 2rem;
}
</style>
