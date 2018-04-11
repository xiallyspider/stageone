'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  let result = []
  let flag = true
  for(let x=0; x<collection_a.length; x++){
    flag = false
    for(let y=0;y<collection_b.length; y++){
      if(collection_a[x] % collection_b[y] == 0){
        flag = true
      }
    }
    if(flag){
      result.push(collection_a[x])
    }
  }
  return result
}

module.exports = choose_divisible_integer;
