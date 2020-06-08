<template>
  <div class="topArtists">
    <!-- Uso headful para personalizar el nombre de la página -->

    <vue-headful title="Artistas Top" description="Página de Artistas" />

    <menucustom></menucustom>

    <h1>La Lista de los Artistas más escuchados</h1>
    <!-- Implementación del Buscador -->
    <article>
      <label for="bySearch">Buscar:</label>
      <input
        v-model="search"
        id="search"
        name="bySearch"
        type="search"
        placeholder="Busca tu grupo o artista"
      />
      <br />
      <button class="reset" @click="search = ''">Limpiar el buscador</button>
    </article>
    <!-- Importo la animación de CSS de cargando -->

    <div v-show="loading" class="lds-ripple">
      <div></div>
      <div></div>
    </div>

    <topartiststable :artists="filteredArtists"></topartiststable>

    <footercustom></footercustom>
  </div>
</template>

<script>
//Importo la API
import api from "@/api/index.js";
//Importo la lista de Artistas
import topartiststable from "../components/TopArtistsTable.vue";
//Importo el Menu
import menucustom from "../components/MenuCustom.vue";
//Importo el Footer
import footercustom from "../components/FooterCustom.vue";
// Importo Sweet Alert 2
import Swal from "sweetalert2";

export default {
  name: "TopArtists",
  components: { topartiststable, menucustom, footercustom },
  data() {
    return {
      artists: [],
      search: "",
      loading: true
    };
  },
  /* Utilizo la función para obtener los datos de la API para cargar en la página */

  created() {
    api.getArtists().then(response => {
      this.artists = response.data.topartists.artist;
      this.loading = false;

      /* Ordeno la lista por el número de oyentes, de mayor a menor */
      this.artists.sort(function(a, b) {
        return b.listeners - a.listeners;
      });
    });
  },

  /* Filtro los datos de los artistas. Si no encuentra ninguno salta mensaje */

  computed: {
    filteredArtists() {
      let result = this.artists;
      if (!this.search) {
        return result;
      } else {
        result = result.filter(artist =>
          artist.name.toLowerCase().includes(this.search.toLowerCase())
        );
        if (!result.length) {
          Swal.fire({
            title:
              "Con los parametros introducidos no hemos encontrado ningún artista",
            text: "Vuelve a intentarlo",
            confirmButtonText: "Ok"
          });
        }
        return result;
      }
    }
  }
};
</script>

<style scoped>
label {
  color: aquamarine;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}
input {
  font-size: 0.8rem;

  color: black;
  border: 1px solid blue;
}

::-webkit-input-placeholder {
  color: black;
}
button {
  margin: 0.5rem;
  padding: 0.2rem;
  border: 1px solid blue;
  border-radius: 5px;
  background: rgba(153, 144, 144, 0.749);
  font-size: 0.5rem;
  font-weight: bolder;
  width: 5rem;
  color: rgb(168, 33, 67);
  text-shadow: 1px 1px black;
}

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
@media (min-width: 600px) {
  label {
    color: aquamarine;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  input {
    font-size: 1.2rem;

    color: black;
    border: 2px solid blue;
  }

  ::-webkit-input-placeholder {
    color: black;
  }
  button {
    margin: 0.5rem;
    padding: 0.2rem;
    border: 2px solid blue;
    border-radius: 5px;
    background: rgba(153, 144, 144, 0.749);
    font-size: 1rem;
    font-weight: bolder;
    width: 10rem;
    color: rgb(168, 33, 67);
    text-shadow: 2px 2 px black;
  }
}

@media (min-width: 900px) {
  label {
    color: aquamarine;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  input {
    font-size: 1.2rem;

    color: black;
    border: 2px solid blue;
  }

  ::-webkit-input-placeholder {
    color: black;
  }
  button {
    margin: 0.5rem;
    padding: 0.2rem;
    border: 2px solid blue;
    border-radius: 5px;
    background: rgba(153, 144, 144, 0.749);
    font-size: 1rem;
    font-weight: bolder;
    width: 10rem;
    color: rgb(168, 33, 67);
    text-shadow: 2px 2 px black;
  }
}
</style>
