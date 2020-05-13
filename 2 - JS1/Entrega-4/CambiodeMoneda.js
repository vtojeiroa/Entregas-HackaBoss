'use strict';

/* Accede con fetch a la información de la siguiente
API: https://api.exchangerate-api.com/v4/latest/EUR.
 Dado un valor en euros (EUR), convierte dicha cantidad
 a dólares (USD). Por último convierte esta cantidad en
 dólares a yenes (JPY). */

async function getDataFromServer(url) {
  return await (await fetch(url)).json();
}
getDataFromServer('https://api.exchangerate-api.com/v4/latest/EUR').then((usd) => {
  console.log(`los ${ammount} EUR equivalen a ${usd.rates.USD * ammount} USD`);
  getDataFromServer('https://api.exchangerate-api.com/v4/latest/USD').then((jpy) => {
    console.log(`los ${usd.rates.USD * ammount} USD equivalen a ${jpy.rates.JPY * ammount * usd.rates.USD} JPY`);
  });
});
let ammount = +prompt(`Dime el importe en Euros que quieres cambiar a USD?`);
