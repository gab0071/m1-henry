'use strict'
// function hash(name) {
//     return name.length
// }
// console.log(hash('violeta'))
///////////////////////////////////////////////////
// hash table
var tamañoTotal = 30
var contenedor = []

var person1 = {
    'name': 'catherine',
    'dni': '1013363936',
    'phone': 'iphone13'
}
var person2 = {
    'name': 'Gabriela',
    'dni': '1013363935',
    'phone': 'iphone14'
}
var person3 = {
    'name': 'martin Junco',
    'dni': '1013363938',
    'phone': 'iphone15'
}
var person4 = {
    'name': 'martin Junco',
    'dni': '1013363938',
    'phone': 'iphoneQuantum'
}

function hash(name, dni) {
    return (name.length + dni) % tamañoTotal
}

var posicion = hash(person1.name, person1.dni)
if (contenedor[posicion]) {
    contenedor[posicion] = [contenedor[posicion], person1.phone]
} else {
    contenedor[posicion] = person1.phone
}

var posicion = hash(person2.name, person2.dni)
if (contenedor[posicion]) {
    contenedor[posicion] = [contenedor[posicion], person2.phone]
} else {
    contenedor[posicion] = person2.phone
}

var posicion = hash(person3.name, person3.dni)
if (contenedor[posicion]) {
    contenedor[posicion] = [contenedor[posicion], person3.phone]
} else {
    contenedor[posicion] = person3.phone
}

var posicion = hash(person4.name, person4.dni)
if (contenedor[posicion]) {
    contenedor[posicion] = [contenedor[posicion], person4.phone]
} else {
    contenedor[posicion] = person4.phone
}
console.log(contenedor)

var touchPhone = hash(person4.name, person4.dni)
var arr = contenedor[touchPhone]
var done = arr.find((element) => {
    if (element === 'iphone15') return element
})

console.log(done)

