'use strict';
function map_to_even(collection){
  let result = []
  for(let x = 0; x < collection.length; x++){
    let i = 2 * collection[x]
    result.push(i)
  }
  return result
}
module.exports = map_to_even;
