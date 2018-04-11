'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  let sum = collection.reduce(function(a,b){
    return a+b
  })
  return sum*3+2*collection.length
}

module.exports = hybrid_operation;

