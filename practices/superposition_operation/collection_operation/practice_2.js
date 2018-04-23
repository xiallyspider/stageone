'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  // let result = []
  // let od = collection.filter(function(item){
  //   return item%2 == 1
  // })
  // for (let x = 0; x < od.length; x++){
  //   result.push(od[x]*3+2)
  // }
  // return result
  return collection.filter(v => v%2 == 1).map(v => v * 3 + 2)
}

module.exports = hybrid_operation_to_uneven;

