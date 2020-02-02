'use strict';

const teamMaria = [62, 34, 55];
const teamPaula = [35, 60, 59];
const teamRebeca = [40, 39, 63];

function getMedia(team) {
  let suma = 0;
  for (let i = 0; i < team.length; i++) {
    suma = +suma + team[i];
  }
  return suma / team.length;
}
if (getMedia(teamMaria) > getMedia(teamPaula) && getMedia(teamMaria) > getMedia(teamRebeca)) {
  console.log('El equipo de Maria tiene la media mas alta');
}
if (getMedia(teamPaula) > getMedia(teamMaria) && getMedia(teamPaula) > getMedia(teamRebeca)) {
  console.log('El equipo de Paula tiene la media mas alta');
}
if (getMedia(teamRebeca) > getMedia(teamMaria) && getMedia(teamRebeca) > getMedia(teamPaula)) {
  console.log('El equipo de Rebeca tiene la media mas alta');
}
