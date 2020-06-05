<template>
  <div class="home">
    <!-- Logo de Rick y Morty -->
    <header>
      <figure>
        <img src="../assets/logoRM5.jpg" alt="Logo Rick y Morty" title="Logo Rick y Morty" />
      </figure>
    </header>

    <!-- Búsqueda por id del personaje -->
    <p>
      <label class="type" for="byId">Busca tu personaje por su ID 👉</label>
      <input type="number" v-model="id" id="byId" placeholder="Introduce el Id del personaje ..." />
      <button @click="searchChar(id)">Buscar...</button>
    </p>

    <!-- Personaje buscado por ID -->
    <div v-if="charId.id">
      <button class="reset" @click="(charId = {}), (id = null)">Volver</button>
      <CharCardId :char="charId"></CharCardId>
    </div>

    <div v-else>
      <!--Búsqueda.... -->

      <form id="search">
        <p id="advanced">👇 Busqueda avanzada👇</p>
        <!-- Por Nombre -->
        <label class="type" for="byName">Name:</label>
        <input v-model="search.name" id="byName" type="search" placeholder="Busca ahora..." />

        <!-- Por Género -->
        <p class="type">
          Gender:
          <input type="checkbox" id="male" value="male" v-model="search.gender" />
          <label for="male">Hombre</label>
          <input type="checkbox" id="female" value="female" v-model="search.gender" />
          <label for="female">Mujer</label>
          <input type="checkbox" id="genderUnknown" value="genderunknown" v-model="search.gender" />
          <label for="genderUnknown">Otros</label>
        </p>

        <!-- Por estatus -->
        <p class="type">
          Status:
          <input type="checkbox" id="alive" value="alive" v-model="search.status" />
          <label for="alive">Vivo</label>
          <input type="checkbox" id="dead" value="dead" v-model="search.status" />
          <label for="dead">Muerto</label>
          <input type="checkbox" id="statusUnknown" value="statusunknown" v-model="search.status" />
          <label for="statusUnknown">Ni vivo ni muerto</label>
        </p>
        <button
          class="reset"
          @click="
            search = {
               gender: [],
              status: [],
            }
          "
        >Borrar selección</button>
      </form>
    </div>

    <h2>👇Personajes👇</h2>

    <!-- Código optimizado -->
    <section class="chars">
      <charCard :chars="filteredChars"></charCard>
    </section>
    <!--CÓDIGO POCO OPTIMIZADO
      
        <CharCard
      v-for="char in chars"
      :key="char.id"
      :charName="char.name"
      :charId="char.id"
      :charSpecies="char.species"
      :charGender="char.gender"
      :charImage="char.image"
      :charOriginName="char.origin.name"
    ></CharCard>
     Printeando mi array de la API 
    <ul>
      <li v-for="char in chars" :key="char.id">{{char.name}}</li>
    </ul>-->
  </div>
</template>

<script>
// @ is an alias to /src
import CharCard from "@/components/CharCard.vue";
import CharCardId from "@/components/CharCardId.vue";
// IMPORTANDO LA CONFIGURACION API
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard,
    CharCardId
  },
  data() {
    return {
      id: null,
      chars: [],
      charId: {},
      search: {
        gender: [],
        status: []
      }
    };
  },

  computed: {
    filteredChars() {
      let result = this.chars;

      /* Búsqueda por Nombre */
      if (this.search.name) {
        result = result.filter(char =>
          char.name.toLowerCase().includes(this.search.name.toLowerCase())
        );
      }
      /* Búsqueda por género */
      if (this.search.gender.length) {
        result = result.filter(char =>
          this.search.gender.includes(char.gender.toLowerCase())
        );
      }
      /* Búsqueda por estatus */
      if (this.search.status.length) {
        result = result.filter(char =>
          this.search.status.includes(char.status.toLowerCase())
        );
      }
      return result;
    }
  },

  methods: {
    searchChar(id) {
      if (id > 0) {
        api.getChar(id).then(res => (this.charId = res.data));
      }
    }
  },

  created() {
    api.getAll().then(res => (this.chars = res.data.results));
  }
};
</script>
 <style scoped>
header figure img {
  display: inline-block;
  max-width: 250px;
}
.search {
  padding: 10px;
}
.type {
  color: greenyellow;
}
h2 {
  color: turquoise;
}
label {
  color: blue;
  font-size: 18px;
}

button {
  background: black;
  color: blue;
}

.chars {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100vh;
  max-height: 100vh;
}

p#advanced {
  font-size: 1.5rem;
  color: turquoise;
}

@media (min-width: 650px) {
  header figure img {
    max-width: 500px;
  }
  .chars {
    max-width: 200vh;
    max-height: 200vh;
  }
}

@media (min-width: 850px) {
  header figure img {
    max-width: 1000px;
  }
  p {
    font-size: 20px;
  }
  label {
    font-size: 20px;
  }
  input {
    font-size: 20px;
  }
}
</style>
