'use strict';

/* Haz que la función BinaryConverter(str) devuelva la forma decimal del valor
binario.Por ejemplo: si se pasa 101 el programa debe retornar un 5, si se
pasa 1000 debe retornar un 8, etc.Si no sabes como convertir un número
binario a decimal puedes echar un ojo a este vídeo: https://www.youtube.com/watch?v=bBMhiSy1Grc
 */

const binary = prompt(`Introduce un número binario`);

function binaryConverter(str) {
  const binaryReversed = str.split(``).reverse();
  return binaryReversed
    .map((value, index) => value * 2 ** index)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
}

console.log(binaryConverter(binary));
