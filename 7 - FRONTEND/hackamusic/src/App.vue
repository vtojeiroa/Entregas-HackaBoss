<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  min-height: 100vh;
  position: relative;
}

body {
  background: #05155f;
  background-image: url("assets/concierto.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  margin-bottom: 60px;
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: greenyellow;
}
h1 {
  padding: 2rem 0;
  font-size: 3rem;
  color: rgb(66, 185, 131);
  text-shadow: 3px 3px black;
}
footer {
  background-color: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
}
footer p {
  align-self: center;
}
</style>
