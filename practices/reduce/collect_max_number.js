'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  // let max = collection[0]
  // for (let x = 0; x < collection.length; x++){
  //   if(collection[x] > max){
  //     max = collection[x]
  //   }
  // }
  
  return collection.reduce(function(a,b) {
    let max = a > b ? a : b 
    return max 
  })
}

module.exports = collect_max_number;
