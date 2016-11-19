'use strict'

function get(path = "/articles/:id", a, b, c) {
    // console.log(path)
    return path
}

console.log(get)

var v = require('.')(get)

console.log(v)
