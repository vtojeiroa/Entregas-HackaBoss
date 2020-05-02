//Hacer un servidor web que responda a la url / con un texto que ponga "Hola"
//pero sólo por la mañana, el resto del día debería devolver una página de
// error 404.

require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const app = express();

const hour = new Date().getHours();
app.get("/", (req, res) => {
  if (hour > 0 && hour < 12) {
    res.statusCode = 200;
    res.end(`Hola!!!! , es por la mañana`);
  } else {
    res.statusCode = 404;
    res.end("page not found");
  }
});

app.listen(port, () => {
  console.log(`Servidor web funcionando en http://localhost:${port}`);
});
