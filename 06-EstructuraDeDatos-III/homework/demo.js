'use strict'
function tree(data) {
    this.value = data
    this.left = null
    this.right = null
}

tree.prototype.insert = function(data) {
    var newTree = new tree(data)
    if (data < this.value) {
        if (this.left === null) {
            this.left = newTree
        } else {
            this.left.insert(data)
        }
    } else {
        if (data >= this.value) {
            if (this.right === null) {
                this.right = newTree
            } else {
                this.right.insert(data)
            }

        }
    }
    return 'value inserted with success!'
}

var myTree = new tree(20)
myTree.insert(3)
myTree.insert(30)
console.log(myTree)