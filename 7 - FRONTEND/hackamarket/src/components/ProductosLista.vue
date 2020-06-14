<template>
  <div class="home">
    <section class="products">
      <div class="product" v-for="producto in productos" :key="producto.id">
        <p class="id">Id Producto: {{ producto.id }}</p>
        <p class="name">{{ producto.nombre }}</p>
        <img :src="producto.img" />
        <p>{{ producto.descripcion }}</p>
        <p
          :class="{ green: producto.estado === 'disponible',red: producto.estado === 'no disponible' }"
        >Estado: {{ producto.estado }}</p>
        <p
          :class="{ green: producto.stock > 0,red: producto.stock < 1 }"
        >Stock: {{ producto.stock }}</p>
        <p>Precio: {{ producto.precio }} €</p>
        <button @click="buyEvent">Comprar</button>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ProductosLista",
  props: { productos: Array },
  methods: {
    buyEvent() {
      this.$emit("buy");
    }
  }
};
</script>
<style  scoped>
.red {
  color: red;
}
.green {
  color: green;
}
.products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2rem auto;
}
img {
  width: 100%;
}
.product {
  border: 1rem solid rgba(238, 13, 24, 0.808);
  border-radius: 50;
  margin: 2rem auto;
  padding: 1rem;
  width: 60%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10%;
}
.name {
  color: red;
  font-size: 1.5rem;
  font-weight: bolder;
  padding: 0.5rem;
}
p {
  color: whitesmoke;
  padding: 0.3rem;
  width: 80%;
}
button {
  padding: 0.3rem;
  width: 8rem;
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
