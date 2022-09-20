'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let div = 2;

  while (num !== 1) {
    if (num % div === 0) {
      arr.push(div);
      num = num / div;
    } else {
      div++;
    }
  }
  return arr;
}




function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;
}

let nuevo = [5, 7, 5, 8, 1, 3];
let r = bubbleSort(nuevo);

console.log(r);



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let aux = 0;

  for (let i = 1; i < array.length; i++) {
    while (array[i] < array[i - 1]) {
      let dato = array[i];
      aux = array[i - 1];
      array[i] = aux;
      array[i - 1] = dato;
      i--;
    }
  }
  return array;

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) { //Bucle para encontrar en minimo.
      if (array[min] > array[j]) {
        min = j;
      }
    }

    let aux = array[i]; //Primero guardamos el valor de la posicion i a intercambiar
    array[i] = array[min]; //Segundo intercambiamos la posicion de i con el valor de la posicion del minimo
    array[min] = aux;   //Tercero colocamos el valor que teniamos en i en la posicion donde estaba el minimo
  }
  return array;
}

let arr = [5, 2, 1, 7, 0, 3, 7, 4];
console.log(selectionSort(arr))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
