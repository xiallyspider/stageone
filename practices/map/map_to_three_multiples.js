'use strict';
var map_to_three_multiples = function(collections){
  let result = []
  for(let x = 0; x < collections.length; x++){
    let i = 3 * collections[x]
    result.push(i)
  }
  return result
};

module.exports = map_to_three_multiples;
