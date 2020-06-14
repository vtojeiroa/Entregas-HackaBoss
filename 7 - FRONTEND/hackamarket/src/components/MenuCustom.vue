<template>
  <div>
    <div id="principal">
      <div id="nav">
        <router-link :to="{ name: 'Productos' }">Productos</router-link>
        <router-link v-show="tagIsAdmin()" :to="{ name: 'Clientes' }">Clientes</router-link>
        <router-link v-show="tagIsAdmin()" :to="{ name: 'AddClient' }">AddClient</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <p>
          Hola,
          <strong>{{usuario}}!!!</strong>
        </p>
        <button @click="logoutUser()">Cerrar sesión</button>
      </div>
      <h1>HACK A MARKET</h1>
    </div>
    <h2>TU PORTAL DE MOTOS EXCLUSIVAS</h2>
    <router-view />
  </div>
</template>
<script>
import { clearLogin, getUserName, isLoggedIn, checkAdmin } from "../api/utils";

export default {
  name: "MenuCustom",
  data() {
    return {
      usuario: ""
    };
  },
  methods: {
    // COGER EL NOMBRE PARA MOSTRARLO EN EL MENU

    getName() {
      this.usuario = getUserName();
    },

    //DESCONECTAR AL USUARIO- BORRO TOKEN Y NOMBRE
    logoutUser() {
      this.usuario = "";
      this.$router.push("/");
      return clearLogin();
    },

    // ESTA LOGADO??

    loggedIn() {
      return isLoggedIn();
    },

    // ES ADMIN??

    tagIsAdmin() {
      return checkAdmin();
    }
  },
  created() {
    this.getName();
  }
};
</script>

<style  scoped>
#principal {
  background: black;
}

#nav {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: white;
}

#nav a {
  font-weight: bolder;
  color: white;
  margin: 0 0.5rem;
  text-decoration: none;
}

#nav a:hover {
  color: red;
}
#nav a.router-link-exact-active {
  color: red;
}
h1 {
  flex-basis: 100%;
}

button {
  padding: 0.3rem;
  width: 8rem;
  background: red;
  color: whitesmoke;
  border-radius: 10px;
  font-weight: bolder;
  margin: 0 1rem;
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
  flex-grow: 1;
}
a:hover {
  color: whitesmoke;
  font-weight: bolderf;
}
</style>