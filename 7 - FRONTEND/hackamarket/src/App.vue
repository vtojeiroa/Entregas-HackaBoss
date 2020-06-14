<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: rgb(34, 30, 30);
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0.5rem auto;
  min-height: 100vh;
}

h1 {
  font-size: 5rem;
  color: red;
  text-shadow: 2px 2px wheat;
}
h2 {
  font-size: 2rem;
  color: red;
  text-shadow: 1px 1px wheat;
  padding: 1rem;
}

::-webkit-input-placeholder {
  color: black;
}
</style>
