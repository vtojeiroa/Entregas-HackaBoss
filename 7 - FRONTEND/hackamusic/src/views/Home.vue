<template>
  <div class="home">
    <!-- Uso headful para personalizar el nombre de la página -->
    <vue-headful title="HackaMusic" description="Página de Inicio" />

    <menucustom></menucustom>
    <h1>Los 50 TAGS Principales</h1>

    <!-- Importo la animación de CSS de cargando -->

    <div v-show="loading" class="lds-ripple">
      <div></div>
      <div></div>
    </div>

    <toptagstable :tags="tags"></toptagstable>

    <footercustom></footercustom>
  </div>
</template>

<script>
//Importo la API
import api from "@/api/index.js";
//Importo los Tags
import toptagstable from "../components/TopTagsTable.vue";
//Importo el Menu
import menucustom from "../components/MenuCustom.vue";
//Importo el Footer
import footercustom from "../components/FooterCustom.vue";
export default {
  name: "Home",
  components: { toptagstable, menucustom, footercustom },
  data() {
    return {
      tags: [],
      loading: true
    };
  },

  /* Utilizo la función para obtener los datos de la API para cargar en la página */

  created() {
    api.getTopTags().then(response => {
      this.tags = response.data.tags.tag;
      this.loading = false;
    });
  }
};
</script>

<style scoped>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
