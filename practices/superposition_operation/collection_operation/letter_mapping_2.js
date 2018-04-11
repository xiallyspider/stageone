'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  let result = ''
  let sum = collection.reduce(function(a,b){
    return a+b
  })
  let ave =parseInt(sum/collection.length) + 1
  result=String.fromCharCode(96+ave)
  return result
}

module.exports = average_to_letter;

