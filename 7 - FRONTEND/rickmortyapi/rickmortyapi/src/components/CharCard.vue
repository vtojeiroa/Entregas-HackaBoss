<template>
  <div class="home">
    <div class="card" v-for="char in chars" :key="char.id">
      <h2>{{char.name}}</h2>

      <img :src="char.image" alt="Imagen del personaje" />
      <div class="container">
        <p>Id: {{char.id}}</p>
        <p>Especie:{{char.species}}</p>
        <p>Género: {{char.gender}}</p>
        <p
          :class="green:char.status === 'Alive',red:char.status === 'Dead' ,red:char.status === 'unknown'"
        >Status: {{char.status}}</p>
        <p>Origen: {{char.origin.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    chars: Array
  },
  data() {
    return {};
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
}

.red {
  color: red;
}
.green {
  color: green;
}

.container p {
  margin: 0px;
  color: aqua;
  font-size: bold;
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
    p {
      font-size: 20px;
    }
    h2 {
      font-size: 50px;
    }
  }
}
</style>
