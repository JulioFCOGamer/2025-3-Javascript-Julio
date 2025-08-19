const { ask } = require('./helpers/input');
/**
 * @param {Number} num
 * @param {Number} temp
 * @param {String} fo
 * */

function validateNumber(num){
  if(isNaN(num)) return true; //Si no es un dato tipo número regresa true.
  else return false; //Si es un dato tipo número regresa false. 
}

function validateFor(fo){
  
  /*Regresa false si coincide con algun formato de temperatura*/
  if(fo === "°F") return false;
  if(fo === "°C") return false;
  //De lo contrario devuelve true.
  else return true;
}

function convF(temp){
  //Convierte de °C a °F
  const tempF = (temp*(9/5)+32);
//Regresa la temperatura en grados °F
  return tempF;
}

function convC(temp){
  //Convierte de °F a °C
  const tempC = ((temp-32)*(5/9));
  //Devuelve la temperatura en °F
  return tempC;
}

async function main() {
  // 1) Pregunta tipo (C/F) → normaliza a mayúsculas y valida
  // 2) Pregunta temperatura → convierte a Number y valida NaN
  // 3) Según el tipo, calcula la conversión
  // 4) Imprime ambos valores (opcional: formatea con toFixed)
  // }
  const typeTemp = String(await ask('Ingrese en que formato esta su temeperatura, °C o °F'));
  if(validateFor(typeTemp.toUpperCase())){
    console.log('No puedo convertir la escala ingresada.');
    return;
  }
  const temperature = Number(await ask('Dime la temperatura actual.'));
  if(validateNumber(temperature)){
  console.log("El valor ingresado no es valido para convertir.");
  return;
  }
  if(typeTemp.toUpperCase() === '°C'){
    console.log(`La conversión de la temperatura equivale a ${convF(temperature).toFixed(2)} °F`);
  } else if(typeTemp.toUpperCase() === '°F'){
    console.log(`La conversión de la temperatura equivale a ${convC(temperature).toFixed(2)} °C`);
  }
  
  
}
main();
//console.log(convF(25));
//console.log(convC(1));