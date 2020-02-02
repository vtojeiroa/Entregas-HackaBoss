'use strict';

function tiraDado() {
  let tiradaDado = parseInt(6 * Math.random() + 1);
  return tiradaDado;
}
let tiradasAcumuladas = [];
for (let i = 0; i < 50; i++) {
  +tiradasAcumuladas.push(tiraDado());
}
function sumaTiradasAcumuladas(tiradasAcumuladas) {
  let suma = 0;
  for (let i = 0; i < tiradasAcumuladas.length; i++) {
    suma = suma + tiradasAcumuladas[i];
  }
  return sumaTiradasAcumuladas;
}

console.log(tiradasAcumuladas);

// Me quedé bloqueado al querer asignar el valor de cada tirada al array, y no fui capaz de seguir.
