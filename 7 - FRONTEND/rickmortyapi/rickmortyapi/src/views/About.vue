<template>
  <div class="about">
    <h1>¡¡¡Hola Chic@!!!👋👋👋</h1>

    <!-- Incluyo mi foto en el about -->
    <img src="../assets/fotoVictor.jpg" alt="Imagen de Víctor" title="Imagen de Víctor" />
    <p>
      Este proyecto ha sido creado por
      <!-- Incluyo mi enlace de linkedin -->
      <a href="https://www.linkedin.com/in/vtojeiroa" target="_blank">Víctor Tojeiro</a>
    </p>
    <!-- Incluyo el enlace a la API de Rick y Morty -->
    <p>
      Utilizando la
      <a href="https://rickandmortyapi.com/">API de Rick y Morty</a>
      y la libreria AXIOS.
    </p>
  </div>
</template>



<style scoped>
.about {
  height: 100vh;
}
h1,
p {
  color: blue;
}

img {
  width: 200px;
  border-radius: 40%;
}
</style>