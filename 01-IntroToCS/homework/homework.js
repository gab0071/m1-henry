'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;

}

function DecimalABinario(num) {
  // tu codigo aca
  // Creamos una variable para guardar el resultado del numero binario de (num)
  let binary = "";
  //Creamos un blucle while para que se nos ejecute la funcion mientras num sea mayor que 0
  while (num > 0) {
    binary = num % 2 + binary; //Llamamos la variable binary para guardar el resto 
    num = Math.floor(num / 2); //Dividimos el num entre 2
  }

  return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
} 