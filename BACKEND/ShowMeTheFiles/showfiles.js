//Crear un programa de node que muestre en la consola el contenido de los ficheros que
//se pasen por línea de comandos pero sólo si son menos de 10Kb. node showfiles.js
//fichero1.txt ../files/fichero2.css

const fs = require("fs").promises;
const path = require("path");
const minimist = require("minimist");

async function showFiles(file) {
  try {
    const data = minimist(process.argv.slice(2));
    if (data._ == "") {
      console.log("---------------------");
      throw new Error(`No has incluido ningun fichero`);
    }

    for (const inputFile of data._) {
      const file = path.join(__dirname, inputFile);
      const info = await fs.stat(file);

      if (info.size < 10240) {
        const content = await fs.readFile(file);
        console.log();
        console.log(
          `El archivo ${inputFile} tiene un tamaño de ${(
            info.size / 1024
          ).toFixed(2)} Kb, y este es su contenido: `,
          content.toString()
        );
      } else {
        console.log();
        console.log(
          `El archivo ${inputFile} tiene un tamaño de ${(
            info.size / 1024
          ).toFixed(
            2
          )} kb que supera el máximo permitido de 10Kb para que se pueda mostrar por consola`
        );
      }
    }
  } catch (error) {
    console.error(error.message);
  }
}

showFiles();
