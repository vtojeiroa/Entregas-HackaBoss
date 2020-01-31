'use strict';

let primerValor = +prompt(`Escribe el primer numero: `);
let segundoValor = +prompt(`Escribe el segundo numero: `);

let operacion = prompt(`Escribe la operacion que quieres realizar: suma, resta, multiplicación, división o potencia: `);

if (operacion === `suma`) {
  console.log(`El resultado de la ${operacion} es: ` + (primerValor + segundoValor));
} else if (operacion === `resta`) {
  console.log(`El resultado de la ${operacion} es: ` + (primerValor - segundoValor));
} else if (operacion === `multiplicacion`) {
  console.log(`El resultado de la ${operacion} es: ` + primerValor * segundoValor);
} else if (operacion === `division`) {
  console.log(`El resultado de la ${operacion} es: ` + primerValor / segundoValor);
} else if (operacion === `potencia`) {
  console.log(`El resultado de la ${operacion} es: ` + primerValor ** segundoValor);
} else {
  console.log(`La operacion ${operacion} no se realizarla`);
}
