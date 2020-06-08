<template>
  <div class="about">
    <vue-headful title="Sobre Mí" description="Página sobre mí" />
    <menucustom></menucustom>
    <h1>
      ¡¡¡Hola Chic@s!!!
      <br />👋👋👋
    </h1>

    <ul>
      <li>
        <p class="created">
          Este proyecto ha sido creado por
          <br />
          <a href="https://www.linkedin.com/in/vtojeiroa" target="_blank">Víctor Tojeiro</a>
        </p>

        <img src="../assets/fotoVictor.jpg" alt="Imagen de Víctor" title="Imagen de Víctor" />

        <p class="ussing">
          Utilizando:
          <a href="https://www.last.fm/api/?lang=es" target="_blank">la API de Last.fm</a>
          <a href="https://es.vuejs.org/" target="_blank">VUE</a>
          <a href="https://www.npmjs.com/package/axios" target="_blank">la libreria AXIOS</a>

          <a href="https://www.npmjs.com/package/vue-headful" target="_blank">Vue-Headfull</a>
          <a href="https://sweetalert2.github.io" target="_blank">SweetAlert 2</a>
          <a href="https://loading.io/css/" target="_blank">CSS Loader Spiner</a>
          .
        </p>
      </li>
    </ul>
    <footercustom></footercustom>
  </div>
</template>
<script>
//Importo el Menu
import menucustom from "../components/MenuCustom.vue";
//Importo el Footer
import footercustom from "../components/FooterCustom.vue";
export default {
  name: "About",
  components: { menucustom, footercustom }
};
</script>
<style scoped>
.about {
  color: white;
}

img {
  border-radius: 60px;
  max-width: 200px;
  max-height: 200px;
  padding: 0 2rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
}
li {
  background-image: url("../assets/entrada.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid blue;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 80%;
}
.created {
  flex-basis: 30%;
  background: rgba(3, 118, 250, 0.5);
}

.ussing {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

p {
  color: rgb(168, 33, 67);
  background: rgba(3, 118, 250, 0.3);
  text-shadow: 2px 2 px black;
  padding: 1.25rem;
  font-size: 1.25rem;
  font-weight: bolder;
}
a {
  color: white;
  background: rgba(3, 118, 250, 0.3);
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
}

@media (min-width: 400px) {
  li {
    width: 60%;
  }
}

@media (min-width: 700px) {
  li {
    flex-direction: row;
    width: 60%;
  }
}
@media (min-width: 900px) {
  li {
    width: 60%;
  }
}
</style>
