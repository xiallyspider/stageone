'use strict';
var map_to_four_multiples_add_one = function(collection){
  // let result = []
  // for(let x = 0; x < collection.length; x++){
  //   let i = 4 * collection[x] + 1
  //   result.push(i)
  // }
  var result = collection.map(v => 4 * v + 1)
  return result
};

module.exports = map_to_four_multiples_add_one;
