const { ask } = require('../helpers/input');

async function main() {
  const dia = Number(await ask("Ingresa un número entre 1 y 7"));
  const diasSemanas = ["Lunes","Martes","Miercoles","Jueves","Viernes", "Sabado","Domingo"];
  if (dia >= 1 && dia <= 7){
    console.log(diasSemanas[dia-1]);
  }else{
    console.log("No es un número valido ¡Peligro!");
  }
}

main();