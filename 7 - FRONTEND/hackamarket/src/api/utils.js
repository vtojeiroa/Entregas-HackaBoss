import axios from "axios";
import jwt from "jwt-decode";

const ENDPOINT = "http://localhost:3050";

const AUTH_TOKEN_KEY = "authToken";

const ROLE = "role";

const USUARIO = "usuario";

//FUNCION DE LOGIN

export function loginUser(email, password) {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios({
        url: `${ENDPOINT}/auth`, //URL DE LA AUTENTICACIÓN
        method: "POST", // MÉTODO DE LA AUTENTICACIÓN
        data: {
          email: email, //EMAIL
          password: password, //CONTRASEÑA
          grant_type: "password",
        }, //DATOS DE LA AUTENTICACIÓN
      });
      setAuthToken(res.data.token);
      setIsAdmin(res.data.isAdmin);
      resolve();
    } catch (err) {
      /*  console.log("Error en login:", err);
      reject(err); */
      if (err.response.status === 404) {
        alert(err.response.data.message);
      }
      console.log("Error en login:", err);
    }
  });
}

//GUARDAR TOKEN EN LOCALSTORAGE

export function setAuthToken(token) {
  axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
  //GUARDO EL TOKEN EN LOCALSTORAGE
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

// LOGOUT -  DESCONECTAR USUARIO

export function clearLogin() {
  axios.defaults.headers.common["Authorization"] = ``;
  localStorage.removeItem(AUTH_TOKEN_KEY, "usuario");
  clearAdmin();
}

//COGER EL TOKEN DEL LOCALSTORAGE
export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

//CONSIGUIENDO LA FECHA DE EXPIRACIÓN DEL TOKEN
export function getTokenExpirationDate(encodedToken) {
  let token = jwt(encodedToken);
  //SI NO HAY FECHA, NO SIGUE
  if (!token.exp) {
    return null;
  }
  let date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}

// COMPROBANDO SI LA FECHA SIGUE VIGENTE O NO
export function isTokenExpired(token) {
  let expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

// COMPROBAR SI EL USUARIO ESTA LOGUEADO O NO
export function isLoggedIn() {
  let authToken = getAuthToken();
  return !!authToken && !isTokenExpired(authToken);
}

// FUNCIONES PARA COMPROBAR EL ROL DE USER -----------------------------

//GUARDAR SI ES ADMIN EN EL LOCAL STORAGE

export function setIsAdmin(isAdmin) {
  localStorage.setItem(ROLE, isAdmin);
}

//BORRAR ROL DEL USER EN EL LOCAL STORAGE

export function clearAdmin() {
  return localStorage.removeItem(ROLE);
}

// RECUPERAR EL ROL QUE HE GUARDADO EN LOCAL STORAGE

export function getIsAdmin() {
  return localStorage.getItem(ROLE);
}

// RECUPERAR EL NOMBRE DEL USUARIO QUE HE GUARDADO EN LOCAL STORAGE

export function getUserName() {
  return localStorage.getItem(USUARIO);
}

// COMPROBAR ROL

export function checkAdmin() {
  let role = false;
  let isAdmin = getIsAdmin();
  if (isAdmin === "true") {
    role = true;
  } else {
    role = false;
  }
  return role;
}
