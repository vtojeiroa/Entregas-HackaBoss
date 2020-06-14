<template>
  <div>
    <!-- USO HEADFUL PARA PERSONALIZAR EL NOMBRE DE LA PÁGINA -->
    <vue-headful title="Logín" description="Página de Logín" />
    <!-- CONTENIDO  -->

    <img src="../assets/FotoMoto3.jpeg" alt="Foto de una moto" />
    <h1>HACK A MARKET</h1>
    <form action>
      <div class="inputs">
        <h2>Introduce tus credenciales</h2>
        <input type="email" placeholder="Escribe tu email" v-model="email" />
        <input type="password" placeholder="Escribe tu contraseña" v-model="password" />
      </div>
      <div class="buttons">
        <button @click="login()">HAZ LOGIN</button>
      </div>
      <br />
      <p>
        Si eres nuevo...
        <router-link :to="{name:'Register'}">Regístrate</router-link>
      </p>
      <br />
    </form>
    <!-- VISTA DEL FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
//IMPORTO LA FUNCION LOGINUSER DE UTILS
import { loginUser } from "../api/utils";

//IMPORTO EL FOOTER
import footercustom from "../components/FooterCustom.vue";

export default {
  name: "Login",
  components: { footercustom },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        //INTENTO HACER LOGIN
        await loginUser(this.email, this.password);
        //SI HAY LOGIN, QUE GUARDE EL EMAIL EN EL LOCAL STORAGE
        localStorage.setItem("usuario", this.email);
        //SI HAY LOGIN, QUE ME LLEVE AL HOME
        this.$router.push("/productos");
      } catch (err) {
        alert(`Error:${err}`);
      }
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  border: 2px solid red;
  border-radius: 10px;
}
img {
  width: 35%;
  border-radius: 10%;
  padding: 2rem 0;
}
.inputs {
  padding: 1rem;
}
input {
  width: 17rem;
  height: 1.75rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  font-size: 1rem;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem 0 1rem 0;
}
button {
  padding: 0.2rem;
  width: 8rem;
  background: red;
  color: whitesmoke;
  border-radius: 10px;
  font-weight: bolder;
}
button:hover {
  background: whitesmoke;
  color: red;
  font-weight: bolderf;
}

p {
  font-weight: bolder;
  color: whitesmoke;
}
a {
  font-weight: bolder;
  font-size: 1.25rem;
  color: red;
}
a:hover {
  color: whitesmoke;
  font-weight: bolderf;
}
</style>
