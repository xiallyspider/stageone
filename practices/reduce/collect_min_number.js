'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  // let min = collection[0]
  // for(let x = 0; x < collection.length; x++){
  //   if(min > collection[x]){
  //     min = collection[x]
  //   }
  // }
  // return min
  return collection.reduce((a,b) => {
    let min = a < b ? a : b
    return min
  })
}

module.exports = collect_min_number;

