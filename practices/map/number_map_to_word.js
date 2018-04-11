'use strict';
var number_map_to_word = function(collection){
  let result = []
  for(let x = 0; x < collection.length; x++){
      let i = String.fromCharCode(96+collection[x])
      result.push(i)
  }
  return result
};

module.exports = number_map_to_word;
