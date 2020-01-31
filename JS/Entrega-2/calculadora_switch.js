`use strict`;

let primerValor = +prompt(`Escribe el primer numero: `);
let segundoValor = +prompt(`Escribe el segundo numero: `);

let operacion = prompt(`Escribe la operacion que quieres realizar: suma, resta, multiplicación, división o potencia: `);

switch (operacion) {
  case `suma`:
    console.log(`El resultado de la ${operacion} es: ` + (primerValor + segundoValor));
    break;
  case `resta`:
    console.log(`El resultado de la ${operacion} es: ` + (primerValor - segundoValor));
    break;
  case `multiplicacion`:
    console.log(`El resultado de la ${operacion} es: ` + primerValor * segundoValor);
    break;
  case `division`:
    console.log(`El resultado de la ${operacion} es: ` + primerValor / segundoValor);
    break;
  case `potencia`:
    console.log(`El resultado de la ${operacion} es: ` + primerValor ** segundoValor);
    break;
  default:
    console.log(`la operacion ${operacion} no se realizarla`);
}
