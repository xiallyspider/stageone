'use strict';

function choose_common_elements(collection_a, collection_b) {
  //在这里写入代码
  let result = []
  for(let x=0; x<collection_a.length; x++){
    for(let y=0;y<collection_b.length; y++){
      if(collection_a[x] == collection_b[y]){
        result.push(collection_a[x])
      }
    }
  }
  return result
}

module.exports = choose_common_elements;
