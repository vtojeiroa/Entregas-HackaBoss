'use strict';

/*  Dada la función LetterCount(str) toma el parámetro str que se está pasando
 y devuelve la primera palabra de mayor longitud.Por ejemplo: Hoy es un día
 estupendo y fantástico.debe devolver fantástico porque es la primera palabra que más letras tiene. */

const sentence = prompt(`introduce una frase`);

function longerWord(maxWord, word) {
  return word.length > maxWord.length ? word : maxWord;
}
function letterCount(str) {
  const word = str.split(` `);
  return word.reduce(longerWord);
}
console.log(letterCount(sentence));
