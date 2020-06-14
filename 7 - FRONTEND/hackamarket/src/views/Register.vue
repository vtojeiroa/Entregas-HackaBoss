<template>
  <div>
    <!-- USO HEADFUL PARA PERSONALIZAR EL NOMBRE DE LA PÁGINA -->
    <vue-headful title="Registro" description="Página de Registro" />

    <!-- CONTENIDO -->
    <img src="../assets/FotoMoto5.jpeg" alt="Foto grupo de motos" />
    <h1>HACK A MARKET</h1>
    <form action>
      <div class="inputs">
        <h2>Regístrate para acceder a nuestros contenidos</h2>

        <input type="email" v-model="email" placeholder="Introduce tu email..." />

        <input type="password" v-model="password" placeholder="Introduce tu contraseña..." />

        <input type="password" v-model="repeatPassword" placeholder="Repite tu contraseña..." />
      </div>
      <div class="buttons">
        <button @click="addUser(email,password,repeatPassword)">Registrarse</button>

        <button class="link">
          <a href="../">Volver al Login</a>
        </button>
      </div>
    </form>
    <p v-show="required">
      ¡¡ No has rellenado correctament todos los campos o las contraseñas no coinciden!!
      <br />Vuelve a intentarlo, por favor!!
    </p>
    <!-- VISTA DEL FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// IMPORTO AXIOS
import axios from "axios";

//IMPORTO EL FOOTER
import footercustom from "../components/FooterCustom.vue";

//IMPORTO SWAL
import Swal from "sweetalert2";

export default {
  name: "Register",
  components: { footercustom },
  data() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
      correctData: false,
      required: false
    };
  },
  methods: {
    //VALIDAR LOS DATOS QUE INTRODUCEN
    validatingData() {
      if (
        this.email === "" ||
        this.password === "" ||
        this.repeatPassword === "" ||
        this.password !== this.repeatPassword
      ) {
        this.correctData = false;
        this.required = true;
      } else {
        this.correctData = true;
        this.required = false;
      }
    },
    //AÑADIR EL USUARIO A LA BBDD
    addUser(email, password) {
      this.validatingData();
      if (this.correctData == true) {
        let self = this;
        axios
          .post("http://localhost:3050/user", {
            email: self.email,
            password: self.password
          })
          .then(function(response) {
            //MOSTRAR MENSAJE CON LA INFORMACIÓN
            Swal.fire({
              icon: "success",
              title: `Usuario creado correctamente`,
              showConfirmButton: false,
              timer: 2500
            });
            self.emptyFields();
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        console.log("No has rellenado todos los campos");
      }
    },
    //FUNCIÓN PARA VACIAR LOS CAMPOS DESPUÉS DEL REGISTRO
    emptyFields() {
      (this.email = ""), (this.password = ""), (this.repeatPassword = "");
      this.$router.push("/");
    }
  }
};
</script>

<style>
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
  width: 90%;
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
  font-size: 1rem;
}
button:hover {
  background: whitesmoke;
  color: red;
  font-weight: bolderf;
}

.link {
  margin-left: 0.5rem;
}
p {
  color: whitesmoke;
}
a {
  text-decoration: none;
  font-size: bolder;
  color: whitesmoke;
  font-size: 1rem;
}
a:hover {
  color: red;
  font-weight: bolder;
}
</style>
