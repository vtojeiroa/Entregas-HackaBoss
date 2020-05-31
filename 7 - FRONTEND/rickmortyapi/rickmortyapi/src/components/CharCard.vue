<template>
  <div class="home">
    <div class="card" v-for="char in chars" :key="char.id">
      <h2>{{char.name}}</h2>

      <img :src="char.image" alt="Imagen del personaje" />
      <ul class="container">
        <li>Id: {{char.id}}</li>
        <li>Especie:{{char.species}}</li>
        <li>Género: {{char.gender}}</li>
        <li
          :class="{ green: char.status === `Alive`,red: char.status !== `Alive` }"
        >Status: {{char.status}}</li>
        <li>Origen: {{char.origin.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    chars: Array
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border: 2px solid #4edd22;
  margin: 20px 10px;
  color: aqua;
  width: 300px;
  box-shadow: 0 4px 8px 0 #4edd22;
  border-radius: 5px;
}
h2 {
  background-image: url("../assets/fondo.png");
  background-repeat: no-repeat;
  font-size: 40px;
  padding: 10px;
  min-height: 150px;
}
img {
  border-radius: 50%;
  width: 80%;
}
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  margin: 10px;
  border: 1px solid black;
  align-items: center;
  list-style: none;
}

.red {
  color: red;
}
.green {
  color: green;
}

@media (min-width: 650px) {
  .card {
    width: 400px;
  }
  p {
    font-size: 20px;
  }
  @media (min-width: 850px) {
    .card {
      width: 400px;
    }
    li {
      font-size: 20px;
    }
    h2 {
      font-size: 50px;
    }
  }
}
</style>
