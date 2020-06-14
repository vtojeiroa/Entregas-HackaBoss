<template>
  <div>
    <!-- USO HEADFUL PARA PERSONALIZAR EL NOMBRE DE LA PÁGINA -->

    <vue-headful title="Añadir Clientes" description="Página de Añadir Clientes" />

    <!-- VISTA DEL MENÚ -->

    <menucustom></menucustom>

    <img src="../assets/FotoMoto1.jpeg" alt="Foto motorista saludando" />

    <h2>Introduce los datos del cliente que quieres registrar</h2>

    <!-- FORMULARIO -->

    <formclients :required="required" v-on:add="addClient"></formclients>

    <!-- VISTA DEL FOOTER -->

    <footercustom></footercustom>
  </div>
</template>

<script>
// IMPORTO AXIOS
import axios from "axios";

//IMPORTO EL MENU
import menucustom from "../components/MenuCustom.vue";

//IMPORTO EL FOOTER
import footercustom from "../components/FooterCustom.vue";

//IMPORTO FORMCLIENTS
import formclients from "../components/FormClients.vue";

//IMPORTO SWEETALERT2
import Swal from "sweetalert2";

export default {
  name: "AddClient",
  components: {
    menucustom,
    footercustom,
    formclients
  },
  data() {
    return {
      correctData: false,
      required: false
    };
  },
  methods: {
    //VALIDO QUE LOS DATOS SON CORRECTOS

    validatingData(nombre, apellido, ciudad, empresa) {
      if (nombre === "" || apellido === "" || ciudad === "" || empresa === "") {
        this.correctData = false; //   NO ENVIAR
        this.required = true; //SE MUESTRA MENSAJE
      } else {
        this.correctData = true; // SI ENVIAR
        this.required = false; //NO SE MUESTRA MENSAJE
      }
    },

    //AÑADO EL CLIENTE A LA BBDD
    addClient(nombre, apellido, ciudad, empresa) {
      this.validatingData(nombre, apellido, ciudad, empresa); //VALIDANDO DATOS DEL FORMULARIO--QUE VENGAN TODOS CUBIERTOS
      if (this.correctData == true) {
        let self = this;
        axios
          .post("http://localhost:3050/add", {
            nombre: nombre,
            apellido: apellido,
            ciudad: ciudad,
            empresa: empresa
          })
          .then(function(response) {
            Swal.fire({
              //MOSTRAR MENSAJE CON LA INFORMACIÓN
              icon: "success",
              title: `Acabas de dar de alta un nuevo cliente a la BBDD`,
              showConfirmButton: false,
              timer: 3000
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        Swal.fire({
          //MOSTRAR MENSAJE CON LA INFORMACIÓN
          icon: "error",
          title: `No has rellenado todos los campos!! Vuelve a intentarlo, por favor`,
          showConfirmButton: false,
          timer: 3000
        });
      }
    }

    //FUNCIÓN PARA VACIAR LOS CAMPOS DESPUÉS DEL REGISTRO
    /*     emptyFields() {
      (this.nombre = ""),
        (this.apellido = ""),
        (this.ciudad = ""),
        (this.empresa = "");
    } */
  }
};
</script>

<style scoped>
img {
  width: 25%;
}
</style>
