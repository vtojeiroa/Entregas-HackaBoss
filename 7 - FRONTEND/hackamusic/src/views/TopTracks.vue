<template>
  <div class="topTracks">
    <!-- Uso headful para personalizar el nombre de la página -->

    <vue-headful title="Canciones Top" description="Página de canciones" />

    <menucustom></menucustom>

    <h1>La Lista de las Canciones más escuchadas</h1>

    <!-- Importo la animación de CSS de cargando -->

    <div v-show="loading" class="lds-ripple">
      <div></div>
      <div></div>
    </div>

    <toptrackstable :tracks="tracks"></toptrackstable>

    <footercustom></footercustom>
  </div>
</template>

<script>
//Importo la API
import api from "@/api/index.js";
//Importo la Lista de Canciones
import toptrackstable from "../components/TopTracksTable.vue";
//Importo el Menu
import menucustom from "../components/MenuCustom.vue";
//Importo el Footer
import footercustom from "../components/FooterCustom.vue";
export default {
  name: "TopTracks",
  components: { toptrackstable, menucustom, footercustom },
  data() {
    return {
      tracks: [],
      loading: true
    };
  },

  /* Utilizo la función para obtener los datos de la API para cargar en la página */

  created() {
    api.getTopTracks().then(response => {
      this.tracks = response.data.tracks.track;
      this.loading = false;

      /* Ordeno la lista por el número de oyentes, de mayor a menor */
      this.tracks.sort(function(a, b) {
        return b.listeners - a.listeners;
      });
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
