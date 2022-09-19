'use strict'
// listas enlazadas
// usando class
// class Node {
//     constructor(datas) {
//         this.data = datas
//         this.next = null
//     }
// }

// usando funcion constructoras
function Node(datas) {
    this.data = datas
    this.next = null
}

class List {
    constructor() {
        this.length = 0 
        this.head = null
    }
    add(value) {
        let node = new Node(value)
        // si head es null agg el node
        if (this.head === null) {
            this.head = node
            this.length++
        } else {
            /// aca es la logica para agregar mas nodos
            var current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
            this.length++
        }
    }
    length() {
        return this.length
    }
}

var list = new List()
console.log(list)

// agregando nuevos nodos
list.add('catella')
list.add('tech')
list.add('web3')
console.log(list)

// viendo el tamaño de mi lista
list.length
console.log(list)


// // lista
// var list = new List()


// var node1 = new Node('catellaTech')

// var node2 = new Node('catella')

// var node3 = new Node('tech')


// // conectando un nodo con otro
// node1.next = node2
// node2.next = node3


// // conectando la lista con un nodo

// list.head = node1
// console.log(list)