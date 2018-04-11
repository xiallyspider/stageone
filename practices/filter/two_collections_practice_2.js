'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  let result = []
  let flag = true
  for(let x=0; x<collection_a.length; x++){
    flag = true
    for(let y=0;y<collection_b.length; y++){
      if(collection_a[x] == collection_b[y]){
        flag = false
      }
    }
    if(flag){
      result.push(collection_a[x])
    }
  }
  return result
}

module.exports = choose_no_common_elements;
