const { ask } = require("../helpers/input.js");
/*Procedimiento.
    Requerir función ask.
    Empezar una función sincrona de main.
    Pedir 2 números.
            Crear una función que valide si el dato es un número.
            Crear una función que pida datos númericos.
            

    Pedir el operador que desea utilizar.
        Crear una función que valide que es aceptable el operador ingresado.
    Realizar la operación indicada.
    Entregar en consoloa el resultado de la operación con los 2 número.
    

    Restricciones.
        *La división entre 0 no se puede realizar.
*/

function validarNumero(num) {
  if (!isNaN(num)) {
    return true;
  } else {
    return false;
  }
}

function validarOperador(operador) {
  if (operador === "+") return true;
  if (operador === "-") return true;
  if (operador === "*") return true;
  if (operador === "/") return true;
  else return false;
}

function operaciones(operador, num1, num2) {
  switch (operador) {
    case "+":
      return "suma es " + (num1 + num2);
    case "-":
      return "resta es " + (num1 - num2);
    case "*":
      return "multiplicación es " + (num1 * num2);
    case "/":
      if (num2 === 0) {
        return "Esta operación no se puede ejecutar ya se esta dividiendo entre 0";
      } else {
        return "división es " + (num1 / num2);
      }
  }
}

async function main() {
  const num1 = Number(await ask("Ingrese el primer número."));
  const num2 = Number(await ask("Ingrese el segundo número."));
  if (!(validarNumero(num1) && validarNumero(num2))) {
    console.log(
      "Alguno de los datos ingresados no son números que existan en los números reales."
    );
    return;
  }
  const operador = String(
    await ask("Ingres un operador de los siguiente. +, -, *, /.")
  );
  if (!validarOperador(operador)) {
    console.log("No existe el operador ingresado.");
    return;
  }
  console.log(
    `El resultado de la operación ${operaciones(operador, num1, num2)}`
  );
}
main();
//console.log(operaciones('+',8,9));
