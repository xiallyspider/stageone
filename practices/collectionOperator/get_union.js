'use strict';


function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = collection_a
  for (let x=0; x < collection_b.length; x++){
  let flag = true
  for(let i = 0; i < collection_a.length; i++){
    if(collection_b[x] == collection_a[i]){
      flag = false
    }
  }
  if(flag){
    let temp=collection_b[x]
    result.push(temp)
  }
  }
  return result
}

module.exports = get_union;

