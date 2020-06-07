// Importamos la configuración config.js

import config from "./config.js";

//Importamos AXIOS

const axios = require("axios").default;

// Definimos una constante donde guardamos la API KEY

const apiKey = config.apiKey;
// Definimos unas constantes donde guardamos las URL de la API de donde vamos a sacar los datos

const BASE_URL = "https://ws.audioscrobbler.com/";
const URL_GEO =
  "2.0/?method=geo.gettopartists&country=spain&api_key=" +
  apiKey +
  "&format=json";

const URL_TOPTRACKS =
  "2.0/?method=geo.gettoptracks&country=spain&api_key=" +
  apiKey +
  "&format=json";
const URL_TOPTAGS =
  "2.0/?method=chart.gettoptags&api_key=" + apiKey + "&format=json";

// Creamos una función para coger los topartists de Lastfm de España

async function getArtists() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_GEO}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
// Creamos una función para coger las top canciones de Lastfm de España
async function getTopTracks() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TOPTRACKS}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}
// Creamos una función para coger los e de Lastfm de España
async function getTopTags() {
  try {
    const response = await axios.get(`${BASE_URL}${URL_TOPTAGS}`);
    return response;
  } catch (error) {
    console.error(error);
  }
}

/* Exportamos las funciones */

export default {
  getArtists,
  getTopTracks,
  getTopTags,
};
