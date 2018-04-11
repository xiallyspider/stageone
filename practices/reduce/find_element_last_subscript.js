'use strict';

function find_element_last_subscript(collection, element) {
  //在这里写入代码
  let subscript = 0
  for( let x = 0; x < collection.length; x++){
    if(collection[x] == element){
      subscript = x
    }
  }
  return subscript
}

module.exports = find_element_last_subscript;
