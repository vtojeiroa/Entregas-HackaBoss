<template>
  <div class="home">
    <!-- Logo de Rick y Morty -->
    <header>
      <figure>
        <img src="../assets/logoRM5.jpg" alt="Logo Rick y Morty" title="Logo Rick y Morty" />
      </figure>
    </header>

    <!-- Barra de Búsqueda -->
    <section class="search">
      <label for="bySearch">Busca tu personaje 👉</label>
      <input v-model="search" id="search" name="bySearch" type="search" placeholder="Búsqueda ..." />
    </section>
    <!-- Barra de Búsqueda por id del personaje -->
    <section class="searchId">
      <label for="byId">Busca tu personaje por su ID 👉</label>
      <input
        v-model="id"
        id="byId"
        name="byId"
        type="search"
        placeholder="Introduce el Id del personaje ..."
      />
      <button @click="searchChard(id)">Buscar ID</button>
      <h2>Personajes👇</h2>
      <p v-for="item in char" :key="item.id">{{item.name}}</p>
    </section>

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
// IMPORTANDO LA CONFIGURACION API
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard
  },
  data() {
    return {
      chars: [],
      search: " ",
      char: [],
      id: null
    };
  },
  // función para buscar por ID
  methods: {
    searchChard(id) {
      api.getChard(id).then(response => (this.char = response.data));
    }
  },

  computed: {
    filteredChars() {
      // si search está vacio...
      if (!this.search) {
        return this.chars;
      }
      // si search tiene algo...
      return this.chars.filter(
        char =>
          char.name.toLowerCase().includes(this.search.toLowerCase()) ||
          char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
          char.status.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  //FUNCION PARA OBTENER LOS DATOS CON LOS QUE CREAR LAS CARTAS
  created() {
    api.getAll().then(response => (this.chars = response.data.results));
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
.searchId h2 {
  color: blue;
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
