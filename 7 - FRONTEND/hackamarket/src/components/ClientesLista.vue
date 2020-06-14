<template>
  <div class="home">
    <article class="clients">
      <div class="client" v-for="(cliente,index) in clientes" :key="cliente.id">
        <p>Id Cliente: {{ cliente.id }}</p>
        <p>Nombre: {{ cliente.nombre }}</p>
        <p>Apellido: {{ cliente.apellido }}</p>
        <p>Ciudad: {{ cliente.ciudad }}</p>
        <p>Empresa: {{ cliente.empresa }}</p>
        <div class="buttons">
          <button @click="deleteClientEvent(index)">BORRAR</button>
          <button @click="editClientEvent(index)">EDITAR</button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ClientesLista",
  props: { clientes: Array },
  methods: {
    //FUNCION QUE EMITE UN EVENTO PARA EDITAR UN CLIENTE
    editClientEvent(index) {
      //GUARDANDO LA INFORMACIÓN DEL CLIENTE SELECCIONADO
      let data = this.clientes[index];
      //ENVIANDO LA INFORMACIÓN DEL CLIENTE A LA VISTA
      this.$emit("edit", data);
    },

    //FUNCION QUE EMITE UN EVENTO PARA BORRAR UN CLIENTE
    deleteClientEvent(index) {
      let data = this.clientes[index].id;
      this.$emit("delete", data);
    }
  }
};
</script>
<style  scoped>
.home {
  display: flex;
  align-items: center;
}
.clients {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /*   background: whitesmoke; */
  color: red;
  width: 60%;
}

.client {
  border: 1rem solid rgba(238, 13, 24, 0.808);
  border-radius: 50;
  margin: 2rem auto;
  padding: 1rem;
  width: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 10%;
}

p {
  color: whitesmoke;
  font-weight: bolder;
  padding: 0.3rem;
}
button {
  padding: 0.3rem;
  width: 6rem;
  background: red;
  color: whitesmoke;
  border-radius: 10px;
  font-weight: bolder;
  margin: 1rem 1rem;
}
button:hover {
  background: whitesmoke;
  color: red;
  font-weight: bolder;
}
</style>
