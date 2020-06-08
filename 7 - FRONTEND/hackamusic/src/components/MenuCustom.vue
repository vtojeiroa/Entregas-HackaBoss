 
<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'Home' }">HackaMusic</router-link>
      <router-link :to="{ name: 'TopArtists' }">TopArtistas</router-link>
      <router-link :to="{ name: 'TopTracks' }">TopCanciones</router-link>
      <router-link :to="{ name: 'About' }">Sobre Mí</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom"
};
</script>

<style scoped>
#nav {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.7rem;
  font-weight: bold;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: white;
  background: black;
}
#nav a {
  font-weight: bolder;
  color: white;
  margin: 0 0.5rem;
  text-decoration: none;
}
#nav a:hover {
  color: #42b983;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
@media (min-width: 600px) {
  #nav {
    font-size: 1.2rem;
  }
  #nav a {
    padding: 1rem;
  }
}
@media (min-width: 900px) {
  #nav {
    font-size: 2rem;
  }
  #nav a {
    padding: 1rem;
  }
}
</style>
