'use strict';
function map_to_even(collection){
  // let result = []
  // for(let x = 0; x < collection.length; x++){
  //   let i = 2 * collection[x]
  //   result.push(i)
  // }
  var result = collection.map(x => x * 2)
  return result
}
module.exports = map_to_even;
