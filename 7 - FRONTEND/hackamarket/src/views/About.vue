<template>
  <div id="app">
    <div class="about">
      <!-- USO HEADFUL PARA PERSONALIZAR EL NOMBRE DE LA PÁGINA -->
      <vue-headful title="Sobre Mí" description="Página sobre mí" />
      <!-- VISTA DEL MENÚ -->
      <menucustom></menucustom>

      <!-- CONTENIDO -->
      <ul>
        <li>
          <p class="created">
            Este proyecto ha sido creado por
            <br />
            <a href="https://www.linkedin.com/in/vtojeiroa" target="_blank">Víctor Tojeiro</a>
            <br />
            <br />
            <img
              class="photo"
              src="../assets/fotoVictor.jpg"
              alt="Imagen de Víctor"
              title="Imagen de Víctor"
            />
          </p>
          <img class="biker" src="../assets/FotoMoto.jpeg" alt="Imagen motorista saludando" />
          <p class="ussing">
            Utilizando:
            <a href="https://es.vuejs.org/" target="_blank">VUE</a>
            <a href="https://www.npmjs.com/package/express" target="_blank">Express</a>
            <a href="https://www.npmjs.com/package/body-parser" target="_blank">BodyParser</a>
            <a href="https://www.npmjs.com/package/cors" target="_blank">Cors</a>
            <a href="https://www.npmjs.com/package/mysql" target="_blank">MySQL</a>
            <a href="https://www.npmjs.com/package/axios" target="_blank">la libreria AXIOS</a>
            <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank">JsonWebToken</a>
            <a href="https://www.npmjs.com/package/jwt-decode" target="_blank">jwtdecode</a>
            <a href="https://www.npmjs.com/package/nodemon" target="_blank">nodemon</a>
            <a href="https://www.npmjs.com/package/vue-headful" target="_blank">Vue-Headfull</a>
            <a href="https://sweetalert2.github.io" target="_blank">SweetAlert 2</a>
            <a href="https://loading.io/css/" target="_blank">CSS Loader Spiner</a>
          </p>
        </li>
      </ul>
      <!-- VISTA DEL FOOTER -->
      <footercustom></footercustom>
    </div>
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
ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  min-height: 50vh;
}
li {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  width: 60%;
}
.created {
  flex-basis: 20%;
}

.ussing {
  display: flex;
  flex-direction: column;
  /* margin: 1rem 0; */
}
img.biker {
  max-height: 600px;
}
img.photo {
  border-radius: 60px;
  max-width: 200px;
  max-height: 200px;
  padding: 0 2rem;
}
p {
  color: red;
  padding: 1.25rem;
  font-size: 1.25rem;
  font-weight: bolder;
}
a {
  color: whitesmoke;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.2rem;
}
</style>
