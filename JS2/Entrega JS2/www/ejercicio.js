"use strict";

async function getDataFromServer(url) {
  return (await fetch(url)).json();
}

//obtengo los datos de la API

getDataFromServer("https://api.exchangeratesapi.io/latest ").then(data => {
  const rateData = data.rates;
  const rates = Object.keys(rateData);
  for (const item of rates) {
    const sectionInput = document.querySelector("select#fromRate");
    const optionInput = document.createElement("option");
    optionInput.setAttribute("value", `${item}`);
    optionInput.textContent = item;

    const sectionOutput = document.querySelector("select#toRate");
    const optionOutput = document.createElement("option");
    optionOutput.setAttribute("value", `${item}`);
    optionOutput.textContent = item;

    sectionInput.append(optionInput);
    sectionOutput.append(optionOutput);
  }
});
// Recojo los valores y los muestro en el resultado

const from_rate = document.getElementById("fromRate");
const dataAmmount = document.getElementById("fromAmmount");
const to_rate = document.getElementById("toRate");
const result = document.getElementById("toAmmount");
const showResult = document.querySelector("h2#rate");
const button = document.querySelector("button");

from_rate.addEventListener("change", function() {});
dataAmmount.addEventListener("input", function() {});
to_rate.addEventListener("change", function() {});
button.addEventListener("click", calculate);

function calculate(event) {
  event.preventDefault();
  const rateIn = from_rate.value;
  const rateOut = to_rate.value;
  const amount = dataAmmount.value;
  let result = 0;
  let finalResult = 0;

  fetch(`https://api.exchangerate-api.com/v4/latest/${rateIn}`)
    .then(data => data.json())
    .then(data => {
      const rate = data.rates[rateOut];
      result = (amount * rate).toFixed(2);
      finalResult = ` ${dataAmmount.value} ${rateIn} SON ${result} ${rateOut}`;
      showResult.textContent = finalResult;
    });
}
