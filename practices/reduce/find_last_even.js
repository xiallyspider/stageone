'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let result = 0
  for( let x = 0; x < collection.length; x++){
    if(collection[x]%2 == 0){
      result = collection[x]
    }
  }
  return result
}

module.exports = find_last_even;
