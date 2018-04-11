'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let resultArray = []
  let result = 0
  let od = collection.filter(function(item){
    return item%2 == 1
  })
  for (let x = 0; x < od.length; x++){
    resultArray.push(od[x]*3+5)
  }
  result = resultArray.reduce(function(a,b){
    return a+b
  })
  return result
}

module.exports = hybrid_operation_to_uneven;

