<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  background: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #1fe9e9;
}

#nav a.router-link-exact-active {
  color: #4edd22;
}

@media (min-width: 900px) {
  #app {
    font-size: 20px;
  }
}
</style>
