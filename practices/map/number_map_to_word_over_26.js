'use strict';
var number_map_to_word_over_26 = function(collection){
  let result = []
  for(let x = 0; x < collection.length; x++){
    if(collection[x]/26 <= 1){
      let i = String.fromCharCode(96+collection[x])
      result.push(i)
    } else {
      let index = collection[x]%26
      let m = 'a' + String.fromCharCode(96+index)
      result.push(m)
    }
  }
  return result
};

module.exports = number_map_to_word_over_26;
