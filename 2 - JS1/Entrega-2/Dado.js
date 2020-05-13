'use strict';

/* Crea un programa que simule el comportamiento de un dado. El programa debe ir almacenando los valores de cada tirada en una variable,
 y cuando llegue a 50 puntos o más, debe finalizar su ejecución mostrando un mensaje tal que:

¡Enhorabuena, ha salido un Y! ¡Has ganado con un total de Z puntos!.
A su vez, debe mostrarse el siguiente mensaje tras cada tirada:

Tirada X: ha salido un Y.Tienes un total de Z puntos.
(X: número de la tirada, Y: número aleatorio del 1 al 6, Z: total de puntos acumulados).

  P.D: X, Y, Z son nombres que he dado para explicar lo que pido, no quiere decir que debáis llamar de esa manera a las variables
  correspondientes.*/

function tiradaDado() {
  const tirada = Math.ceil(Math.random() * 6);
  return tirada;
}

let totalPuntuacion = 0;

for (let i = 1; totalPuntuacion < 50; i++) {
  const tirada = tiradaDado();
  totalPuntuacion += tirada;
  if (totalPuntuacion <= 49) {
    console.log(`Tirada ${i}: ha salido un ${tirada}.Tienes un total de ${totalPuntuacion} puntos.`);
  } else {
    console.log(`Enhorabuena, ha salido un ${tirada}.Has ganado con un total de ${totalPuntuacion} puntos.`);
  }
}
