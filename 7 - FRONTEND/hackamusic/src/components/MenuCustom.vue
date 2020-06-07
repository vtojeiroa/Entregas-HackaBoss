 
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
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  color: white;
  background: black;
}
#nav a {
  font-weight: bolder;
  color: white;
  margin: 0 1.5rem;
  text-decoration: none;
}
#nav a:hover {
  color: #42b983;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
