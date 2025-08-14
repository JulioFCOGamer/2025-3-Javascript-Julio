const { ask } = require("../helpers/input.js");

async function main() {
  const num1 = Number(await ask("Ingrese el primer número"));
  const num2 = Number(await ask("Ingrese el segundo número"));
  const operador = await ask("ingrese el operador que desea utilizar");
  if(operador !== '+' && operador !== '-' && operador !== '*' && operador !== '/' ){
    console.log('Introduce un operador valido')
    return;
  }
  const resta = num1 - num2;
  const multiplicacion = num1 * num2;
  const division = num1 / num2;
  const suma = num1 + num2;

  let resultado = 0;
  if (operador === "+") {
    resultado = num1 + num2;
  } else if (operador === "-") {
    resultado = num1 - num2;
  } else if (operador === "*") {
    resultado = num1 * num2;
  } else if (operador === "/") {
    if (num2 > 0) {
      resultado = num1 / num2;
    }else{
      console.log('El número 2 debe ser mayor a 0.')
      return;
    }
  } else {
    console.log('Operación no valida.')
    return
  }

  /*console.log("El resultado de la suma es", suma);
  console.log("El resultado de la resta es", resta);
  console.log("El resultado de la multiplicacion es", multiplicacion);
  console.log("El resultado de la division es", division);*/
  console.log('El resultado de la operación es ', resultado)
}

main();
