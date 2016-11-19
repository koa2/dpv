'use strict'

const FN_NAME = /function\s*(\w*)/i
const FN_ARGS = /^(function)?\s*\*?\s*[^\(]*\(\s*([^\)]*)\)/m
const FN_ARG_SPLIT = /,/
const FN_ARG = /^\s*(_?)(\S+?)\1\s*$/
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg

/**
 * Module dependencies.
 */

/**
 * Prototype.
 */

module.exports = function(fn) {
  const fnText = fn.toString()
  const argDecl = fnText.replace(STRIP_COMMENTS, '').match(FN_ARGS)

  let _arg = []
  var result = {}

  argDecl[2].split(FN_ARG_SPLIT).forEach(function (arg) {
    console.log(arg)
    
    if (/=/.test(arg)) {
      var _re = arg.split('=');
      var k = _re[0]
      var v = eval(_re[1])
      result[k] = v
    }
      
  })

  return result
}
