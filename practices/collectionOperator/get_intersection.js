'use strict';

function xInCollection(val,collection){
  for(let x=0;x < collection.length; x++)
  {
    if(collection[x] == val){
      return val;
    }
  }
}
function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let result=[];
  for(let x=0; x < collection_b.length; x++)
  {
    let value = xInCollection(collection_b[x], collection_a);
    if(value != '' && value != null && value != undefined){
      result.push(value)
    }
  }
  return result;
}

module.exports = get_intersection;
