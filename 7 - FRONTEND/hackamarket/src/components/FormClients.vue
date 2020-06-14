<template>
  <div>
    <!-- FORMULARIO -->
    <form>
      <p v-show="required">Tienes datos aún por rellenar.</p>
      <!-- NOMBRE -->
      <label for="nombre">Nombre:</label>
      <input type="text" name="nombre" placeholder="Nombre del cliente" v-model="nombre" />
      <br />
      <br />
      <!-- APELLIDO -->
      <label for="apellido">Apellido:</label>
      <input type="text" name="apellido" placeholder="Apellido del cliente" v-model="apellido" />
      <br />
      <br />
      <!-- CIUDAD -->
      <label for="ciudad">Ciudad:</label>
      <input type="text" name="ciudad" placeholder="Ciudad del cliente" v-model="ciudad" />
      <br />
      <br />
      <!-- EMPRESA -->
      <label for="empresa">Empresa:</label>
      <input type="text" name="empresa" placeholder="Empresa del cliente" v-model="empresa" />
      <br />
      <br />
      <button @click="addClientEvent">Añadir cliente</button>
    </form>
    <!-- FORMULARIO -->
  </div>
</template>

<script>
export default {
  name: "FormClients",
  props: {
    required: Boolean
  },
  data() {
    return {
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: ""
    };
  },
  methods: {
    //FUNCION QUE EMITE UN EVENTO PARA AÑADIR UN CLIENTE
    addClientEvent() {
      this.$emit("add", this.nombre, this.apellido, this.ciudad, this.empresa);
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
  padding: 1rem;
}
input {
  width: 17rem;
  height: 1.75rem;
  margin: 0.25rem 0;
  border-radius: 5px;
  font-size: 1rem;
}
label {
  color: whitesmoke;
  margin-right: 1rem;
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
</style>