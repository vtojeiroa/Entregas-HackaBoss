'use strict';

/* Haz que la función PalindromeTwo(str) tome el parámetro str que se le pasa
y devuelva true si el parámetro es un palíndromo, (la cadena se lee igual
hacia adelante que hacia atrás) de lo contrario devuelve false. Por ejemplo:
"Arriba la birra" debería devolver true, se lee igual del derecho que del 
revés. */

const sentence = `Arriba la birra`;

function palindromeTwo(str) {
  const initial = str
    .replace(/ /g, ``)
    .toLowerCase()
    .split(``);
  const end = str
    .replace(/ /g, ``)
    .toLowerCase()
    .split(``)
    .reverse();
  for (let i = 0; i < initial.length; i++) {
    for (let j = 0; j < end.length; j++) {
      if (initial[i] === end[j]) {
        return true;
      }
      return false;
    }
  }
}
console.log(palindromeTwo(sentence));
