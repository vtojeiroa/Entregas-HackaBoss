// INDICANDO EL USO DE AXIOS PARA LA API

const axios = require("axios").default;

// BASE URL DE LA API

const apiUrl = "https://rickandmortyapi.com/api";

//  FUNCION PARA COGER TODOS LOS CHARS

function getAll() {
  return axios.get(`${apiUrl}/character`).catch((error) => console.log(error));
}

//  FUNCION PARA BUSCAR UN CHAR POR ID

function getChar(id) {
  return axios
    .get(`${apiUrl}/character/ ${id}`)
    .catch((error) => console.log(error));
}

export default {
  getAll,
  getChar,
};
