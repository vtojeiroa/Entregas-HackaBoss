// INDICANDO EL USO DE AXIOS PARA LA API

const axios = require("axios").default;

// BASE URL DE LA API

const apiUrl = "https://rickandmortyapi.com/api";

//  FUNCION PARA COGER TODOS LOS CHARS

function getAll() {
  return axios.get(`${apiUrl}/character`);
}

//  FUNCION PARA BUSCAR UN CHAR POR ID

function getChar(id) {
  return axios.get(`${apiUrl}/character` + id);
}

export default {
  getAll,
  getChar,
};
