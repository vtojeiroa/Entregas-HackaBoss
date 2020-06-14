<template>
  <div class="home">
    <!-- USO HEADFUL PARA PERSONALIZAR EL NOMBRE DE LA PÁGINA -->

    <vue-headful title="Productos" description="Página de Productos" />
    <!-- VISTA DEL MENÚ -->
    <menucustom></menucustom>

    <h2>Listado de productos</h2>

    <!-- ANIMACIÓN DE CSS CARGANDO -->

    <div v-show="loading" class="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <div class="button-search">
      <!-- BOTON PARA ABRIR EL MODAL DEL BUSCADOR -->
      <button class="search" @click="openModalSearch()">Abrir el buscador</button>

      <!-- BOTON PARA RECARGAR LOS PRODUCTOS -->

      <button class="reset" @click="search=''">reiniciar</button>
    </div>
    <!-- IMPLEMENTACIÓN DEL MODAL DEL BUSCADOR -->
    <div class="modalSearch" v-show="modalSearch">
      <div class="modalSearchBox">
        <label for="bySearch">Buscador de productos</label>
        <input
          v-model="search"
          id="search"
          name="bySearch"
          type="search"
          placeholder="Introduce algún dato del producto"
        />
        <br />
        <button class="reset" @click="search = ''">Limpiar el buscador</button>
        <button @click="closeModalSearch()">Cerrar el buscador</button>
      </div>
    </div>

    <!-- VISTA DE LOS PRODUCTOS -->
    <productoslista :productos="filteredProducts" v-on:buy="buyProducts"></productoslista>

    <!-- VISTA DEL FOOTER -->
    <footercustom></footercustom>
  </div>
</template>

<script>
// IMPORTO AXIOS
import axios from "axios";

//IMPORTO El MENU
import menucustom from "../components/MenuCustom.vue";

//IMPORTO El FOOTER
import footercustom from "../components/FooterCustom.vue";

//IMPORTO LA LISTA DE PRODUCTOS
import productoslista from "../components/ProductosLista.vue";

//IMPORTO SWEETALERT2
import Swal from "sweetalert2";

export default {
  name: "Productos",
  components: {
    menucustom,
    footercustom,
    productoslista
  },
  data() {
    return {
      //ARRAY DE LOS CLIENTES DE LA BBDD
      productos: [],
      modal: false,
      loading: true,
      search: "",
      modalSearch: ""
    };
  },
  methods: {
    // CARGO LOS PRODUCTOS
    getProducts() {
      let self = this;
      axios
        .get("http://localhost:3050/productos")
        //SI SALE BIEN
        .then(function(response) {
          console.log(response);
          self.productos = response.data;
        })
        //SI SALE MAL
        .catch(function(error) {
          console.log(error);
        });
    },
    //MOSTRAR MENSAJE CON SWEETALERT
    buyProducts() {
      Swal.fire({
        title: "¡¡¡¡Acabas de comprar tu moto soñada!!!!",
        text: "¡¡¡¡Deseamos que la disfrutes!!!! ",
        confirmButtonText: "✌️ Ok ✌️"
      });
    },
    //  ABRE EL MODAL DEL BUSCADOR
    openModalSearch() {
      this.modalSearch = true;
    },

    //CIERRA EL MODAL DEL BUSCADOR
    closeModalSearch() {
      this.modalSearch = false;
    }
  },

  created() {
    this.getProducts();
    this.loading = false;
  },
  computed: {
    filteredProducts() {
      let result = this.productos;
      if (!this.search) {
        return result;
      } else {
        result = result.filter(
          producto =>
            producto.id === parseInt(this.search) ||
            producto.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
            producto.descripcion
              .toLowerCase()
              .includes(this.search.toLowerCase()) ||
            producto.estado.toLowerCase().includes(this.search.toLowerCase())
        );
        if (!result.length) {
          Swal.fire({
            title:
              "Con los parámetros introducidos no hemos encontrado ningún producto",
            text: "Vuelve a intentarlo",
            confirmButtonText: "Ok"
          });
        }
        return result;
      }
    }
  }
};
</script>
<style scoped>
.modalSearch {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.modalSearchBox {
  background: whitesmoke;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid red;
  width: 80%;

  /*   display: flex;
  flex-direction: column;
  align-self: center;
  border: 2px solid red;
  color: whitesmoke;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem; */
}
.home {
  display: flex;
  flex-direction: column;
}
.lds-ripple {
  display: inline-block;
  align-self: center;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

article {
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 2px solid red;
  color: whitesmoke;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem;
}
label {
  padding: 1rem;
  font-size: 1.25rem;
}
input {
  padding: 0.5rem;
  width: 17rem;
  height: 1.75rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  font-size: 1rem;
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
  font-weight: bolder;
}
/* button.search {
  align-self: center;
  margin-left: 2rem;
} */
</style>
