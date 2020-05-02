//Hacer un programa en node que cuando lo ejecutes te ponga
//el % de memoria RAM libre que tienes disponible en el ordenador.

const os = require("os");

const totalMemo = os.totalmem();
const freeMemo = os.freemem();

const freeMemoPercent = `La memoria Ram libre es el ${Math.round(
  (freeMemo / totalMemo) * 100
)}% de total`;
console.log();
console.log(freeMemoPercent);
console.log();
